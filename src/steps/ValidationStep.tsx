import { useEffect, useMemo, useState } from "react";
import { Alert, Button, Form, Modal, OverlayTrigger, Spinner, Tooltip } from "react-bootstrap";
import { DataGrid, type Column } from "react-data-grid";
import "react-data-grid/lib/styles.css";
import type { ObjectSchema } from "yup";
import type {
  Field,
  ImportResult,
  ImportedRow,
  RowHook,
  Translations,
} from "../types";
import { rowHasErrors, validateRows } from "../utils/validateRows";

interface Props<Key extends string> {
  fields: ReadonlyArray<Field<Key>>;
  initialRows: Array<Partial<Record<Key, string>>>;
  schema?: ObjectSchema<Partial<Record<Key, string>>>;
  rowHook?: RowHook<Key>;
  allowInvalidSubmit: boolean;
  translations: Translations["validationStep"];
  alertTranslations: Translations["alerts"]["submitIncomplete"];
  onBack: () => void;
  onSubmit: (result: ImportResult<Key>) => void | Promise<void>;
  showTitle?: boolean;
}

export function ValidationStep<Key extends string>({
  fields,
  initialRows,
  schema,
  rowHook,
  allowInvalidSubmit,
  translations,
  alertTranslations,
  onBack,
  onSubmit,
  showTitle = true,
}: Props<Key>) {
  const [rows, setRows] = useState<Array<ImportedRow<Key>>>([]);
  const [selected, setSelected] = useState<ReadonlySet<string>>(new Set());
  const [filterErrors, setFilterErrors] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    validateRows({ rows: initialRows, fields, schema, rowHook }).then((res) => {
      if (!cancelled) {
        setRows(res);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [initialRows, fields, schema, rowHook]);

  const columns = useMemo<Column<ImportedRow<Key>>[]>(() => {
    return fields.map((f) => ({
      key: f.key,
      name: f.label,
      editable: true,
      resizable: true,
      renderEditCell: ({ row, onRowChange, onClose }) => (
        <input
          autoFocus
          className="form-control form-control-sm rsi-cell-edit"
          value={((row as any)[f.key] as string | undefined) ?? ""}
          onChange={(e) => onRowChange({ ...row, [f.key]: e.target.value })}
          onBlur={() => onClose(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onClose(true);
            if (e.key === "Escape") onClose(false);
          }}
        />
      ),
      renderCell: ({ row }) => {
        const value = (row as any)[f.key] as string | undefined;
        const err = row.__errors?.[f.key];
        const inner = (
          <div
            className={err ? `rsi-cell-${err.level}` : undefined}
            style={{ width: "100%", height: "100%", display: "flex", alignItems: "center" }}
          >
            {value ?? ""}
          </div>
        );
        if (!err) return inner;
        return (
          <OverlayTrigger
            placement="top"
            container={document.body}
            overlay={
              <Tooltip id={`rsi-err-${f.key}-${row.__index}`} className="rsi-error-tooltip">
                {err.message}
              </Tooltip>
            }
          >
            {inner}
          </OverlayTrigger>
        );
      },
    }));
  }, [fields]);

  async function revalidate(next: Array<ImportedRow<Key>>) {
    const stripped = next.map((r) => {
      const { __index, __errors, ...rest } = r as any;
      return rest as Partial<Record<Key, string>>;
    });
    const validated = await validateRows({ rows: stripped, fields, schema, rowHook });
    setRows(validated);
  }

  const visibleRows = filterErrors ? rows.filter(rowHasErrors) : rows;

  const errorCount = rows.filter(rowHasErrors).length;

  function handleDiscard() {
    setRows((prev) => prev.filter((r) => !selected.has(r.__index)));
    setSelected(new Set());
  }

  async function doSubmit() {
    const valid = rows.filter((r) => !rowHasErrors(r));
    const invalid = rows.filter(rowHasErrors);
    const result: ImportResult<Key> = {
      validData: valid.map(({ __index, __errors, ...rest }) => rest as any),
      invalidData: invalid,
      all: rows,
    };
    setSubmitting(true);
    try {
      await onSubmit(result);
    } finally {
      setSubmitting(false);
    }
  }

  function handleSubmit() {
    if (errorCount > 0) {
      setShowConfirm(true);
      return;
    }
    void doSubmit();
  }

  return (
    <div className="d-flex flex-column gap-3" style={{ minHeight: 400 }}>
      <div className="d-flex align-items-center justify-content-between">
        {showTitle ? <h5 className="m-0">{translations.title}</h5> : <div />}
        <div className="d-flex align-items-center gap-3">
          <Form.Check
            type="switch"
            id="rsi-filter-errors"
            label={translations.filterSwitchTitle}
            checked={filterErrors}
            onChange={(e) => setFilterErrors(e.target.checked)}
          />
          <Button variant="outline-danger" size="sm" disabled={selected.size === 0} onClick={handleDiscard}>
            {translations.discardButtonTitle} ({selected.size})
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="d-flex align-items-center justify-content-center flex-grow-1">
          <Spinner animation="border" />
        </div>
      ) : visibleRows.length === 0 ? (
        <Alert variant="info" className="m-0">
          {filterErrors ? translations.noRowsMessageWhenFiltered : translations.noRowsMessage}
        </Alert>
      ) : (
        <div className="rsi-grid-wrapper" style={{ flex: 1, minHeight: 320 }}>
          <DataGrid<ImportedRow<Key>, unknown, string>
            className="rdg-light"
            columns={columns}
            rows={visibleRows}
            rowKeyGetter={(r: ImportedRow<Key>) => r.__index}
            rowClass={(row: ImportedRow<Key>) => rowHasErrors(row) ? "rsi-row-error" : undefined}
            selectedRows={selected as Set<string>}
            onSelectedRowsChange={(rows: Set<string>) => setSelected(rows)}
            onRowsChange={(updated: ImportedRow<Key>[]) => {
              const updatedByIndex = new Map(updated.map((r) => [r.__index, r]));
              const next = rows.map((r) => updatedByIndex.get(r.__index) ?? r);
              setRows(next);
              void revalidate(next);
            }}
            style={{ blockSize: "100%" }}
          />
        </div>
      )}

      {errorCount > 0 && (
        <div className="text-danger small">
          {errorCount} row{errorCount === 1 ? "" : "s"} with errors
        </div>
      )}

      <div className="d-flex justify-content-between">
        <Button variant="outline-secondary" onClick={onBack} disabled={submitting}>
          {translations.backButtonTitle}
        </Button>
        <Button variant="primary" onClick={handleSubmit} disabled={submitting || (!allowInvalidSubmit && errorCount > 0)}>
          {submitting ? <Spinner size="sm" animation="border" /> : translations.submitButtonTitle}
        </Button>
      </div>

      <Modal show={showConfirm} onHide={() => setShowConfirm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{alertTranslations.headerTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {allowInvalidSubmit ? alertTranslations.bodyText : alertTranslations.bodyTextSubmitForbidden}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setShowConfirm(false)}>
            {alertTranslations.cancelButtonTitle}
          </Button>
          {allowInvalidSubmit && (
            <Button
              variant="primary"
              onClick={() => {
                setShowConfirm(false);
                void doSubmit();
              }}
            >
              {alertTranslations.finishButtonTitle}
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
