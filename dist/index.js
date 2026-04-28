// #style-inject:#style-inject
function styleInject(css, { insertAt } = {}) {
  if (!css || typeof document === "undefined") return;
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

// src/styles.css
styleInject(".rsi-modal-content {\n  --rsi-error: var(--bs-danger);\n  --rsi-warning: var(--bs-warning);\n  --rsi-info: var(--bs-info);\n}\n.rsi-dropzone {\n  border-style: dashed !important;\n  transition: background-color 120ms ease, border-color 120ms ease;\n}\n.rsi-grid-wrapper .rdg {\n  block-size: 100%;\n  border: 1px solid var(--bs-border-color);\n  border-radius: var(--bs-border-radius);\n  --rdg-border-color: var(--bs-border-color-translucent);\n  --rdg-color: var(--bs-body-color);\n  --rdg-background-color: var(--bs-body-bg);\n  --rdg-header-background-color: var(--bs-tertiary-bg);\n  --rdg-row-hover-background-color: var(--bs-secondary-bg);\n  --rdg-row-selected-background-color: var(--bs-primary-bg-subtle);\n  --rdg-row-selected-hover-background-color: var(--bs-primary-bg-subtle);\n  --rdg-selection-color: var(--bs-primary);\n  font-family: inherit;\n  font-size: 0.875rem;\n}\n.rsi-cell-error {\n  background-color: var(--bs-danger-bg-subtle);\n  color: var(--bs-danger-text-emphasis);\n  padding: 0 4px;\n  border-radius: 2px;\n  cursor: help;\n}\n.rsi-error-tooltip .tooltip-inner {\n  background-color: #0a2540;\n  color: #ffffff;\n  font-size: 0.8125rem;\n  max-width: 320px;\n  text-align: left;\n}\n.rsi-error-tooltip.bs-tooltip-top .tooltip-arrow::before,\n.rsi-error-tooltip.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {\n  border-top-color: #0a2540;\n}\n.rsi-error-tooltip.bs-tooltip-bottom .tooltip-arrow::before,\n.rsi-error-tooltip.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before {\n  border-bottom-color: #0a2540;\n}\n.rsi-cell-warning {\n  background-color: var(--bs-warning-bg-subtle);\n  color: var(--bs-warning-text-emphasis);\n  padding: 0 4px;\n  border-radius: 2px;\n}\n.rsi-cell-info {\n  background-color: var(--bs-info-bg-subtle);\n  color: var(--bs-info-text-emphasis);\n  padding: 0 4px;\n  border-radius: 2px;\n}\n.rsi-cell-edit {\n  height: 100%;\n  border-radius: 0;\n}\n.rsi-stepper-row {\n  gap: 1px;\n  background-color: transparent;\n}\n.rsi-stepper-item {\n  min-width: 0;\n  padding-right: 1rem;\n}\n.rsi-stepper-item:last-child {\n  padding-right: 0;\n}\n.rsi-stepper-bar {\n  height: 4px;\n  background-color: var(--bs-border-color);\n  border-radius: 2px;\n  margin-bottom: 0.5rem;\n}\n.rsi-stepper-done .rsi-stepper-bar,\n.rsi-stepper-active .rsi-stepper-bar {\n  background-color: var(--bs-primary);\n}\n.rsi-stepper-label {\n  color: var(--bs-secondary-color);\n  font-weight: 500;\n}\n.rsi-stepper-active .rsi-stepper-label {\n  color: var(--bs-body-color);\n  font-weight: 600;\n}\n.rsi-stepper-num {\n  color: inherit;\n}\n.rsi-stepper-active .rsi-stepper-num {\n  color: #1b9aa9;\n}\n.rsi-inline .btn-primary,\n.rsi-modal-content .btn-primary {\n  color: #1b9aa9;\n  background-color: #ffffff;\n  border-color: #dfeff3;\n}\n.rsi-inline .btn-primary:hover,\n.rsi-modal-content .btn-primary:hover,\n.rsi-inline .btn-primary:focus,\n.rsi-modal-content .btn-primary:focus {\n  color: #2696a6;\n  background-color: #f2fafb;\n  border-color: #d1ebee;\n}\n.rsi-inline .btn-primary:active,\n.rsi-modal-content .btn-primary:active,\n.rsi-inline .btn-primary:disabled,\n.rsi-modal-content .btn-primary:disabled {\n  color: #1b9aa9;\n  background-color: #f2fafb;\n  border-color: #d1ebee;\n}\n.rsi-inline .btn-primary:focus-visible,\n.rsi-modal-content .btn-primary:focus-visible {\n  box-shadow: 0 0 0 0.25rem rgba(27, 154, 169, 0.25);\n}\n.rsi-inline .btn-outline-secondary,\n.rsi-modal-content .btn-outline-secondary {\n  color: #858c9c;\n  background-color: #ffffff;\n  border-color: #e7e7ec;\n}\n.rsi-inline .btn-outline-secondary:hover,\n.rsi-modal-content .btn-outline-secondary:hover,\n.rsi-inline .btn-outline-secondary:focus,\n.rsi-modal-content .btn-outline-secondary:focus {\n  color: #0a2540;\n  background-color: #f8f8f8;\n  border-color: #cfcfd7;\n}\n.rsi-inline .btn-outline-secondary:active,\n.rsi-modal-content .btn-outline-secondary:active,\n.rsi-inline .btn-outline-secondary:disabled,\n.rsi-modal-content .btn-outline-secondary:disabled {\n  color: #858c9c;\n  background-color: #f8f8f8;\n  border-color: #cfcfd7;\n}\n.rsi-inline .btn-outline-secondary:focus-visible,\n.rsi-modal-content .btn-outline-secondary:focus-visible {\n  box-shadow: 0 0 0 0.25rem rgba(133, 140, 156, 0.25);\n}\n.rsi-match-grid > * {\n  border-bottom: 1px solid var(--bs-border-color);\n}\n.rsi-match-grid > *:last-child,\n.rsi-match-grid .rsi-match-col-header:last-child {\n  border-right: 0;\n}\n.rsi-match-section-label {\n  position: sticky;\n  left: 0;\n  padding: 0.75rem 1rem;\n  font-weight: 600;\n  background-color: var(--bs-tertiary-bg);\n  color: var(--bs-body-color);\n  width: max-content;\n  min-width: 100%;\n  border-bottom: 1px solid var(--bs-border-color);\n}\n.rsi-match-section-divider {\n  border-top: 1px solid var(--bs-border-color);\n}\n.rsi-status-dot {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  border: 2px solid var(--bs-border-color);\n  flex-shrink: 0;\n}\n.rsi-status-dot.rsi-status-matched {\n  background-color: var(--bs-success);\n  border-color: var(--bs-success);\n}\n.rsi-status-dot.rsi-status-matched-required {\n  background-color: var(--bs-success);\n  border-color: var(--bs-success);\n}\n.rsi-status-dot.rsi-status-ignored {\n  background-color: transparent;\n  border-color: var(--bs-secondary-border-subtle);\n}\n.rsi-ignore-btn {\n  border: 1px solid var(--bs-border-color);\n  background-color: var(--bs-secondary-bg);\n  color: var(--bs-secondary-color);\n  font-size: 14px;\n}\n.rsi-ignore-btn:hover {\n  background-color: var(--bs-tertiary-bg);\n}\n");

// src/ReactSpreadsheetImport.tsx
import { useEffect as useEffect3, useMemo as useMemo3, useState as useState6 } from "react";
import { Alert as Alert4, Button as Button6, Modal as Modal3 } from "react-bootstrap";

// src/components/Stepper.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var ORDER = ["upload", "selectSheet", "selectHeader", "matchColumns", "validate"];
var POSITIONS = [
  { stepNames: ["upload", "selectSheet"], key: "upload" },
  { stepNames: ["selectHeader"], key: "selectHeader" },
  { stepNames: ["matchColumns"], key: "matchColumns" },
  { stepNames: ["validate"], key: "submit" }
];
function Stepper({ current, translations }) {
  const currentOrder = ORDER.indexOf(current);
  return /* @__PURE__ */ jsx("nav", { "aria-label": "Import progress", className: "rsi-stepper", children: /* @__PURE__ */ jsx("div", { className: "rsi-stepper-row d-flex", children: POSITIONS.map((pos, idx) => {
    const positionMaxOrder = Math.max(...pos.stepNames.map((s) => ORDER.indexOf(s)));
    const positionMinOrder = Math.min(...pos.stepNames.map((s) => ORDER.indexOf(s)));
    const status = currentOrder > positionMaxOrder ? "done" : currentOrder >= positionMinOrder ? "active" : "todo";
    return /* @__PURE__ */ jsxs("div", { className: `rsi-stepper-item flex-fill rsi-stepper-${status}`, children: [
      /* @__PURE__ */ jsx("div", { className: "rsi-stepper-bar", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxs("div", { className: "rsi-stepper-label small", children: [
        /* @__PURE__ */ jsxs("span", { className: "rsi-stepper-num", children: [
          idx + 1,
          "."
        ] }),
        " ",
        translations[pos.key]
      ] })
    ] }, pos.key);
  }) }) });
}

// src/steps/MatchColumnsStep.tsx
import { useEffect, useMemo, useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";

// src/utils/autoMatch.ts
import Fuse from "fuse.js";
var NORMALIZE = /[\s_\-./]+/g;
function normalize(s) {
  return s.toLowerCase().replace(NORMALIZE, "").trim();
}
function autoMatchColumns(headers, fields, distance = 0.25) {
  const entries = [];
  for (const f of fields) {
    const candidates = /* @__PURE__ */ new Set([f.key, f.label, ...f.alternateMatches ?? []]);
    for (const c of candidates) {
      entries.push({ fieldKey: f.key, candidate: normalize(c) });
    }
  }
  const fuse = new Fuse(entries, {
    keys: ["candidate"],
    threshold: distance,
    ignoreLocation: true,
    isCaseSensitive: false
  });
  const used = /* @__PURE__ */ new Set();
  const result = headers.map(() => void 0);
  const all = [];
  headers.forEach((h, idx) => {
    if (!h || !h.trim()) return;
    const found = fuse.search(normalize(h));
    const seen = /* @__PURE__ */ new Map();
    for (const r of found) {
      const score = r.score ?? 1;
      const key = r.item.fieldKey;
      const prev = seen.get(key);
      if (prev === void 0 || score < prev) seen.set(key, score);
    }
    for (const [fieldKey, score] of seen) {
      all.push({ headerIdx: idx, fieldKey, score });
    }
  });
  all.sort((a, b) => a.score - b.score);
  const headerAssigned = /* @__PURE__ */ new Set();
  for (const m of all) {
    if (headerAssigned.has(m.headerIdx)) continue;
    if (used.has(m.fieldKey)) continue;
    result[m.headerIdx] = m.fieldKey;
    headerAssigned.add(m.headerIdx);
    used.add(m.fieldKey);
  }
  return result;
}

// src/steps/MatchColumnsStep.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var IGNORE = "__ignore__";
var SAMPLE_ROWS = 3;
var COLUMN_MIN_WIDTH = 180;
function MatchColumnsStep({
  fields,
  headers,
  rows,
  autoMapDistance,
  translations,
  alertTranslations,
  onBack,
  onNext,
  showTitle = true
}) {
  const initial = useMemo(
    () => autoMatchColumns(headers, fields, autoMapDistance),
    [headers, fields, autoMapDistance]
  );
  const [mapping, setMapping] = useState(initial);
  const [showWarn, setShowWarn] = useState(false);
  useEffect(() => setMapping(initial), [initial]);
  const sample = rows.slice(0, SAMPLE_ROWS);
  function setColumn(idx, value) {
    setMapping((prev) => {
      const next = [...prev];
      const newVal = value === IGNORE || value === "" ? void 0 : value;
      if (newVal) {
        for (let i = 0; i < next.length; i++) {
          if (i !== idx && next[i] === newVal) next[i] = void 0;
        }
      }
      next[idx] = newVal;
      return next;
    });
  }
  const matched = new Set(mapping.filter((v) => Boolean(v)));
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
  return /* @__PURE__ */ jsxs2("div", { className: "d-flex flex-column gap-3", children: [
    showTitle && /* @__PURE__ */ jsx2("h5", { className: "m-0", children: translations.title }),
    /* @__PURE__ */ jsx2("div", { className: "rsi-match-card border rounded overflow-auto", children: /* @__PURE__ */ jsxs2("div", { className: "rsi-match-grid", style: { display: "grid", gridTemplateColumns: gridCols }, children: [
      /* @__PURE__ */ jsx2("div", { className: "rsi-match-section-label", style: { gridColumn: "1 / -1" }, children: translations.userTableTitle }),
      headers.map((h, idx) => {
        const isIgnored = mapping[idx] === void 0;
        return /* @__PURE__ */ jsx2(
          "div",
          {
            className: `rsi-match-col-header p-3 border-end ${isIgnored ? "opacity-50" : ""}`,
            children: /* @__PURE__ */ jsxs2("div", { className: "d-flex justify-content-between align-items-start gap-2", children: [
              /* @__PURE__ */ jsx2("strong", { className: "text-truncate", title: h, children: h || `(column ${idx + 1})` }),
              /* @__PURE__ */ jsx2(
                Button,
                {
                  variant: "light",
                  size: "sm",
                  className: "rsi-ignore-btn p-0 d-inline-flex align-items-center justify-content-center",
                  style: { width: 22, height: 22, lineHeight: 1 },
                  title: translations.ignoredColumnText,
                  onClick: () => setColumn(idx, IGNORE),
                  disabled: isIgnored,
                  children: "\xD7"
                }
              )
            ] })
          },
          `h-${idx}`
        );
      }),
      sample.map(
        (row, ri) => headers.map((_, ci) => {
          const isIgnored = mapping[ci] === void 0;
          return /* @__PURE__ */ jsx2(
            "div",
            {
              className: `rsi-match-col-sample px-3 py-2 border-end small text-muted text-truncate ${isIgnored ? "opacity-50" : ""}`,
              style: { opacity: isIgnored ? 0.4 : 1 - ri * 0.25 },
              title: row[ci] ?? "",
              children: row[ci] ?? ""
            },
            `s-${ri}-${ci}`
          );
        })
      ),
      /* @__PURE__ */ jsx2("div", { className: "rsi-match-section-label rsi-match-section-divider", style: { gridColumn: "1 / -1" }, children: translations.templateTitle }),
      headers.map((h, idx) => {
        const value = mapping[idx];
        const status = statusFor(value, fields);
        return /* @__PURE__ */ jsxs2("div", { className: "p-3 border-end d-flex align-items-center gap-2", children: [
          /* @__PURE__ */ jsxs2(
            Form.Select,
            {
              size: "sm",
              value: value ?? IGNORE,
              onChange: (e) => setColumn(idx, e.target.value),
              "aria-label": `${translations.matchDropdownTitle}: ${h}`,
              children: [
                /* @__PURE__ */ jsx2("option", { value: IGNORE, children: translations.ignoredColumnText }),
                fields.map((f) => /* @__PURE__ */ jsxs2(
                  "option",
                  {
                    value: f.key,
                    disabled: matched.has(f.key) && value !== f.key,
                    children: [
                      f.label,
                      f.required ? " *" : ""
                    ]
                  },
                  f.key
                ))
              ]
            }
          ),
          /* @__PURE__ */ jsx2(
            "span",
            {
              className: `rsi-status-dot ${status.className}`,
              title: status.title,
              "aria-label": status.title
            }
          )
        ] }, `m-${idx}`);
      })
    ] }) }),
    unmatchedRequired.length > 0 && /* @__PURE__ */ jsxs2(Alert, { variant: "warning", className: "m-0", children: [
      translations.unmatched,
      ":",
      " ",
      unmatchedRequired.map((k) => fields.find((f) => f.key === k)?.label ?? k).join(", ")
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "d-flex justify-content-between", children: [
      /* @__PURE__ */ jsx2(Button, { variant: "outline-secondary", onClick: onBack, children: translations.backButtonTitle }),
      /* @__PURE__ */ jsx2(Button, { variant: "primary", onClick: handleNext, children: translations.nextButtonTitle })
    ] }),
    /* @__PURE__ */ jsxs2(Modal, { show: showWarn, onHide: () => setShowWarn(false), centered: true, children: [
      /* @__PURE__ */ jsx2(Modal.Header, { closeButton: true, children: /* @__PURE__ */ jsx2(Modal.Title, { children: alertTranslations.headerTitle }) }),
      /* @__PURE__ */ jsx2(Modal.Body, { children: alertTranslations.bodyText }),
      /* @__PURE__ */ jsxs2(Modal.Footer, { children: [
        /* @__PURE__ */ jsx2(Button, { variant: "outline-secondary", onClick: () => setShowWarn(false), children: alertTranslations.cancelButtonTitle }),
        /* @__PURE__ */ jsx2(
          Button,
          {
            variant: "primary",
            onClick: () => {
              setShowWarn(false);
              onNext(mapping);
            },
            children: alertTranslations.continueButtonTitle
          }
        )
      ] })
    ] })
  ] });
}
function statusFor(key, fields) {
  if (!key) return { className: "rsi-status-ignored", title: "Ignored" };
  const f = fields.find((x) => x.key === key);
  if (f?.required) return { className: "rsi-status-matched-required", title: `Matched: ${f.label}` };
  return { className: "rsi-status-matched", title: `Matched${f ? `: ${f.label}` : ""}` };
}

// src/steps/SelectHeaderStep.tsx
import { useState as useState2 } from "react";
import { Button as Button2, Table } from "react-bootstrap";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function SelectHeaderStep({ rows, translations, onBack, onNext, showTitle = true }) {
  const [selected, setSelected] = useState2(0);
  return /* @__PURE__ */ jsxs3("div", { className: "d-flex flex-column gap-3", children: [
    showTitle && /* @__PURE__ */ jsx3("h5", { className: "m-0", children: translations.title }),
    /* @__PURE__ */ jsx3("div", { className: "border rounded overflow-auto", style: { maxHeight: 320 }, children: /* @__PURE__ */ jsx3(Table, { hover: true, size: "sm", className: "m-0 align-middle", children: /* @__PURE__ */ jsx3("tbody", { children: rows.slice(0, 25).map((row, idx) => /* @__PURE__ */ jsxs3(
      "tr",
      {
        onClick: () => setSelected(idx),
        className: selected === idx ? "table-primary" : void 0,
        style: { cursor: "pointer" },
        children: [
          /* @__PURE__ */ jsx3("td", { style: { width: 36 }, children: /* @__PURE__ */ jsx3(
            "input",
            {
              type: "radio",
              name: "rsi-header",
              "aria-label": `Use row ${idx + 1} as header`,
              checked: selected === idx,
              onChange: () => setSelected(idx),
              onClick: (e) => e.stopPropagation()
            }
          ) }),
          row.map((cell, ci) => /* @__PURE__ */ jsx3("td", { className: "small text-nowrap", children: cell }, ci))
        ]
      },
      idx
    )) }) }) }),
    /* @__PURE__ */ jsxs3("div", { className: "d-flex justify-content-between", children: [
      /* @__PURE__ */ jsx3(Button2, { variant: "outline-secondary", onClick: onBack, children: translations.backButtonTitle }),
      /* @__PURE__ */ jsx3(Button2, { variant: "primary", onClick: () => onNext(selected), children: translations.nextButtonTitle })
    ] })
  ] });
}

// src/steps/SelectSheetStep.tsx
import { useState as useState3 } from "react";
import { Button as Button3, Form as Form2 } from "react-bootstrap";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
function SelectSheetStep({ workbook, translations, onBack, onNext, showTitle = true }) {
  const [selected, setSelected] = useState3(0);
  return /* @__PURE__ */ jsxs4("div", { className: "d-flex flex-column gap-3", children: [
    showTitle && /* @__PURE__ */ jsx4("h5", { className: "m-0", children: translations.title }),
    /* @__PURE__ */ jsx4(Form2, { children: workbook.sheets.map((s, i) => /* @__PURE__ */ jsx4(
      Form2.Check,
      {
        type: "radio",
        id: `rsi-sheet-${i}`,
        name: "rsi-sheet",
        label: `${s.name} (${s.rows.length} rows)`,
        checked: selected === i,
        onChange: () => setSelected(i)
      },
      s.name + i
    )) }),
    /* @__PURE__ */ jsxs4("div", { className: "d-flex justify-content-between mt-2", children: [
      /* @__PURE__ */ jsx4(Button3, { variant: "outline-secondary", onClick: onBack, children: translations.backButtonTitle }),
      /* @__PURE__ */ jsx4(Button3, { variant: "primary", onClick: () => onNext(selected), children: translations.nextButtonTitle })
    ] })
  ] });
}

// src/steps/UploadStep.tsx
import { useCallback, useState as useState4 } from "react";
import { useDropzone } from "react-dropzone";
import { Alert as Alert2, Button as Button4, Spinner, Table as Table2 } from "react-bootstrap";

// src/utils/parseFile.ts
import ExcelJS from "exceljs";
var CSV_TYPES = ["text/csv", "application/csv"];
var CSV_EXT = /\.csv$/i;
function cellToString(value) {
  if (value === null || value === void 0) return "";
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "object") {
    const v = value;
    if (typeof v.text === "string") return v.text;
    if (Array.isArray(v.richText)) return v.richText.map((r) => r.text).join("");
    if (v.result !== void 0) return cellToString(v.result);
    return "";
  }
  return String(value);
}
function worksheetToRows(ws) {
  const rows = [];
  const lastCol = ws.actualColumnCount || ws.columnCount || 0;
  ws.eachRow({ includeEmpty: true }, (row) => {
    const out = [];
    for (let i = 1; i <= lastCol; i++) {
      out.push(cellToString(row.getCell(i).value));
    }
    rows.push(out);
  });
  while (rows.length && rows[rows.length - 1].every((c) => c === "")) {
    rows.pop();
  }
  return rows;
}
async function parseFile(file) {
  const isCsv = CSV_TYPES.includes(file.type) || CSV_EXT.test(file.name);
  const buffer = await file.arrayBuffer();
  if (isCsv) {
    const text = new TextDecoder("utf-8").decode(buffer);
    const rows = splitCsv(text);
    while (rows.length && rows[rows.length - 1].every((c) => c === "")) {
      rows.pop();
    }
    return { file, sheets: [{ name: "Sheet1", rows }] };
  }
  const wb = new ExcelJS.Workbook();
  await wb.xlsx.load(buffer);
  const sheets = wb.worksheets.map((ws) => ({
    name: ws.name,
    rows: worksheetToRows(ws)
  }));
  return { file, sheets };
}
function splitCsv(input) {
  const out = [];
  let row = [];
  let cell = "";
  let inQuotes = false;
  for (let i = 0; i < input.length; i++) {
    const c = input[i];
    if (inQuotes) {
      if (c === '"') {
        if (input[i + 1] === '"') {
          cell += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        cell += c;
      }
      continue;
    }
    if (c === '"') {
      inQuotes = true;
      continue;
    }
    if (c === ",") {
      row.push(cell);
      cell = "";
      continue;
    }
    if (c === "\n" || c === "\r") {
      if (c === "\r" && input[i + 1] === "\n") i++;
      row.push(cell);
      out.push(row);
      row = [];
      cell = "";
      continue;
    }
    cell += c;
  }
  if (cell.length > 0 || row.length > 0) {
    row.push(cell);
    out.push(row);
  }
  return out;
}

// src/steps/UploadStep.tsx
import { Fragment, jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var ACCEPT = {
  "text/csv": [".csv"],
  "application/vnd.ms-excel": [".xls"],
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"]
};
function UploadStep({ fields, maxFileSize, translations, onLoaded, uploadStepHook, showTitle = true }) {
  const [loading, setLoading] = useState4(false);
  const [error, setError] = useState4(null);
  const onDrop = useCallback(
    async (accepted) => {
      const file = accepted[0];
      if (!file) return;
      setError(null);
      setLoading(true);
      try {
        const wb = await parseFile(file);
        if (uploadStepHook && wb.sheets.length === 1 && wb.sheets[0]) {
          const transformed = await uploadStepHook(wb.sheets[0].rows);
          wb.sheets[0].rows = transformed;
        }
        onLoaded(wb);
      } catch (err) {
        setError(err.message || translations.dropzone.errorToastDescription);
      } finally {
        setLoading(false);
      }
    },
    [onLoaded, uploadStepHook, translations.dropzone.errorToastDescription]
  );
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: ACCEPT,
    maxSize: maxFileSize,
    multiple: false,
    noClick: true,
    noKeyboard: true
  });
  return /* @__PURE__ */ jsxs5("div", { className: "rsi-upload-step d-flex flex-column gap-3", children: [
    showTitle && /* @__PURE__ */ jsx5("h5", { className: "m-0", children: translations.title }),
    /* @__PURE__ */ jsxs5("div", { children: [
      /* @__PURE__ */ jsx5("div", { className: "text-secondary small mb-1", children: translations.manifestTitle }),
      /* @__PURE__ */ jsx5("div", { className: "text-secondary small mb-2", children: translations.manifestDescription }),
      /* @__PURE__ */ jsx5("div", { className: "border rounded overflow-auto", style: { maxHeight: 160 }, children: /* @__PURE__ */ jsxs5(Table2, { size: "sm", className: "m-0", children: [
        /* @__PURE__ */ jsx5("thead", { children: /* @__PURE__ */ jsx5("tr", { children: fields.map((f) => /* @__PURE__ */ jsxs5("th", { className: "text-nowrap small", children: [
          f.label,
          f.required && /* @__PURE__ */ jsx5("span", { className: "text-danger ms-1", children: "*" })
        ] }, f.key)) }) }),
        /* @__PURE__ */ jsx5("tbody", { children: /* @__PURE__ */ jsx5("tr", { children: fields.map((f) => /* @__PURE__ */ jsx5("td", { className: "text-nowrap small text-muted", children: f.example ?? "" }, f.key)) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs5(
      "div",
      {
        ...getRootProps(),
        className: `rsi-dropzone d-flex flex-column align-items-center justify-content-center text-center p-5 border border-2 border-dashed rounded ${isDragActive ? "bg-primary-subtle border-primary" : "bg-body-tertiary"}`,
        style: { minHeight: 180, cursor: "pointer" },
        onClick: open,
        children: [
          /* @__PURE__ */ jsx5("input", { ...getInputProps() }),
          loading ? /* @__PURE__ */ jsxs5(Fragment, { children: [
            /* @__PURE__ */ jsx5(Spinner, { animation: "border", className: "mb-2" }),
            /* @__PURE__ */ jsx5("div", { children: translations.dropzone.loadingTitle })
          ] }) : isDragActive ? /* @__PURE__ */ jsx5("div", { children: translations.dropzone.activeDropzoneTitle }) : /* @__PURE__ */ jsxs5(Fragment, { children: [
            /* @__PURE__ */ jsx5("div", { className: "mb-2", children: translations.dropzone.title }),
            /* @__PURE__ */ jsx5(
              Button4,
              {
                type: "button",
                variant: "primary",
                onClick: (e) => {
                  e.stopPropagation();
                  open();
                },
                children: translations.dropzone.buttonTitle
              }
            )
          ] })
        ]
      }
    ),
    error && /* @__PURE__ */ jsx5(Alert2, { variant: "danger", className: "m-0", children: error })
  ] });
}

// src/steps/ValidationStep.tsx
import { useEffect as useEffect2, useMemo as useMemo2, useState as useState5 } from "react";
import { Alert as Alert3, Button as Button5, Form as Form3, Modal as Modal2, OverlayTrigger, Spinner as Spinner2, Tooltip } from "react-bootstrap";
import { DataGrid } from "react-data-grid";
import "react-data-grid/lib/styles.css";

// src/utils/validateRows.ts
import { ValidationError } from "yup";
async function validateRows(opts) {
  const { rows, fields, schema, rowHook } = opts;
  const uniqueFields = fields.filter((f) => f.unique);
  const out = [];
  for (let i = 0; i < rows.length; i++) {
    let values = { ...rows[i] };
    const errors = {};
    if (schema) {
      try {
        await schema.validate(values, { abortEarly: false });
      } catch (e) {
        if (e instanceof ValidationError) {
          for (const inner of e.inner.length ? e.inner : [e]) {
            const path = inner.path;
            if (!path) continue;
            if (errors[path]) continue;
            errors[path] = { message: inner.message, level: "error" };
          }
        } else {
          throw e;
        }
      }
    }
    if (rowHook) {
      const addError = (k, err) => {
        errors[k] = err;
      };
      values = rowHook(values, addError, rows) ?? values;
    }
    out.push({
      ...values,
      __index: String(i),
      __errors: Object.keys(errors).length ? errors : void 0
    });
  }
  if (uniqueFields.length) {
    for (const f of uniqueFields) {
      const seen = /* @__PURE__ */ new Map();
      out.forEach((r, idx) => {
        const v = r[f.key];
        if (v === void 0 || v === "") return;
        const prev = seen.get(v);
        if (prev !== void 0) {
          const msg = f.uniqueErrorMessage ?? `${f.label} must be unique`;
          markError(out[prev], f.key, msg);
          markError(out[idx], f.key, msg);
        } else {
          seen.set(v, idx);
        }
      });
    }
  }
  return out;
}
function markError(row, key, message) {
  const existing = row.__errors ?? {};
  existing[key] = { message, level: "error" };
  row.__errors = existing;
}
function rowHasErrors(row) {
  if (!row.__errors) return false;
  for (const k in row.__errors) {
    if (row.__errors[k]?.level === "error") return true;
  }
  return false;
}

// src/steps/ValidationStep.tsx
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
function ValidationStep({
  fields,
  initialRows,
  schema,
  rowHook,
  allowInvalidSubmit,
  translations,
  alertTranslations,
  onBack,
  onSubmit,
  showTitle = true
}) {
  const [rows, setRows] = useState5([]);
  const [selected, setSelected] = useState5(/* @__PURE__ */ new Set());
  const [filterErrors, setFilterErrors] = useState5(false);
  const [submitting, setSubmitting] = useState5(false);
  const [showConfirm, setShowConfirm] = useState5(false);
  const [loading, setLoading] = useState5(true);
  useEffect2(() => {
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
  const columns = useMemo2(() => {
    return fields.map((f) => ({
      key: f.key,
      name: f.label,
      editable: true,
      resizable: true,
      renderEditCell: ({ row, onRowChange, onClose }) => /* @__PURE__ */ jsx6(
        "input",
        {
          autoFocus: true,
          className: "form-control form-control-sm rsi-cell-edit",
          value: row[f.key] ?? "",
          onChange: (e) => onRowChange({ ...row, [f.key]: e.target.value }),
          onBlur: () => onClose(true),
          onKeyDown: (e) => {
            if (e.key === "Enter") onClose(true);
            if (e.key === "Escape") onClose(false);
          }
        }
      ),
      renderCell: ({ row }) => {
        const value = row[f.key];
        const err = row.__errors?.[f.key];
        const inner = /* @__PURE__ */ jsx6(
          "div",
          {
            className: err ? `rsi-cell-${err.level}` : void 0,
            style: { width: "100%", height: "100%", display: "flex", alignItems: "center" },
            children: value ?? ""
          }
        );
        if (!err) return inner;
        return /* @__PURE__ */ jsx6(
          OverlayTrigger,
          {
            placement: "top",
            container: document.body,
            popperConfig: { strategy: "fixed" },
            overlay: /* @__PURE__ */ jsx6(Tooltip, { id: `rsi-err-${f.key}-${row.__index}`, className: "rsi-error-tooltip", children: err.message }),
            children: inner
          }
        );
      }
    }));
  }, [fields]);
  async function revalidate(next) {
    const stripped = next.map((r) => {
      const { __index, __errors, ...rest } = r;
      return rest;
    });
    const validated = await validateRows({ rows: stripped, fields, schema, rowHook });
    setRows(validated);
  }
  const visibleRows = filterErrors ? rows.filter(rowHasErrors) : rows;
  const errorCount = rows.filter(rowHasErrors).length;
  function handleDiscard() {
    setRows((prev) => prev.filter((r) => !selected.has(r.__index)));
    setSelected(/* @__PURE__ */ new Set());
  }
  async function doSubmit() {
    const valid = rows.filter((r) => !rowHasErrors(r));
    const invalid = rows.filter(rowHasErrors);
    const result = {
      validData: valid.map(({ __index, __errors, ...rest }) => rest),
      invalidData: invalid,
      all: rows
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
  return /* @__PURE__ */ jsxs6("div", { className: "d-flex flex-column gap-3", style: { minHeight: 400 }, children: [
    /* @__PURE__ */ jsxs6("div", { className: "d-flex align-items-center justify-content-between", children: [
      showTitle ? /* @__PURE__ */ jsx6("h5", { className: "m-0", children: translations.title }) : /* @__PURE__ */ jsx6("div", {}),
      /* @__PURE__ */ jsxs6("div", { className: "d-flex align-items-center gap-3", children: [
        /* @__PURE__ */ jsx6(
          Form3.Check,
          {
            type: "switch",
            id: "rsi-filter-errors",
            label: translations.filterSwitchTitle,
            checked: filterErrors,
            onChange: (e) => setFilterErrors(e.target.checked)
          }
        ),
        /* @__PURE__ */ jsxs6(Button5, { variant: "outline-danger", size: "sm", disabled: selected.size === 0, onClick: handleDiscard, children: [
          translations.discardButtonTitle,
          " (",
          selected.size,
          ")"
        ] })
      ] })
    ] }),
    loading ? /* @__PURE__ */ jsx6("div", { className: "d-flex align-items-center justify-content-center flex-grow-1", children: /* @__PURE__ */ jsx6(Spinner2, { animation: "border" }) }) : visibleRows.length === 0 ? /* @__PURE__ */ jsx6(Alert3, { variant: "info", className: "m-0", children: filterErrors ? translations.noRowsMessageWhenFiltered : translations.noRowsMessage }) : /* @__PURE__ */ jsx6("div", { className: "rsi-grid-wrapper", style: { flex: 1, minHeight: 320 }, children: /* @__PURE__ */ jsx6(
      DataGrid,
      {
        className: "rdg-light",
        columns,
        rows: visibleRows,
        rowKeyGetter: (r) => r.__index,
        selectedRows: selected,
        onSelectedRowsChange: (rows2) => setSelected(rows2),
        onRowsChange: (updated) => {
          const updatedByIndex = new Map(updated.map((r) => [r.__index, r]));
          const next = rows.map((r) => updatedByIndex.get(r.__index) ?? r);
          setRows(next);
          void revalidate(next);
        },
        style: { blockSize: "100%" }
      }
    ) }),
    errorCount > 0 && /* @__PURE__ */ jsxs6("div", { className: "text-danger small", children: [
      errorCount,
      " row",
      errorCount === 1 ? "" : "s",
      " with errors"
    ] }),
    /* @__PURE__ */ jsxs6("div", { className: "d-flex justify-content-between", children: [
      /* @__PURE__ */ jsx6(Button5, { variant: "outline-secondary", onClick: onBack, disabled: submitting, children: translations.backButtonTitle }),
      /* @__PURE__ */ jsx6(Button5, { variant: "primary", onClick: handleSubmit, disabled: submitting || !allowInvalidSubmit && errorCount > 0, children: submitting ? /* @__PURE__ */ jsx6(Spinner2, { size: "sm", animation: "border" }) : translations.submitButtonTitle })
    ] }),
    /* @__PURE__ */ jsxs6(Modal2, { show: showConfirm, onHide: () => setShowConfirm(false), centered: true, children: [
      /* @__PURE__ */ jsx6(Modal2.Header, { closeButton: true, children: /* @__PURE__ */ jsx6(Modal2.Title, { children: alertTranslations.headerTitle }) }),
      /* @__PURE__ */ jsx6(Modal2.Body, { children: allowInvalidSubmit ? alertTranslations.bodyText : alertTranslations.bodyTextSubmitForbidden }),
      /* @__PURE__ */ jsxs6(Modal2.Footer, { children: [
        /* @__PURE__ */ jsx6(Button5, { variant: "outline-secondary", onClick: () => setShowConfirm(false), children: alertTranslations.cancelButtonTitle }),
        allowInvalidSubmit && /* @__PURE__ */ jsx6(
          Button5,
          {
            variant: "primary",
            onClick: () => {
              setShowConfirm(false);
              void doSubmit();
            },
            children: alertTranslations.finishButtonTitle
          }
        )
      ] })
    ] })
  ] });
}

// src/translations/defaultTranslations.ts
var defaultTranslations = {
  stepper: {
    upload: "Upload Roster",
    selectHeader: "Select Header Row",
    matchColumns: "Map Columns",
    submit: "Submit"
  },
  uploadStep: {
    title: "Upload file",
    manifestTitle: "Data that we expect:",
    manifestDescription: "(You will have a chance to rename or remove columns in next steps)",
    maxRecordsExceeded: (max) => `Too many records. Up to ${max} allowed`,
    dropzone: {
      title: "Upload .xlsx, .xls or .csv file",
      errorToastDescription: "upload rejected",
      activeDropzoneTitle: "Drop file here...",
      buttonTitle: "Select file",
      loadingTitle: "Processing..."
    }
  },
  selectSheetStep: {
    title: "Select the sheet to use",
    nextButtonTitle: "Next",
    backButtonTitle: "Back"
  },
  selectHeaderStep: {
    title: "Select header row",
    nextButtonTitle: "Next",
    backButtonTitle: "Back"
  },
  matchColumnsStep: {
    title: "Match Columns",
    nextButtonTitle: "Next",
    backButtonTitle: "Back",
    userTableTitle: "Your table",
    templateTitle: "Will become",
    selectPlaceholder: "Select column...",
    ignoredColumnText: "Column ignored",
    subSelectPlaceholder: "Select...",
    matchDropdownTitle: "Match",
    unmatched: "Unmatched",
    duplicateColumnWarningTitle: "Another column unselected",
    duplicateColumnWarningDescription: "Columns cannot duplicate"
  },
  validationStep: {
    title: "Validate data",
    nextButtonTitle: "Confirm",
    backButtonTitle: "Back",
    noRowsMessage: "No data found",
    noRowsMessageWhenFiltered: "No data containing errors",
    discardButtonTitle: "Discard selected rows",
    filterSwitchTitle: "Show only rows with errors",
    submitButtonTitle: "Confirm"
  },
  alerts: {
    confirmClose: {
      headerTitle: "Exit import flow",
      bodyText: "Are you sure? Your current information will not be saved.",
      cancelButtonTitle: "Cancel",
      exitButtonTitle: "Exit flow"
    },
    submitIncomplete: {
      headerTitle: "Errors detected",
      bodyText: "There are still some rows that contain errors. Rows with errors will be ignored when submitting.",
      bodyTextSubmitForbidden: "There are still some rows containing errors.",
      cancelButtonTitle: "Cancel",
      finishButtonTitle: "Submit"
    },
    unmatchedRequiredFields: {
      headerTitle: "Not all columns matched",
      bodyText: "There are required columns that are not matched or ignored. Do you want to continue?",
      cancelButtonTitle: "Cancel",
      continueButtonTitle: "Continue"
    },
    toast: { error: "Error" }
  }
};
function mergeTranslations(base, override) {
  if (!override) return base;
  const out = Array.isArray(base) ? [...base] : { ...base };
  for (const k of Object.keys(override)) {
    const ov = override[k];
    const bv = base[k];
    if (ov && typeof ov === "object" && !Array.isArray(ov) && bv && typeof bv === "object") {
      out[k] = mergeTranslations(bv, ov);
    } else if (ov !== void 0) {
      out[k] = ov;
    }
  }
  return out;
}

// src/ReactSpreadsheetImport.tsx
import { Fragment as Fragment2, jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
var INITIAL_STATE = {
  step: "upload",
  workbook: null,
  sheetIndex: 0,
  headerIndex: 0,
  mapping: [],
  mappedRows: [],
  showCloseConfirm: false,
  maxExceeded: false
};
function ReactSpreadsheetImport(props) {
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
    hideStepTitles = false
  } = props;
  const t = useMemo3(
    () => mergeTranslations(defaultTranslations, translationsOverride),
    [translationsOverride]
  );
  const [state, setState] = useState6(INITIAL_STATE);
  useEffect3(() => {
    if (!inline && isOpen) {
      setState(INITIAL_STATE);
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
  async function handleUploaded(wb) {
    if (wb.sheets.length > 1) {
      setState((s) => ({ ...s, workbook: wb, step: "selectSheet" }));
      return;
    }
    advanceFromSheet(wb, 0);
  }
  function advanceFromSheet(wb, idx) {
    const rows = wb.sheets[idx]?.rows ?? [];
    const exceeded = maxRecords !== void 0 && rows.length - 1 > maxRecords;
    setState((s) => ({
      ...s,
      workbook: wb,
      sheetIndex: idx,
      step: "selectHeader",
      maxExceeded: exceeded
    }));
  }
  async function handleHeader(idx) {
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
        ...sheets[state.sheetIndex],
        rows: [nextHeader, ...nextBody]
      };
      setState((s) => ({ ...s, workbook: { ...state.workbook, sheets }, headerIndex: 0, step: "matchColumns" }));
    } else {
      setState((s) => ({ ...s, headerIndex: idx, step: "matchColumns" }));
    }
  }
  async function handleMatch(mapping) {
    const mapped = bodyRows.map((row) => {
      const obj = {};
      mapping.forEach((key, i) => {
        if (key) obj[key] = row[i] ?? "";
      });
      return obj;
    });
    const transformed = matchColumnsStepHook ? await matchColumnsStepHook(mapped) : mapped;
    setState((s) => ({ ...s, mapping, mappedRows: transformed, step: "validate" }));
  }
  async function handleSubmit(result) {
    if (!state.workbook) return;
    await onSubmit(result, state.workbook.file);
    onClose?.();
  }
  const body = /* @__PURE__ */ jsxs7("div", { className: "d-flex flex-column gap-3", children: [
    !hideStepper && /* @__PURE__ */ jsx7(Stepper, { current: state.step, translations: t.stepper }),
    state.maxExceeded && maxRecords !== void 0 && /* @__PURE__ */ jsx7(Alert4, { variant: "danger", className: "m-0", children: t.uploadStep.maxRecordsExceeded(maxRecords) }),
    state.step === "upload" && /* @__PURE__ */ jsx7(
      UploadStep,
      {
        fields,
        maxFileSize,
        translations: t.uploadStep,
        onLoaded: handleUploaded,
        uploadStepHook,
        showTitle: !hideStepTitles
      }
    ),
    state.step === "selectSheet" && state.workbook && /* @__PURE__ */ jsx7(
      SelectSheetStep,
      {
        workbook: state.workbook,
        translations: t.selectSheetStep,
        onBack: () => setState((s) => ({ ...s, step: "upload" })),
        onNext: (idx) => advanceFromSheet(state.workbook, idx),
        showTitle: !hideStepTitles
      }
    ),
    state.step === "selectHeader" && /* @__PURE__ */ jsx7(
      SelectHeaderStep,
      {
        rows: dataRows,
        translations: t.selectHeaderStep,
        onBack: () => setState((s) => ({
          ...s,
          step: state.workbook && state.workbook.sheets.length > 1 ? "selectSheet" : "upload"
        })),
        onNext: handleHeader,
        showTitle: !hideStepTitles
      }
    ),
    state.step === "matchColumns" && /* @__PURE__ */ jsx7(
      MatchColumnsStep,
      {
        fields,
        headers: headerRow,
        rows: bodyRows,
        autoMapHeaders,
        autoMapDistance,
        translations: t.matchColumnsStep,
        alertTranslations: t.alerts.unmatchedRequiredFields,
        onBack: () => setState((s) => ({ ...s, step: "selectHeader" })),
        onNext: handleMatch,
        showTitle: !hideStepTitles
      }
    ),
    state.step === "validate" && /* @__PURE__ */ jsx7(
      ValidationStep,
      {
        fields,
        initialRows: state.mappedRows,
        schema,
        rowHook,
        allowInvalidSubmit,
        translations: t.validationStep,
        alertTranslations: t.alerts.submitIncomplete,
        onBack: () => setState((s) => ({ ...s, step: "matchColumns" })),
        onSubmit: handleSubmit,
        showTitle: !hideStepTitles
      }
    )
  ] });
  if (inline) {
    return /* @__PURE__ */ jsx7("div", { className: "rsi-inline", children: body });
  }
  return /* @__PURE__ */ jsxs7(Fragment2, { children: [
    /* @__PURE__ */ jsxs7(
      Modal3,
      {
        show: isOpen,
        onHide: tryClose,
        size: "xl",
        backdrop: "static",
        scrollable: true,
        className: "rsi-modal",
        contentClassName: "rsi-modal-content",
        children: [
          /* @__PURE__ */ jsx7(Modal3.Header, { closeButton: true, children: /* @__PURE__ */ jsx7(Modal3.Title, { children: title ?? "Spreadsheet importer" }) }),
          /* @__PURE__ */ jsx7(Modal3.Body, { children: body })
        ]
      }
    ),
    /* @__PURE__ */ jsxs7(
      Modal3,
      {
        show: state.showCloseConfirm,
        onHide: () => setState((s) => ({ ...s, showCloseConfirm: false })),
        centered: true,
        children: [
          /* @__PURE__ */ jsx7(Modal3.Header, { closeButton: true, children: /* @__PURE__ */ jsx7(Modal3.Title, { children: t.alerts.confirmClose.headerTitle }) }),
          /* @__PURE__ */ jsx7(Modal3.Body, { children: t.alerts.confirmClose.bodyText }),
          /* @__PURE__ */ jsxs7(Modal3.Footer, { children: [
            /* @__PURE__ */ jsx7(Button6, { variant: "outline-secondary", onClick: () => setState((s) => ({ ...s, showCloseConfirm: false })), children: t.alerts.confirmClose.cancelButtonTitle }),
            /* @__PURE__ */ jsx7(
              Button6,
              {
                variant: "danger",
                onClick: () => {
                  setState((s) => ({ ...s, showCloseConfirm: false }));
                  onClose?.();
                },
                children: t.alerts.confirmClose.exitButtonTitle
              }
            )
          ] })
        ]
      }
    )
  ] });
}
export {
  ReactSpreadsheetImport,
  autoMatchColumns,
  defaultTranslations,
  rowHasErrors,
  validateRows
};
//# sourceMappingURL=index.js.map