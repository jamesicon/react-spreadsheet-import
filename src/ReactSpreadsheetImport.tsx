import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import { Stepper } from "./components/Stepper";
import { MatchColumnsStep } from "./steps/MatchColumnsStep";
import { SelectHeaderStep } from "./steps/SelectHeaderStep";
import { SelectSheetStep } from "./steps/SelectSheetStep";
import { UploadStep } from "./steps/UploadStep";
import { ValidationStep } from "./steps/ValidationStep";
import { defaultTranslations, mergeTranslations } from "./translations/defaultTranslations";
import type {
  ImportResult,
  ReactSpreadsheetImportProps,
  StepName,
  Translations,
  UploadedWorkbook,
} from "./types";

interface State<Key extends string> {
  step: StepName;
  workbook: UploadedWorkbook | null;
  sheetIndex: number;
  headerIndex: number;
  mapping: Array<string | undefined>;
  mappedRows: Array<Partial<Record<Key, string>>>;
  showCloseConfirm: boolean;
  maxExceeded: boolean;
}

const INITIAL_STATE = {
  step: "upload" as StepName,
  workbook: null,
  sheetIndex: 0,
  headerIndex: 0,
  mapping: [] as Array<string | undefined>,
  mappedRows: [] as Array<Partial<Record<string, string>>>,
  showCloseConfirm: false,
  maxExceeded: false,
};

