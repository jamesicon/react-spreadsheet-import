"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ReactSpreadsheetImport: () => ReactSpreadsheetImport,
  autoMatchColumns: () => autoMatchColumns,
  defaultTranslations: () => defaultTranslations,
  rowHasErrors: () => rowHasErrors,
  validateRows: () => validateRows
});
module.exports = __toCommonJS(index_exports);

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
var import_react6 = require("react");
var import_react_bootstrap6 = require("react-bootstrap");

// src/components/Stepper.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var ORDER = ["upload", "selectSheet", "selectHeader", "matchColumns", "validate"];
var POSITIONS = [
  { stepNames: ["upload", "selectSheet"], key: "upload" },
  { stepNames: ["selectHeader"], key: "selectHeader" },
  { stepNames: ["matchColumns"], key: "matchColumns" },
  { stepNames: ["validate"], key: "submit" }
];
function Stepper({ current, translations }) {
  const currentOrder = ORDER.indexOf(current);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { "aria-label": "Import progress", className: "rsi-stepper", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rsi-stepper-row d-flex", children: POSITIONS.map((pos, idx) => {
    const positionMaxOrder = Math.max(...pos.stepNames.map((s) => ORDER.indexOf(s)));
    const positionMinOrder = Math.min(...pos.stepNames.map((s) => ORDER.indexOf(s)));
    const status = currentOrder > positionMaxOrder ? "done" : currentOrder >= positionMinOrder ? "active" : "todo";
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: `rsi-stepper-item flex-fill rsi-stepper-${status}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rsi-stepper-bar", "aria-hidden": "true" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rsi-stepper-label small", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "rsi-stepper-num", children: [
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
var import_react = require("react");
var import_react_bootstrap = require("react-bootstrap");

// src/utils/autoMatch.ts
var import_fuse = __toESM(require("fuse.js"), 1);
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
  const fuse = new import_fuse.default(entries, {
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
var import_jsx_runtime2 = require("react/jsx-runtime");
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
  const initial = (0, import_react.useMemo)(
    () => autoMatchColumns(headers, fields, autoMapDistance),
    [headers, fields, autoMapDistance]
  );
  const [mapping, setMapping] = (0, import_react.useState)(initial);
  const [showWarn, setShowWarn] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => setMapping(initial), [initial]);
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "d-flex flex-column gap-3", children: [
    showTitle && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h5", { className: "m-0", children: translations.title }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "rsi-match-card border rounded overflow-auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "rsi-match-grid", style: { display: "grid", gridTemplateColumns: gridCols }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "rsi-match-section-label", style: { gridColumn: "1 / -1" }, children: translations.userTableTitle }),
      headers.map((h, idx) => {
        const isIgnored = mapping[idx] === void 0;
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "div",
          {
            className: `rsi-match-col-header p-3 border-end ${isIgnored ? "opacity-50" : ""}`,
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "d-flex justify-content-between align-items-start gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("strong", { className: "text-truncate", title: h, children: h || `(column ${idx + 1})` }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                import_react_bootstrap.Button,
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
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "rsi-match-section-label rsi-match-section-divider", style: { gridColumn: "1 / -1" }, children: translations.templateTitle }),
      headers.map((h, idx) => {
        const value = mapping[idx];
        const status = statusFor(value, fields);
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "p-3 border-end d-flex align-items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            import_react_bootstrap.Form.Select,
            {
              size: "sm",
              value: value ?? IGNORE,
              onChange: (e) => setColumn(idx, e.target.value),
              "aria-label": `${translations.matchDropdownTitle}: ${h}`,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: IGNORE, children: translations.ignoredColumnText }),
                fields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
    unmatchedRequired.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react_bootstrap.Alert, { variant: "warning", className: "m-0", children: [
      translations.unmatched,
      ":",
      " ",
      unmatchedRequired.map((k) => fields.find((f) => f.key === k)?.label ?? k).join(", ")
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "d-flex justify-content-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_bootstrap.Button, { variant: "outline-secondary", onClick: onBack, children: translations.backButtonTitle }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_bootstrap.Button, { variant: "primary", onClick: handleNext, children: translations.nextButtonTitle })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react_bootstrap.Modal, { show: showWarn, onHide: () => setShowWarn(false), centered: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_bootstrap.Modal.Header, { closeButton: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_bootstrap.Modal.Title, { children: alertTranslations.headerTitle }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_bootstrap.Modal.Body, { children: alertTranslations.bodyText }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react_bootstrap.Modal.Footer, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_bootstrap.Button, { variant: "outline-secondary", onClick: () => setShowWarn(false), children: alertTranslations.cancelButtonTitle }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react_bootstrap.Button,
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
var import_react2 = require("react");
var import_react_bootstrap2 = require("react-bootstrap");
var import_jsx_runtime3 = require("react/jsx-runtime");
function SelectHeaderStep({ rows, translations, onBack, onNext, showTitle = true }) {
  const [selected, setSelected] = (0, import_react2.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "d-flex flex-column gap-3", children: [
    showTitle && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h5", { className: "m-0", children: translations.title }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "border rounded overflow-auto", style: { maxHeight: 320 }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_bootstrap2.Table, { hover: true, size: "sm", className: "m-0 align-middle", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("tbody", { children: rows.slice(0, 25).map((row, idx) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "tr",
      {
        onClick: () => setSelected(idx),
        className: selected === idx ? "table-primary" : void 0,
        style: { cursor: "pointer" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { style: { width: 36 }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
          row.map((cell, ci) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { className: "small text-nowrap", children: cell }, ci))
        ]
      },
      idx
    )) }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "d-flex justify-content-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_bootstrap2.Button, { variant: "outline-secondary", onClick: onBack, children: translations.backButtonTitle }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_bootstrap2.Button, { variant: "primary", onClick: () => onNext(selected), children: translations.nextButtonTitle })
    ] })
  ] });
}

// src/steps/SelectSheetStep.tsx
var import_react3 = require("react");
var import_react_bootstrap3 = require("react-bootstrap");
var import_jsx_runtime4 = require("react/jsx-runtime");
function SelectSheetStep({ workbook, translations, onBack, onNext, showTitle = true }) {
  const [selected, setSelected] = (0, import_react3.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "d-flex flex-column gap-3", children: [
    showTitle && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h5", { className: "m-0", children: translations.title }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_bootstrap3.Form, { children: workbook.sheets.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_react_bootstrap3.Form.Check,
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
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "d-flex justify-content-between mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_bootstrap3.Button, { variant: "outline-secondary", onClick: onBack, children: translations.backButtonTitle }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_bootstrap3.Button, { variant: "primary", onClick: () => onNext(selected), children: translations.nextButtonTitle })
    ] })
  ] });
}

// src/steps/UploadStep.tsx
var import_react4 = require("react");
var import_react_dropzone = require("react-dropzone");
var import_react_bootstrap4 = require("react-bootstrap");

// src/utils/parseFile.ts
var import_exceljs = __toESM(require("exceljs"), 1);
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
  const wb = new import_exceljs.default.Workbook();
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
var import_jsx_runtime5 = require("react/jsx-runtime");
var ACCEPT = {
  "text/csv": [".csv"],
  "application/vnd.ms-excel": [".xls"],
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"]
};
function UploadStep({ fields, maxFileSize, translations, onLoaded, uploadStepHook, showTitle = true }) {
  const [loading, setLoading] = (0, import_react4.useState)(false);
  const [error, setError] = (0, import_react4.useState)(null);
  const onDrop = (0, import_react4.useCallback)(
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
  const { getRootProps, getInputProps, isDragActive, open } = (0, import_react_dropzone.useDropzone)({
    onDrop,
    accept: ACCEPT,
    maxSize: maxFileSize,
    multiple: false,
    noClick: true,
    noKeyboard: true
  });
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "rsi-upload-step d-flex flex-column gap-3", children: [
    showTitle && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h5", { className: "m-0", children: translations.title }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "text-secondary small mb-1", children: translations.manifestTitle }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "text-secondary small mb-2", children: translations.manifestDescription }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "border rounded overflow-auto", style: { maxHeight: 160 }, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react_bootstrap4.Table, { size: "sm", className: "m-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("tr", { children: fields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("th", { className: "text-nowrap small", children: [
          f.label,
          f.required && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-danger ms-1", children: "*" })
        ] }, f.key)) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("tbody", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("tr", { children: fields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { className: "text-nowrap small text-muted", children: f.example ?? "" }, f.key)) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      "div",
      {
        ...getRootProps(),
        className: `rsi-dropzone d-flex flex-column align-items-center justify-content-center text-center p-5 border border-2 border-dashed rounded ${isDragActive ? "bg-primary-subtle border-primary" : "bg-body-tertiary"}`,
        style: { minHeight: 180, cursor: "pointer" },
        onClick: open,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", { ...getInputProps() }),
          loading ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_bootstrap4.Spinner, { animation: "border", className: "mb-2" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: translations.dropzone.loadingTitle })
          ] }) : isDragActive ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: translations.dropzone.activeDropzoneTitle }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mb-2", children: translations.dropzone.title }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              import_react_bootstrap4.Button,
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
    error && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_bootstrap4.Alert, { variant: "danger", className: "m-0", children: error })
  ] });
}

// src/steps/ValidationStep.tsx
var import_react5 = require("react");
var import_react_bootstrap5 = require("react-bootstrap");
var import_react_data_grid = require("react-data-grid");
var import_styles = require("react-data-grid/lib/styles.css");

// src/utils/validateRows.ts
var import_yup = require("yup");
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
        if (e instanceof import_yup.ValidationError) {
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
var import_jsx_runtime6 = require("react/jsx-runtime");
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
  const [rows, setRows] = (0, import_react5.useState)([]);
  const [selected, setSelected] = (0, import_react5.useState)(/* @__PURE__ */ new Set());
  const [filterErrors, setFilterErrors] = (0, import_react5.useState)(false);
  const [submitting, setSubmitting] = (0, import_react5.useState)(false);
  const [showConfirm, setShowConfirm] = (0, import_react5.useState)(false);
  const [loading, setLoading] = (0, import_react5.useState)(true);
  (0, import_react5.useEffect)(() => {
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
  const columns = (0, import_react5.useMemo)(() => {
    return fields.map((f) => ({
      key: f.key,
      name: f.label,
      editable: true,
      resizable: true,
      renderEditCell: ({ row, onRowChange, onClose }) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
        return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "div",
          {
            className: err ? `rsi-cell-${err.level}` : void 0,
            title: err?.message,
            style: { width: "100%", height: "100%", display: "flex", alignItems: "center" },
            children: value ?? ""
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "d-flex flex-column gap-3", style: { minHeight: 400 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "d-flex align-items-center justify-content-between", children: [
      showTitle ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h5", { className: "m-0", children: translations.title }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {}),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "d-flex align-items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          import_react_bootstrap5.Form.Check,
          {
            type: "switch",
            id: "rsi-filter-errors",
            label: translations.filterSwitchTitle,
            checked: filterErrors,
            onChange: (e) => setFilterErrors(e.target.checked)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react_bootstrap5.Button, { variant: "outline-danger", size: "sm", disabled: selected.size === 0, onClick: handleDiscard, children: [
          translations.discardButtonTitle,
          " (",
          selected.size,
          ")"
        ] })
      ] })
    ] }),
    loading ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "d-flex align-items-center justify-content-center flex-grow-1", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap5.Spinner, { animation: "border" }) }) : visibleRows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap5.Alert, { variant: "info", className: "m-0", children: filterErrors ? translations.noRowsMessageWhenFiltered : translations.noRowsMessage }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "rsi-grid-wrapper", style: { flex: 1, minHeight: 320 }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      import_react_data_grid.DataGrid,
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
    errorCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "text-danger small", children: [
      errorCount,
      " row",
      errorCount === 1 ? "" : "s",
      " with errors"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "d-flex justify-content-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap5.Button, { variant: "outline-secondary", onClick: onBack, disabled: submitting, children: translations.backButtonTitle }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap5.Button, { variant: "primary", onClick: handleSubmit, disabled: submitting || !allowInvalidSubmit && errorCount > 0, children: submitting ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap5.Spinner, { size: "sm", animation: "border" }) : translations.submitButtonTitle })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react_bootstrap5.Modal, { show: showConfirm, onHide: () => setShowConfirm(false), centered: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap5.Modal.Header, { closeButton: true, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap5.Modal.Title, { children: alertTranslations.headerTitle }) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap5.Modal.Body, { children: allowInvalidSubmit ? alertTranslations.bodyText : alertTranslations.bodyTextSubmitForbidden }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react_bootstrap5.Modal.Footer, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap5.Button, { variant: "outline-secondary", onClick: () => setShowConfirm(false), children: alertTranslations.cancelButtonTitle }),
        allowInvalidSubmit && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          import_react_bootstrap5.Button,
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
var import_jsx_runtime7 = require("react/jsx-runtime");
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
  const t = (0, import_react6.useMemo)(
    () => mergeTranslations(defaultTranslations, translationsOverride),
    [translationsOverride]
  );
  const [state, setState] = (0, import_react6.useState)(INITIAL_STATE);
  (0, import_react6.useEffect)(() => {
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
  const body = /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "d-flex flex-column gap-3", children: [
    !hideStepper && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Stepper, { current: state.step, translations: t.stepper }),
    state.maxExceeded && maxRecords !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_bootstrap6.Alert, { variant: "danger", className: "m-0", children: t.uploadStep.maxRecordsExceeded(maxRecords) }),
    state.step === "upload" && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
    state.step === "selectSheet" && state.workbook && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      SelectSheetStep,
      {
        workbook: state.workbook,
        translations: t.selectSheetStep,
        onBack: () => setState((s) => ({ ...s, step: "upload" })),
        onNext: (idx) => advanceFromSheet(state.workbook, idx),
        showTitle: !hideStepTitles
      }
    ),
    state.step === "selectHeader" && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
    state.step === "matchColumns" && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
    state.step === "validate" && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "rsi-inline", children: body });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      import_react_bootstrap6.Modal,
      {
        show: isOpen,
        onHide: tryClose,
        size: "xl",
        backdrop: "static",
        scrollable: true,
        className: "rsi-modal",
        contentClassName: "rsi-modal-content",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_bootstrap6.Modal.Header, { closeButton: true, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_bootstrap6.Modal.Title, { children: title ?? "Spreadsheet importer" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_bootstrap6.Modal.Body, { children: body })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      import_react_bootstrap6.Modal,
      {
        show: state.showCloseConfirm,
        onHide: () => setState((s) => ({ ...s, showCloseConfirm: false })),
        centered: true,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_bootstrap6.Modal.Header, { closeButton: true, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_bootstrap6.Modal.Title, { children: t.alerts.confirmClose.headerTitle }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_bootstrap6.Modal.Body, { children: t.alerts.confirmClose.bodyText }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react_bootstrap6.Modal.Footer, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_bootstrap6.Button, { variant: "outline-secondary", onClick: () => setState((s) => ({ ...s, showCloseConfirm: false })), children: t.alerts.confirmClose.cancelButtonTitle }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              import_react_bootstrap6.Button,
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ReactSpreadsheetImport,
  autoMatchColumns,
  defaultTranslations,
  rowHasErrors,
  validateRows
});
//# sourceMappingURL=index.cjs.map