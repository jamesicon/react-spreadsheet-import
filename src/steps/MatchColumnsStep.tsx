import { useEffect, useMemo, useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import type { Field, RawSheet, Translations } from "../types";
import { autoMatchColumns } from "../utils/autoMatch";

interface Props<Key extends string> {
  fields: ReadonlyArray<Field<Key>>;
  headers: ReadonlyArray<string>;
  rows: RawSheet;
  autoMapHeaders?: boolean;
  autoMapDistance?: number;
  translations: Translations["matchColumnsStep"];
  alertTranslations: Translations["alerts"]["unmatchedRequiredFields"];
  onBack: () => void;
  onNext: (mapping: Array<string | undefined>) => void;
  showTitle?: boolean;
}

const IGNORE = "__ignore__";
const SAMPLE_ROWS = 3;
const COLUMN_MIN_WIDTH = 180;

export function MatchColumnsStep<Key extends string>({
  fields,
  headers,
  rows,
  autoMapDistance,
  translations,
  alertTranslations,
  onBack,
  onNext,
  showTitle = true,
}: Props<Key>) {
  const initial = useMemo(
    () => autoMatchColumns(headers, fields as ReadonlyArray<Field>, autoMapDistance),
    [headers, fields, autoMapDistance],
  );
  const [mapping, setMapping] = useState<Array<string | undefined>>(initial);
  const [showWarn, setShowWarn] = useState(false);

  useEffect(() => setMapping(initial), [initial]);

  const sample = rows.slice(0, SAMPLE_ROWS);

  function setColumn(idx: number, value: string) {
    setMapping((prev) => {
      const next = [...prev];
      const newVal = value === IGNORE || value === "" ? undefined : value;
      if (newVal) {
        for (let i = 0; i < next.length; i++) {
          if (i !== idx && next[i] === newVal) next[i] = undefined;
        }
      }
      next[idx] = newVal;
      return next;
    });
  }

  const matched = new Set(mapping.filter((v): v is string => Boolean(v)));
  const requiredKeys = fields.filter((f) => f.required).map((f) => f.key);
  const unmatchedRequired = requiredKeys.filter((k) => !matched.has(k));

  function handleNext() {
    if (unmatchedRequired.length > 0) {
      setShowWarn(true);
      return;
    }
    onNext(mapping);
  }

  const gridCols = `repeat(${headers.length}, minmax(${COLUMN_MIN_WIDTH}px, 1fr))`;

  return (
    <div className="d-flex flex-column gap-3">
      {showTitle && <h5 className="m-0">{translations.title}</h5>}

      <div className="rsi-match-card border rounded overflow-auto">
        <div className="rsi-match-grid" style={{ display: "grid", gridTemplateColumns: gridCols }}>
          <div className="rsi-match-section-label" style={{ gridColumn: "1 / -1" }}>
            {translations.userTableTitle}
          </div>

          {headers.map((h, idx) => {
            const isIgnored = mapping[idx] === undefined;
            return (
              <div
                key={`h-${idx}`}
                className={`rsi-match-col-header p-3 border-end ${isIgnored ? "opacity-50" : ""}`}
              >
                <div className="d-flex justify-content-between align-items-start gap-2">
                  <strong className="text-truncate" title={h}>{h || `(column ${idx + 1})`}</strong>
                  <Button
                    variant="light"
                    size="sm"
                    className="rsi-ignore-btn p-0 d-inline-flex align-items-center justify-content-center"
                    style={{ width: 22, height: 22, lineHeight: 1 }}
                    title={translations.ignoredColumnText}
                    onClick={() => setColumn(idx, IGNORE)}
                    disabled={isIgnored}
                  >
                    ×
                  </Button>
                </div>
              </div>
            );
          })}
          {sample.map((row, ri) =>
            headers.map((_, ci) => {
              const isIgnored = mapping[ci] === undefined;
              return (
                <div
                  key={`s-${ri}-${ci}`}
                  className={`rsi-match-col-sample px-3 py-2 border-end small text-muted text-truncate ${isIgnored ? "opacity-50" : ""}`}
                  style={{ opacity: isIgnored ? 0.4 : 1 - ri * 0.25 }}
                  title={row[ci] ?? ""}
                >
                  {row[ci] ?? ""}
                </div>
              );
            }),
          )}

          <div className="rsi-match-section-label rsi-match-section-divider" style={{ gridColumn: "1 / -1" }}>
            {translations.templateTitle}
          </div>

          {headers.map((h, idx) => {
            const value = mapping[idx];
            const status = statusFor(value, fields);
            return (
              <div key={`m-${idx}`} className="p-3 border-end d-flex align-items-center gap-2">
                <Form.Select
                  size="sm"
                  value={value ?? IGNORE}
                  onChange={(e) => setColumn(idx, e.target.value)}
                  aria-label={`${translations.matchDropdownTitle}: ${h}`}
                >
                  <option value={IGNORE}>{translations.ignoredColumnText}</option>
                  {fields.map((f) => (
                    <option
                      key={f.key}
                      value={f.key}
                      disabled={matched.has(f.key) && value !== f.key}
                    >
                      {f.label}
                      {f.required ? " *" : ""}
                    </option>
                  ))}
                </Form.Select>
                <span
                  className={`rsi-status-dot ${status.className}`}
                  title={status.title}
                  aria-label={status.title}
                />
              </div>
            );
          })}
        </div>
      </div>

      {unmatchedRequired.length > 0 && (
        <Alert variant="warning" className="m-0">
          {translations.unmatched}:{" "}
          {unmatchedRequired
            .map((k) => fields.find((f) => f.key === k)?.label ?? k)
            .join(", ")}
        </Alert>
      )}

      <div className="d-flex justify-content-between">
        <Button variant="outline-secondary" onClick={onBack}>{translations.backButtonTitle}</Button>
        <Button variant="primary" onClick={handleNext}>{translations.nextButtonTitle}</Button>
      </div>

      <Modal show={showWarn} onHide={() => setShowWarn(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{alertTranslations.headerTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{alertTranslations.bodyText}</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setShowWarn(false)}>
            {alertTranslations.cancelButtonTitle}
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setShowWarn(false);
              onNext(mapping);
            }}
          >
            {alertTranslations.continueButtonTitle}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function statusFor(
  key: string | undefined,
  fields: ReadonlyArray<Field>,
): { className: string; title: string } {
  if (!key) return { className: "rsi-status-ignored", title: "Ignored" };
  const f = fields.find((x) => x.key === key);
  if (f?.required) return { className: "rsi-status-matched-required", title: `Matched: ${f.label}` };
  return { className: "rsi-status-matched", title: `Matched${f ? `: ${f.label}` : ""}` };
}