export function ReactSpreadsheetImport<Key extends string = string>(props: ReactSpreadsheetImportProps<Key>) {
  const {
    isOpen = true,
    onClose,
    onSubmit,
    fields,
    schema,
    rowHook,
    uploadStepHook,
    selectHeaderStepHook,
    matchColumnsStepHook,
    maxRecords,
    maxFileSize,
    allowInvalidSubmit = true,
    autoMapHeaders,
    autoMapDistance,
    translations: translationsOverride,
    title,
    inline = false,
    hideStepper = false,
    hideStepTitles = false,
  } = props;

  const t: Translations = useMemo(
    () => mergeTranslations(defaultTranslations, translationsOverride as Partial<Translations> | undefined),
    [translationsOverride],
  );

  const [state, setState] = useState<State<Key>>(INITIAL_STATE as State<Key>);

  // Reset whenever the modal is re-opened. In inline mode, the component lifecycle handles reset.
  useEffect(() => {
    if (!inline && isOpen) {
      setState(INITIAL_STATE as State<Key>);
    }
  }, [isOpen, inline]);

  const sheet = state.workbook?.sheets[state.sheetIndex];
  const dataRows = sheet?.rows ?? [];
  const headerRow = dataRows[state.headerIndex] ?? [];
  const bodyRows = dataRows.slice(state.headerIndex + 1);

  function tryClose() {
    if (!onClose) return;
    if (state.step === "upload") {
      onClose();
    } else {
      setState((s) => ({ ...s, showCloseConfirm: true }));
    }
  }

  async function handleUploaded(wb: UploadedWorkbook) {
    if (wb.sheets.length > 1) {
      setState((s) => ({ ...s, workbook: wb, step: "selectSheet" }));
      return;
    }
    advanceFromSheet(wb, 0);
  }

  function advanceFromSheet(wb: UploadedWorkbook, idx: number) {
    const rows = wb.sheets[idx]?.rows ?? [];
    const exceeded = maxRecords !== undefined && rows.length - 1 > maxRecords;
    setState((s) => ({
      ...s,
      workbook: wb,
      sheetIndex: idx,
      step: "selectHeader",
      maxExceeded: exceeded,
    }));
  }

  async function handleHeader(idx: number) {
    let nextHeader = dataRows[idx] ?? [];
    let nextBody = dataRows.slice(idx + 1);
    if (selectHeaderStepHook) {
      const r = await selectHeaderStepHook(nextHeader, nextBody);
      nextHeader = r.headerValues;
      nextBody = r.data;
    }
    if (state.workbook && state.workbook.sheets[state.sheetIndex]) {
      const sheets = state.workbook.sheets.slice();
      sheets[state.sheetIndex] = {
        ...sheets[state.sheetIndex]!,
        rows: [nextHeader, ...nextBody],
      };
      setState((s) => ({ ...s, workbook: { ...state.workbook!, sheets }, headerIndex: 0, step: "matchColumns" }));
    } else {
      setState((s) => ({ ...s, headerIndex: idx, step: "matchColumns" }));
    }
  }

  async function handleMatch(mapping: Array<string | undefined>) {
    const mapped = bodyRows.map((row) => {
      const obj: Partial<Record<Key, string>> = {};
      mapping.forEach((key, i) => {
        if (key) (obj as any)[key] = row[i] ?? "";
      });
      return obj;
    });
    const transformed = matchColumnsStepHook ? await matchColumnsStepHook(mapped as any) : mapped;
    setState((s) => ({ ...s, mapping, mappedRows: transformed as Array<Partial<Record<Key, string>>>, step: "validate" }));
  }

  async function handleSubmit(result: ImportResult<Key>) {
    if (!state.workbook) return;
    await onSubmit(result, state.workbook.file);
    onClose?.();
  }

  const body: ReactNode = (
    <div className="d-flex flex-column gap-3">
      {!hideStepper && <Stepper current={state.step} translations={t.stepper} />}

      {state.maxExceeded && maxRecords !== undefined && (
        <Alert variant="danger" className="m-0">
          {t.uploadStep.maxRecordsExceeded(maxRecords)}
        </Alert>
      )}

      {state.step === "upload" && (
        <UploadStep
          fields={fields as ReadonlyArray<any>}
          maxFileSize={maxFileSize}
          translations={t.uploadStep}
          onLoaded={handleUploaded}
          uploadStepHook={uploadStepHook}
          showTitle={!hideStepTitles}
        />
      )}

      {state.step === "selectSheet" && state.workbook && (
        <SelectSheetStep
          workbook={state.workbook}
          translations={t.selectSheetStep}
          onBack={() => setState((s) => ({ ...s, step: "upload" }))}
          onNext={(idx) => advanceFromSheet(state.workbook!, idx)}
          showTitle={!hideStepTitles}
        />
      )}

      {state.step === "selectHeader" && (
        <SelectHeaderStep
          rows={dataRows}
          translations={t.selectHeaderStep}
          onBack={() =>
            setState((s) => ({
              ...s,
              step: state.workbook && state.workbook.sheets.length > 1 ? "selectSheet" : "upload",
            }))
          }
          onNext={handleHeader}
          showTitle={!hideStepTitles}
        />
      )}

      {state.step === "matchColumns" && (
        <MatchColumnsStep
          fields={fields}
          headers={headerRow}
          rows={bodyRows}
          autoMapHeaders={autoMapHeaders}
          autoMapDistance={autoMapDistance}
          translations={t.matchColumnsStep}
          alertTranslations={t.alerts.unmatchedRequiredFields}
          onBack={() => setState((s) => ({ ...s, step: "selectHeader" }))}
          onNext={handleMatch}
          showTitle={!hideStepTitles}
        />
      )}

      {state.step === "validate" && (
        <ValidationStep
          fields={fields}
          initialRows={state.mappedRows}
          schema={schema}
          rowHook={rowHook}
          allowInvalidSubmit={allowInvalidSubmit}
          translations={t.validationStep}
          alertTranslations={t.alerts.submitIncomplete}
          onBack={() => setState((s) => ({ ...s, step: "matchColumns" }))}
          onSubmit={handleSubmit}
          showTitle={!hideStepTitles}
        />
      )}
    </div>
  );

  if (inline) {
    return <div className="rsi-inline">{body}</div>;
  }

  return (
    <>
      <Modal
        show={isOpen}
        onHide={tryClose}
        size="xl"
        backdrop="static"
        scrollable
        className="rsi-modal"
        contentClassName="rsi-modal-content"
      >
        <Modal.Header closeButton>
          <Modal.Title>{title ?? "Spreadsheet importer"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
      </Modal>

      <Modal
        show={state.showCloseConfirm}
        onHide={() => setState((s) => ({ ...s, showCloseConfirm: false }))}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{t.alerts.confirmClose.headerTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{t.alerts.confirmClose.bodyText}</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setState((s) => ({ ...s, showCloseConfirm: false }))}>
            {t.alerts.confirmClose.cancelButtonTitle}
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setState((s) => ({ ...s, showCloseConfirm: false }));
              onClose?.();
            }}
          >
            {t.alerts.confirmClose.exitButtonTitle}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
