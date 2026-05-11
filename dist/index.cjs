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
styleInject('@layer rdg {\n  @layer Defaults, FocusSink, CheckboxInput, CheckboxIcon, CheckboxLabel, Cell, HeaderCell, SummaryCell, EditCell, Row, HeaderRow, SummaryRow, GroupedRow, Root;\n}\n.rdg-7-0-0-beta-58-fa71d63e {\n  @layer rdg.MeasuringCell {\n    contain: strict;\n    grid-row: 1;\n    visibility: hidden;\n  }\n}\n.rdg-7-0-0-beta-58-85c48527 {\n  @layer rdg.Cell {\n    position: relative;\n    padding-block: 0;\n    padding-inline: 8px;\n    border-inline-end: var(--rdg-border-width) solid var(--rdg-border-color);\n    border-block-end: var(--rdg-border-width) solid var(--rdg-border-color);\n    grid-row-start: var(--rdg-grid-row-start);\n    align-content: center;\n    background-color: inherit;\n    white-space: nowrap;\n    overflow: clip;\n    text-overflow: ellipsis;\n    outline: none;\n    &[aria-selected=true] {\n      outline: var(--rdg-selection-width) solid var(--rdg-selection-color);\n      outline-offset: calc(var(--rdg-selection-width) * -1);\n    }\n  }\n}\n.rdg-7-0-0-beta-58-17a9a6d4 {\n  @layer rdg.Cell {\n    position: sticky;\n    z-index: 1;\n    &:nth-last-child(1 of &) {\n      box-shadow: var(--rdg-cell-frozen-box-shadow);\n    }\n  }\n}\n.rdg-7-0-0-beta-58-bfba19bc {\n  @layer rdg.DragHandle {\n    --rdg-drag-handle-size: 8px;\n    z-index: 0;\n    cursor: move;\n    inline-size: var(--rdg-drag-handle-size);\n    block-size: var(--rdg-drag-handle-size);\n    background-color: var(--rdg-selection-color);\n    place-self: end;\n    &:hover {\n      --rdg-drag-handle-size: 16px;\n      border: 2px solid var(--rdg-selection-color);\n      background-color: var(--rdg-background-color);\n    }\n  }\n}\n.rdg-7-0-0-beta-58-7abddb3e {\n  @layer rdg.DragHandle {\n    z-index: 1;\n    position: sticky;\n  }\n}\n.rdg-7-0-0-beta-58-3b807ead {\n  @layer rdg.CheckboxInput {\n    display: block;\n    margin: auto;\n    inline-size: 20px;\n    block-size: 20px;\n    &:focus-visible {\n      outline: 2px solid var(--rdg-checkbox-focus-color);\n      outline-offset: -3px;\n    }\n    &:enabled {\n      cursor: pointer;\n    }\n  }\n}\n.rdg-7-0-0-beta-58-07919382 {\n  @layer rdg.GroupCellContent {\n    outline: none;\n  }\n}\n.rdg-7-0-0-beta-58-02a50147 {\n  @layer rdg.GroupCellCaret {\n    margin-inline-start: 4px;\n    stroke: currentColor;\n    stroke-width: 1.5px;\n    fill: transparent;\n    vertical-align: middle;\n    > path {\n      transition: d 0.1s;\n    }\n  }\n}\n.rdg-7-0-0-beta-58-56a248e4 {\n  @layer rdg.SortableHeaderCell {\n    display: flex;\n  }\n}\n.rdg-7-0-0-beta-58-7fad8c83 {\n  @layer rdg.SortableHeaderCellName {\n    flex-grow: 1;\n    overflow: clip;\n    text-overflow: ellipsis;\n  }\n}\n.rdg-7-0-0-beta-58-35ccb4c8 {\n  @layer rdg.Cell {\n    background-color: #ccccff;\n  }\n}\n.rdg-7-0-0-beta-58-46f9ea88 {\n  @layer rdg.EditCell {\n    padding: 0;\n  }\n}\n.rdg-7-0-0-beta-58-0dbd5994 {\n  @layer rdg.HeaderRow {\n    display: contents;\n    background-color: var(--rdg-header-background-color);\n    font-weight: bold;\n    & > .rdg-7-0-0-beta-58-85c48527 {\n      z-index: 2;\n      position: sticky;\n    }\n    & > .rdg-7-0-0-beta-58-17a9a6d4 {\n      z-index: 3;\n    }\n  }\n}\n.rdg-7-0-0-beta-58-2a7e240d {\n  @layer rdg.HeaderCell {\n    cursor: pointer;\n  }\n}\n.rdg-7-0-0-beta-58-1893dc0f {\n  @layer rdg.HeaderCell {\n    touch-action: none;\n  }\n}\n.rdg-7-0-0-beta-58-4e60db91 {\n  @layer rdg.HeaderCell {\n    cursor: col-resize;\n    position: absolute;\n    inset-block-start: 0;\n    inset-inline-end: 0;\n    inset-block-end: 0;\n    inline-size: 10px;\n  }\n}\n.rdg-7-0-0-beta-58-3e1a4ad4 {\n  @layer rdg.HeaderCell {\n    background-color: var(--rdg-header-draggable-background-color);\n  }\n}\n.rdg-7-0-0-beta-58-51abd8b8 {\n  @layer rdg.HeaderCell {\n    background-color: var(--rdg-header-draggable-background-color);\n  }\n}\n.rdg-7-0-0-beta-58-c8d7aa64 {\n  @layer rdg.HeaderCell {\n    border-radius: 4px;\n    width: fit-content;\n    outline: 2px solid hsl(207, 100%, 50%);\n    outline-offset: -2px;\n  }\n}\n.rdg-7-0-0-beta-58-3c083f1b {\n  @layer rdg.Row {\n    display: contents;\n    background-color: var(--rdg-background-color);\n    &:hover {\n      background-color: var(--rdg-row-hover-background-color);\n    }\n    &[aria-selected=true] {\n      background-color: var(--rdg-row-selected-background-color);\n      &:hover {\n        background-color: var(--rdg-row-selected-hover-background-color);\n      }\n    }\n  }\n}\n.rdg-7-0-0-beta-58-3fe773c3 {\n  @layer rdg.FocusSink {\n    outline: 2px solid var(--rdg-selection-color);\n    outline-offset: -2px;\n  }\n}\n.rdg-7-0-0-beta-58-97ce3fde {\n  @layer rdg.FocusSink {\n    &::before {\n      content: "";\n      display: inline-block;\n      block-size: 100%;\n      position: sticky;\n      inset-inline-start: 0;\n      border-inline-start: 2px solid var(--rdg-selection-color);\n    }\n  }\n}\n.rdg-7-0-0-beta-58-3d5115f3 {\n  @layer rdg.SortIcon {\n    fill: currentColor;\n    > path {\n      transition: d 0.1s;\n    }\n  }\n}\n.rdg-7-0-0-beta-58-ccd2e5d9 {\n  @layer rdg.Defaults {\n    *,\n    *::before,\n    *::after {\n      box-sizing: inherit;\n    }\n  }\n  @layer rdg.Root {\n    --rdg-selection-width: 2px;\n    --rdg-selection-color: hsl(207, 75%, 66%);\n    --rdg-font-size: 14px;\n    --rdg-cell-frozen-box-shadow: 2px 0 5px -2px rgba(136, 136, 136, 0.3);\n    --rdg-border-width: 1px;\n    --rdg-summary-border-width: calc(var(--rdg-border-width) * 2);\n    --rdg-color: light-dark(#000, #ddd);\n    --rdg-border-color: light-dark(#ddd, #444);\n    --rdg-summary-border-color: light-dark(#aaa, #555);\n    --rdg-background-color: light-dark(hsl(0deg 0% 100%), hsl(0deg 0% 13%));\n    --rdg-header-background-color: light-dark(hsl(0deg 0% 97.5%), hsl(0deg 0% 10.5%));\n    --rdg-header-draggable-background-color: light-dark(hsl(0deg 0% 90.5%), hsl(0deg 0% 17.5%));\n    --rdg-row-hover-background-color: light-dark(hsl(0deg 0% 96%), hsl(0deg 0% 9%));\n    --rdg-row-selected-background-color: light-dark(hsl(207deg 76% 92%), hsl(207deg 76% 42%));\n    --rdg-row-selected-hover-background-color: light-dark(hsl(207deg 76% 88%), hsl(207deg 76% 38%));\n    --rdg-checkbox-focus-color: hsl(207deg 100% 69%);\n    &.rdg-dark {\n      --rdg-color-scheme: dark;\n    }\n    &.rdg-light {\n      --rdg-color-scheme: light;\n    }\n    color-scheme: var(--rdg-color-scheme, light dark);\n    &:dir(rtl) {\n      --rdg-cell-frozen-box-shadow: -2px 0 5px -2px rgba(136, 136, 136, 0.3);\n    }\n    display: grid;\n    accent-color: light-dark(hsl(207deg 100% 29%), hsl(207deg 100% 79%));\n    contain: content;\n    content-visibility: auto;\n    block-size: 350px;\n    border: 1px solid var(--rdg-border-color);\n    box-sizing: border-box;\n    overflow: auto;\n    background-color: var(--rdg-background-color);\n    color: var(--rdg-color);\n    font-size: var(--rdg-font-size);\n    &::before {\n      content: "";\n      grid-column: 1/-1;\n      grid-row: 1/-1;\n    }\n    > :nth-last-child(1 of .rdg-top-summary-row) {\n      > .rdg-7-0-0-beta-58-85c48527 {\n        border-block-end: var(--rdg-summary-border-width) solid var(--rdg-summary-border-color);\n      }\n    }\n    > :nth-child(1 of .rdg-bottom-summary-row) {\n      > .rdg-7-0-0-beta-58-85c48527 {\n        border-block-start: var(--rdg-summary-border-width) solid var(--rdg-summary-border-color);\n      }\n    }\n  }\n}\n.rdg-7-0-0-beta-58-e9b0e1c9 {\n  @layer rdg.Root {\n    user-select: none;\n    & .rdg-7-0-0-beta-58-3c083f1b {\n      cursor: move;\n    }\n  }\n}\n.rdg-7-0-0-beta-58-dbb8b3c5 {\n  @layer rdg.FocusSink {\n    grid-column: 1/-1;\n    pointer-events: none;\n    z-index: 1;\n  }\n}\n.rdg-7-0-0-beta-58-e9f55541 {\n  @layer rdg.FocusSink {\n    z-index: 3;\n  }\n}\n.rdg-7-0-0-beta-58-0b90c82c {\n  @layer rdg.SummaryRow {\n    > .rdg-7-0-0-beta-58-85c48527 {\n      position: sticky;\n    }\n  }\n}\n.rdg-7-0-0-beta-58-d0520eab {\n  @layer rdg.SummaryRow {\n    > .rdg-7-0-0-beta-58-85c48527 {\n      z-index: 2;\n    }\n    > .rdg-7-0-0-beta-58-17a9a6d4 {\n      z-index: 3;\n    }\n  }\n}\n.rdg-7-0-0-beta-58-d907aa87 {\n  @layer rdg.SummaryCell {\n    inset-block-start: var(--rdg-summary-row-top);\n    inset-block-end: var(--rdg-summary-row-bottom);\n  }\n}\n.rdg-7-0-0-beta-58-e74a2be3 {\n  @layer rdg.GroupedRow {\n    &:not([aria-selected=true]) {\n      background-color: var(--rdg-header-background-color);\n    }\n    > .rdg-7-0-0-beta-58-85c48527:not(:last-child, .rdg-7-0-0-beta-58-17a9a6d4),\n    > :nth-last-child(n+2 of .rdg-7-0-0-beta-58-17a9a6d4) {\n      border-inline-end: none;\n    }\n  }\n}\n.rdg-7-0-0-beta-58-2f8db206 {\n  @layer rdg.TextEditor {\n    appearance: none;\n    box-sizing: border-box;\n    inline-size: 100%;\n    block-size: 100%;\n    padding-block: 0;\n    padding-inline: 6px;\n    border: 2px solid #ccc;\n    vertical-align: top;\n    color: var(--rdg-color);\n    background-color: var(--rdg-background-color);\n    font-family: inherit;\n    font-size: var(--rdg-font-size);\n    &:focus {\n      border-color: var(--rdg-selection-color);\n      outline: none;\n    }\n    &::placeholder {\n      color: #999;\n      opacity: 1;\n    }\n  }\n}\n.rsi-modal-content {\n  --rsi-error: var(--bs-danger);\n  --rsi-warning: var(--bs-warning);\n  --rsi-info: var(--bs-info);\n}\n.rsi-dropzone {\n  border-style: dashed !important;\n  transition: background-color 120ms ease, border-color 120ms ease;\n}\n.rsi-grid-wrapper .rdg {\n  block-size: 100%;\n  border: 1px solid var(--bs-border-color);\n  border-radius: var(--bs-border-radius);\n  --rdg-border-color: var(--bs-border-color-translucent);\n  --rdg-color: var(--bs-body-color);\n  --rdg-background-color: var(--bs-body-bg);\n  --rdg-header-background-color: var(--bs-tertiary-bg);\n  --rdg-row-hover-background-color: var(--bs-secondary-bg);\n  --rdg-row-selected-background-color: var(--bs-primary-bg-subtle);\n  --rdg-row-selected-hover-background-color: var(--bs-primary-bg-subtle);\n  --rdg-selection-color: var(--bs-primary);\n  font-family: inherit;\n  font-size: 0.875rem;\n}\n.rsi-cell-error {\n  background-color: var(--bs-danger-bg-subtle);\n  color: var(--bs-danger-text-emphasis);\n  padding: 0 4px;\n  border-radius: 2px;\n  cursor: default;\n}\n.rsi-tooltip-fixed {\n  pointer-events: none;\n}\n.rsi-tooltip-inner {\n  background-color: #0a2540;\n  color: #ffffff;\n  font-size: 0.8125rem;\n  max-width: 320px;\n  text-align: left;\n  padding: 6px 10px;\n  border-radius: 4px;\n}\n.rsi-tooltip-arrow {\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid #0a2540;\n  margin: 0 auto;\n}\n.rsi-cell-warning {\n  background-color: var(--bs-warning-bg-subtle);\n  color: var(--bs-warning-text-emphasis);\n  padding: 0 4px;\n  border-radius: 2px;\n}\n.rsi-cell-info {\n  background-color: var(--bs-info-bg-subtle);\n  color: var(--bs-info-text-emphasis);\n  padding: 0 4px;\n  border-radius: 2px;\n}\n.rsi-cell-edit {\n  height: 100%;\n  border-radius: 0;\n}\n.rsi-stepper-row {\n  gap: 1px;\n  background-color: transparent;\n}\n.rsi-stepper-item {\n  min-width: 0;\n  padding-right: 1rem;\n}\n.rsi-stepper-item:last-child {\n  padding-right: 0;\n}\n.rsi-stepper-bar {\n  height: 4px;\n  background-color: var(--bs-border-color);\n  border-radius: 2px;\n  margin-bottom: 0.5rem;\n}\n.rsi-stepper-done .rsi-stepper-bar,\n.rsi-stepper-active .rsi-stepper-bar {\n  background-color: var(--bs-primary);\n}\n.rsi-stepper-label {\n  color: var(--bs-secondary-color);\n  font-weight: 500;\n}\n.rsi-stepper-active .rsi-stepper-label {\n  color: var(--bs-body-color);\n  font-weight: 600;\n}\n.rsi-stepper-num {\n  color: inherit;\n}\n.rsi-stepper-active .rsi-stepper-num {\n  color: #1b9aa9;\n}\n.rsi-inline .btn-primary,\n.rsi-modal-content .btn-primary {\n  color: #1b9aa9;\n  background-color: #ffffff;\n  border-color: #dfeff3;\n}\n.rsi-inline .btn-primary:hover,\n.rsi-modal-content .btn-primary:hover,\n.rsi-inline .btn-primary:focus,\n.rsi-modal-content .btn-primary:focus {\n  color: #2696a6;\n  background-color: #f2fafb;\n  border-color: #d1ebee;\n}\n.rsi-inline .btn-primary:active,\n.rsi-modal-content .btn-primary:active,\n.rsi-inline .btn-primary:disabled,\n.rsi-modal-content .btn-primary:disabled {\n  color: #1b9aa9;\n  background-color: #f2fafb;\n  border-color: #d1ebee;\n}\n.rsi-inline .btn-primary:focus-visible,\n.rsi-modal-content .btn-primary:focus-visible {\n  box-shadow: 0 0 0 0.25rem rgba(27, 154, 169, 0.25);\n}\n.rsi-inline .btn-outline-secondary,\n.rsi-modal-content .btn-outline-secondary {\n  color: #858c9c;\n  background-color: #ffffff;\n  border-color: #e7e7ec;\n}\n.rsi-inline .btn-outline-secondary:hover,\n.rsi-modal-content .btn-outline-secondary:hover,\n.rsi-inline .btn-outline-secondary:focus,\n.rsi-modal-content .btn-outline-secondary:focus {\n  color: #0a2540;\n  background-color: #f8f8f8;\n  border-color: #cfcfd7;\n}\n.rsi-inline .btn-outline-secondary:active,\n.rsi-modal-content .btn-outline-secondary:active,\n.rsi-inline .btn-outline-secondary:disabled,\n.rsi-modal-content .btn-outline-secondary:disabled {\n  color: #858c9c;\n  background-color: #f8f8f8;\n  border-color: #cfcfd7;\n}\n.rsi-inline .btn-outline-secondary:focus-visible,\n.rsi-modal-content .btn-outline-secondary:focus-visible {\n  box-shadow: 0 0 0 0.25rem rgba(133, 140, 156, 0.25);\n}\n.rsi-match-grid > * {\n  border-bottom: 1px solid var(--bs-border-color);\n}\n.rsi-match-grid > *:last-child,\n.rsi-match-grid .rsi-match-col-header:last-child {\n  border-right: 0;\n}\n.rsi-match-section-label {\n  position: sticky;\n  left: 0;\n  padding: 0.75rem 1rem;\n  font-weight: 600;\n  background-color: var(--bs-tertiary-bg);\n  color: var(--bs-body-color);\n  width: max-content;\n  min-width: 100%;\n  border-bottom: 1px solid var(--bs-border-color);\n}\n.rsi-match-section-divider {\n  border-top: 1px solid var(--bs-border-color);\n}\n.rsi-status-dot {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  border: 2px solid var(--bs-border-color);\n  flex-shrink: 0;\n}\n.rsi-status-dot.rsi-status-matched {\n  background-color: var(--bs-success);\n  border-color: var(--bs-success);\n}\n.rsi-status-dot.rsi-status-matched-required {\n  background-color: var(--bs-success);\n  border-color: var(--bs-success);\n}\n.rsi-status-dot.rsi-status-ignored {\n  background-color: transparent;\n  border-color: var(--bs-secondary-border-subtle);\n}\n.rsi-ignore-btn {\n  border: 1px solid var(--bs-border-color);\n  background-color: var(--bs-secondary-bg);\n  color: var(--bs-secondary-color);\n  font-size: 14px;\n}\n.rsi-ignore-btn:hover {\n  background-color: var(--bs-tertiary-bg);\n}\n');

// src/ReactSpreadsheetImport.tsx
var import_react7 = require("react");
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
        (row2, ri) => headers.map((_, ci) => {
          const isIgnored = mapping[ci] === void 0;
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "div",
            {
              className: `rsi-match-col-sample px-3 py-2 border-end small text-muted text-truncate ${isIgnored ? "opacity-50" : ""}`,
              style: { opacity: isIgnored ? 0.4 : 1 - ri * 0.25 },
              title: row2[ci] ?? "",
              children: row2[ci] ?? ""
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
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "border rounded overflow-auto", style: { maxHeight: 320 }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_bootstrap2.Table, { hover: true, size: "sm", className: "m-0 align-middle", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("tbody", { children: rows.slice(0, 25).map((row2, idx) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
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
          row2.map((cell2, ci) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { className: "small text-nowrap", children: cell2 }, ci))
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
  ws.eachRow({ includeEmpty: true }, (row2) => {
    const out = [];
    for (let i = 1; i <= lastCol; i++) {
      out.push(cellToString(row2.getCell(i).value));
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
  let row2 = [];
  let cell2 = "";
  let inQuotes = false;
  for (let i = 0; i < input.length; i++) {
    const c = input[i];
    if (inQuotes) {
      if (c === '"') {
        if (input[i + 1] === '"') {
          cell2 += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        cell2 += c;
      }
      continue;
    }
    if (c === '"') {
      inQuotes = true;
      continue;
    }
    if (c === ",") {
      row2.push(cell2);
      cell2 = "";
      continue;
    }
    if (c === "\n" || c === "\r") {
      if (c === "\r" && input[i + 1] === "\n") i++;
      row2.push(cell2);
      out.push(row2);
      row2 = [];
      cell2 = "";
      continue;
    }
    cell2 += c;
  }
  if (cell2.length > 0 || row2.length > 0) {
    row2.push(cell2);
    out.push(row2);
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
var import_react6 = require("react");
var import_react_dom2 = require("react-dom");
var import_react_bootstrap5 = require("react-bootstrap");

// node_modules/react-data-grid/lib/index.js
var import_react5 = require("react");
var import_react_dom = require("react-dom");
var import_jsx_runtime6 = require("react/jsx-runtime");
function getColSpan(column, lastFrozenColumnIndex, args) {
  const colSpan = typeof column.colSpan === "function" ? column.colSpan(args) : 1;
  if (Number.isInteger(colSpan) && colSpan > 1 && (!column.frozen || column.idx + colSpan - 1 <= lastFrozenColumnIndex)) return colSpan;
}
function stopPropagation(event) {
  event.stopPropagation();
}
function scrollIntoView(element, behavior = "instant") {
  element?.scrollIntoView({
    inline: "nearest",
    block: "nearest",
    behavior
  });
}
function createCellEvent(event) {
  let defaultPrevented = false;
  const cellEvent = {
    ...event,
    preventGridDefault() {
      defaultPrevented = true;
    },
    isGridDefaultPrevented() {
      return defaultPrevented;
    }
  };
  Object.setPrototypeOf(cellEvent, Object.getPrototypeOf(event));
  return cellEvent;
}
var nonInputKeys = /* @__PURE__ */ new Set([
  "Unidentified",
  "Alt",
  "AltGraph",
  "CapsLock",
  "Control",
  "Fn",
  "FnLock",
  "Meta",
  "NumLock",
  "ScrollLock",
  "Shift",
  "Tab",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "End",
  "Home",
  "PageDown",
  "PageUp",
  "Insert",
  "ContextMenu",
  "Escape",
  "Pause",
  "Play",
  "PrintScreen",
  "F1",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12"
]);
function isCtrlKeyHeldDown(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== "Control";
}
var vKey = 86;
function isDefaultCellInput(event, isUserHandlingPaste) {
  if (isCtrlKeyHeldDown(event) && (event.keyCode !== vKey || isUserHandlingPaste)) return false;
  return !nonInputKeys.has(event.key);
}
function onEditorNavigation({ key, target }) {
  if (key === "Tab" && (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement)) return target.closest(".rdg-editor-container")?.querySelectorAll("input, textarea, select").length === 1;
  return false;
}
function getLeftRightKey(direction) {
  const isRtl = direction === "rtl";
  return {
    leftKey: isRtl ? "ArrowRight" : "ArrowLeft",
    rightKey: isRtl ? "ArrowLeft" : "ArrowRight"
  };
}
var measuringCellClassname = "rdg-7-0-0-beta-58-fa71d63e";
function renderMeasuringCells(viewportColumns) {
  return viewportColumns.map(({ key, idx, minWidth, maxWidth }) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
    className: measuringCellClassname,
    style: {
      gridColumnStart: idx + 1,
      minWidth,
      maxWidth
    },
    "data-measuring-cell-key": key
  }, key));
}
function isSelectedCellEditable({ selectedPosition, columns, rows }) {
  const column = columns[selectedPosition.idx];
  const row$1 = rows[selectedPosition.rowIdx];
  return isCellEditableUtil(column, row$1);
}
function isCellEditableUtil(column, row$1) {
  return column.renderEditCell != null && (typeof column.editable === "function" ? column.editable(row$1) : column.editable) !== false;
}
function getSelectedCellColSpan({ rows, topSummaryRows, bottomSummaryRows, rowIdx, mainHeaderRowIdx, lastFrozenColumnIndex, column }) {
  const topSummaryRowsCount = topSummaryRows?.length ?? 0;
  if (rowIdx === mainHeaderRowIdx) return getColSpan(column, lastFrozenColumnIndex, { type: "HEADER" });
  if (topSummaryRows && rowIdx > mainHeaderRowIdx && rowIdx <= topSummaryRowsCount + mainHeaderRowIdx) return getColSpan(column, lastFrozenColumnIndex, {
    type: "SUMMARY",
    row: topSummaryRows[rowIdx + topSummaryRowsCount]
  });
  if (rowIdx >= 0 && rowIdx < rows.length) {
    const row$1 = rows[rowIdx];
    return getColSpan(column, lastFrozenColumnIndex, {
      type: "ROW",
      row: row$1
    });
  }
  if (bottomSummaryRows) return getColSpan(column, lastFrozenColumnIndex, {
    type: "SUMMARY",
    row: bottomSummaryRows[rowIdx - rows.length]
  });
}
function getNextSelectedCellPosition({ moveUp, moveNext, cellNavigationMode, columns, colSpanColumns, rows, topSummaryRows, bottomSummaryRows, minRowIdx, mainHeaderRowIdx, maxRowIdx, currentPosition: { idx: currentIdx, rowIdx: currentRowIdx }, nextPosition, lastFrozenColumnIndex, isCellWithinBounds }) {
  let { idx: nextIdx, rowIdx: nextRowIdx } = nextPosition;
  const columnsCount = columns.length;
  const setColSpan = (moveNext$1) => {
    for (const column of colSpanColumns) {
      const colIdx = column.idx;
      if (colIdx > nextIdx) break;
      const colSpan = getSelectedCellColSpan({
        rows,
        topSummaryRows,
        bottomSummaryRows,
        rowIdx: nextRowIdx,
        mainHeaderRowIdx,
        lastFrozenColumnIndex,
        column
      });
      if (colSpan && nextIdx > colIdx && nextIdx < colSpan + colIdx) {
        nextIdx = colIdx + (moveNext$1 ? colSpan : 0);
        break;
      }
    }
  };
  const getParentRowIdx = (parent) => {
    return parent.level + mainHeaderRowIdx;
  };
  const setHeaderGroupColAndRowSpan = () => {
    if (moveNext) {
      let parent = columns[nextIdx].parent;
      while (parent !== void 0) {
        const parentRowIdx = getParentRowIdx(parent);
        if (nextRowIdx === parentRowIdx) {
          nextIdx = parent.idx + parent.colSpan;
          break;
        }
        parent = parent.parent;
      }
    } else if (moveUp) {
      let parent = columns[nextIdx].parent;
      let found = false;
      while (parent !== void 0) {
        const parentRowIdx = getParentRowIdx(parent);
        if (nextRowIdx >= parentRowIdx) {
          nextIdx = parent.idx;
          nextRowIdx = parentRowIdx;
          found = true;
          break;
        }
        parent = parent.parent;
      }
      if (!found) {
        nextIdx = currentIdx;
        nextRowIdx = currentRowIdx;
      }
    }
  };
  if (isCellWithinBounds(nextPosition)) {
    setColSpan(moveNext);
    if (nextRowIdx < mainHeaderRowIdx) setHeaderGroupColAndRowSpan();
  }
  if (cellNavigationMode === "CHANGE_ROW") {
    const isAfterLastColumn = nextIdx === columnsCount;
    const isBeforeFirstColumn = nextIdx === -1;
    if (isAfterLastColumn) {
      if (!(nextRowIdx === maxRowIdx)) {
        nextIdx = 0;
        nextRowIdx += 1;
      }
    } else if (isBeforeFirstColumn) {
      if (!(nextRowIdx === minRowIdx)) {
        nextRowIdx -= 1;
        nextIdx = columnsCount - 1;
      }
      setColSpan(false);
    }
  }
  if (nextRowIdx < mainHeaderRowIdx && nextIdx > -1 && nextIdx < columnsCount) {
    let parent = columns[nextIdx].parent;
    const nextParentRowIdx = nextRowIdx;
    nextRowIdx = mainHeaderRowIdx;
    while (parent !== void 0) {
      const parentRowIdx = getParentRowIdx(parent);
      if (parentRowIdx >= nextParentRowIdx) {
        nextRowIdx = parentRowIdx;
        nextIdx = parent.idx;
      }
      parent = parent.parent;
    }
  }
  return {
    idx: nextIdx,
    rowIdx: nextRowIdx
  };
}
function canExitGrid({ maxColIdx, minRowIdx, maxRowIdx, selectedPosition: { rowIdx, idx }, shiftKey }) {
  return shiftKey ? idx === 0 && rowIdx === minRowIdx : idx === maxColIdx && rowIdx === maxRowIdx;
}
var cell = "rdg-7-0-0-beta-58-85c48527";
var cellClassname = `rdg-cell ${cell}`;
var cellFrozen = "rdg-7-0-0-beta-58-17a9a6d4";
var cellFrozenClassname = `rdg-cell-frozen ${cellFrozen}`;
var cellDragHandle = "rdg-7-0-0-beta-58-bfba19bc";
var cellDragHandleFrozenClassname = "rdg-7-0-0-beta-58-7abddb3e";
var cellDragHandleClassname = `rdg-cell-drag-handle ${cellDragHandle}`;
function getRowStyle(rowIdx) {
  return { "--rdg-grid-row-start": rowIdx };
}
function getHeaderCellStyle(column, rowIdx, rowSpan) {
  const gridRowEnd = rowIdx + 1;
  const paddingBlockStart = `calc(${rowSpan - 1} * var(--rdg-header-row-height))`;
  if (column.parent === void 0) return {
    insetBlockStart: 0,
    gridRowStart: 1,
    gridRowEnd,
    paddingBlockStart
  };
  return {
    insetBlockStart: `calc(${rowIdx - rowSpan} * var(--rdg-header-row-height))`,
    gridRowStart: gridRowEnd - rowSpan,
    gridRowEnd,
    paddingBlockStart
  };
}
function getCellStyle(column, colSpan = 1) {
  const index = column.idx + 1;
  return {
    gridColumnStart: index,
    gridColumnEnd: index + colSpan,
    insetInlineStart: column.frozen ? `var(--rdg-frozen-left-${column.idx})` : void 0
  };
}
function classnames(...args) {
  let classname = "";
  for (const arg of args) if (arg) {
    if (typeof arg === "string") classname += ` ${arg}`;
    else if (typeof arg === "object") {
      for (const key in arg) if (arg[key]) classname += ` ${key}`;
    }
  }
  return classname.trimStart();
}
function getCellClassname(column, ...extraClasses) {
  return classnames(cellClassname, { [cellFrozenClassname]: column.frozen }, ...extraClasses);
}
var { min, max, floor, sign, abs } = Math;
function assertIsValidKeyGetter(keyGetter) {
  if (typeof keyGetter !== "function") throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function clampColumnWidth(width, { minWidth, maxWidth }) {
  width = max(width, minWidth);
  if (typeof maxWidth === "number" && maxWidth >= minWidth) return min(width, maxWidth);
  return width;
}
function getHeaderCellRowSpan(column, rowIdx) {
  return column.parent === void 0 ? rowIdx : column.level - column.parent.level;
}
var checkboxClassname = `rdg-checkbox-input rdg-7-0-0-beta-58-3b807ead`;
function renderCheckbox({ onChange, indeterminate, ...props }) {
  function handleChange(e) {
    onChange(e.target.checked, e.nativeEvent.shiftKey);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("input", {
    ref: (el) => {
      if (el) el.indeterminate = indeterminate === true;
    },
    type: "checkbox",
    className: checkboxClassname,
    onChange: handleChange,
    ...props
  });
}
function renderValue(props) {
  try {
    return props.row[props.column.key];
  } catch {
    return null;
  }
}
var DataGridDefaultRenderersContext = (0, import_react5.createContext)(void 0);
function useDefaultRenderers() {
  return (0, import_react5.useContext)(DataGridDefaultRenderersContext);
}
var RowSelectionContext = (0, import_react5.createContext)(void 0);
var RowSelectionChangeContext = (0, import_react5.createContext)(void 0);
function useRowSelection() {
  const rowSelectionContext = (0, import_react5.useContext)(RowSelectionContext);
  const rowSelectionChangeContext = (0, import_react5.useContext)(RowSelectionChangeContext);
  if (rowSelectionContext === void 0 || rowSelectionChangeContext === void 0) throw new Error("useRowSelection must be used within renderCell");
  return {
    isRowSelectionDisabled: rowSelectionContext.isRowSelectionDisabled,
    isRowSelected: rowSelectionContext.isRowSelected,
    onRowSelectionChange: rowSelectionChangeContext
  };
}
var HeaderRowSelectionContext = (0, import_react5.createContext)(void 0);
var HeaderRowSelectionChangeContext = (0, import_react5.createContext)(void 0);
function useHeaderRowSelection() {
  const headerRowSelectionContext = (0, import_react5.useContext)(HeaderRowSelectionContext);
  const headerRowSelectionChangeContext = (0, import_react5.useContext)(HeaderRowSelectionChangeContext);
  if (headerRowSelectionContext === void 0 || headerRowSelectionChangeContext === void 0) throw new Error("useHeaderRowSelection must be used within renderHeaderCell");
  return {
    isIndeterminate: headerRowSelectionContext.isIndeterminate,
    isRowSelected: headerRowSelectionContext.isRowSelected,
    onRowSelectionChange: headerRowSelectionChangeContext
  };
}
var SELECT_COLUMN_KEY = "rdg-select-column";
var headerSortCellClassname = "rdg-7-0-0-beta-58-56a248e4";
var headerSortNameClassname = `rdg-header-sort-name rdg-7-0-0-beta-58-7fad8c83`;
function renderHeaderCell({ column, sortDirection, priority }) {
  if (!column.sortable) return column.name;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SortableHeaderCell, {
    sortDirection,
    priority,
    children: column.name
  });
}
function SortableHeaderCell({ sortDirection, priority, children }) {
  const renderSortStatus$1 = useDefaultRenderers().renderSortStatus;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", {
    className: headerSortCellClassname,
    children: [/* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", {
      className: headerSortNameClassname,
      children
    }), /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: renderSortStatus$1({
      sortDirection,
      priority
    }) })]
  });
}
var DEFAULT_COLUMN_WIDTH = "auto";
var DEFAULT_COLUMN_MIN_WIDTH = 50;
function useCalculatedColumns({ rawColumns, defaultColumnOptions, getColumnWidth, viewportWidth, scrollLeft, enableVirtualization }) {
  const defaultWidth = defaultColumnOptions?.width ?? DEFAULT_COLUMN_WIDTH;
  const defaultMinWidth = defaultColumnOptions?.minWidth ?? DEFAULT_COLUMN_MIN_WIDTH;
  const defaultMaxWidth = defaultColumnOptions?.maxWidth ?? void 0;
  const defaultRenderCell$1 = defaultColumnOptions?.renderCell ?? renderValue;
  const defaultRenderHeaderCell = defaultColumnOptions?.renderHeaderCell ?? renderHeaderCell;
  const defaultSortable = defaultColumnOptions?.sortable ?? false;
  const defaultResizable = defaultColumnOptions?.resizable ?? false;
  const defaultDraggable = defaultColumnOptions?.draggable ?? false;
  const { columns, colSpanColumns, lastFrozenColumnIndex, headerRowsCount } = (0, import_react5.useMemo)(() => {
    let lastFrozenColumnIndex$1 = -1;
    let headerRowsCount$1 = 1;
    const columns$1 = [];
    collectColumns(rawColumns, 1);
    function collectColumns(rawColumns$1, level, parent) {
      for (const rawColumn of rawColumns$1) {
        if ("children" in rawColumn) {
          const calculatedColumnParent = {
            name: rawColumn.name,
            parent,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: rawColumn.headerCellClass
          };
          collectColumns(rawColumn.children, level + 1, calculatedColumnParent);
          continue;
        }
        const frozen = rawColumn.frozen ?? false;
        const column = {
          ...rawColumn,
          parent,
          idx: 0,
          level: 0,
          frozen,
          width: rawColumn.width ?? defaultWidth,
          minWidth: rawColumn.minWidth ?? defaultMinWidth,
          maxWidth: rawColumn.maxWidth ?? defaultMaxWidth,
          sortable: rawColumn.sortable ?? defaultSortable,
          resizable: rawColumn.resizable ?? defaultResizable,
          draggable: rawColumn.draggable ?? defaultDraggable,
          renderCell: rawColumn.renderCell ?? defaultRenderCell$1,
          renderHeaderCell: rawColumn.renderHeaderCell ?? defaultRenderHeaderCell
        };
        columns$1.push(column);
        if (frozen) lastFrozenColumnIndex$1++;
        if (level > headerRowsCount$1) headerRowsCount$1 = level;
      }
    }
    columns$1.sort(({ key: aKey, frozen: frozenA }, { key: bKey, frozen: frozenB }) => {
      if (aKey === SELECT_COLUMN_KEY) return -1;
      if (bKey === SELECT_COLUMN_KEY) return 1;
      if (frozenA) {
        if (frozenB) return 0;
        return -1;
      }
      if (frozenB) return 1;
      return 0;
    });
    const colSpanColumns$1 = [];
    columns$1.forEach((column, idx) => {
      column.idx = idx;
      updateColumnParent(column, idx, 0);
      if (column.colSpan != null) colSpanColumns$1.push(column);
    });
    return {
      columns: columns$1,
      colSpanColumns: colSpanColumns$1,
      lastFrozenColumnIndex: lastFrozenColumnIndex$1,
      headerRowsCount: headerRowsCount$1
    };
  }, [
    rawColumns,
    defaultWidth,
    defaultMinWidth,
    defaultMaxWidth,
    defaultRenderCell$1,
    defaultRenderHeaderCell,
    defaultResizable,
    defaultSortable,
    defaultDraggable
  ]);
  const { templateColumns, layoutCssVars, totalFrozenColumnWidth, columnMetrics } = (0, import_react5.useMemo)(() => {
    const columnMetrics$1 = /* @__PURE__ */ new Map();
    let left = 0;
    let totalFrozenColumnWidth$1 = 0;
    const templateColumns$1 = [];
    for (const column of columns) {
      let width = getColumnWidth(column);
      if (typeof width === "number") width = clampColumnWidth(width, column);
      else width = column.minWidth;
      templateColumns$1.push(`${width}px`);
      columnMetrics$1.set(column, {
        width,
        left
      });
      left += width;
    }
    if (lastFrozenColumnIndex !== -1) {
      const columnMetric = columnMetrics$1.get(columns[lastFrozenColumnIndex]);
      totalFrozenColumnWidth$1 = columnMetric.left + columnMetric.width;
    }
    const layoutCssVars$1 = {};
    for (let i = 0; i <= lastFrozenColumnIndex; i++) {
      const column = columns[i];
      layoutCssVars$1[`--rdg-frozen-left-${column.idx}`] = `${columnMetrics$1.get(column).left}px`;
    }
    return {
      templateColumns: templateColumns$1,
      layoutCssVars: layoutCssVars$1,
      totalFrozenColumnWidth: totalFrozenColumnWidth$1,
      columnMetrics: columnMetrics$1
    };
  }, [
    getColumnWidth,
    columns,
    lastFrozenColumnIndex
  ]);
  const [colOverscanStartIdx, colOverscanEndIdx] = (0, import_react5.useMemo)(() => {
    if (!enableVirtualization) return [0, columns.length - 1];
    const viewportLeft = scrollLeft + totalFrozenColumnWidth;
    const viewportRight = scrollLeft + viewportWidth;
    const lastColIdx = columns.length - 1;
    const firstUnfrozenColumnIdx = min(lastFrozenColumnIndex + 1, lastColIdx);
    if (viewportLeft >= viewportRight) return [firstUnfrozenColumnIdx, firstUnfrozenColumnIdx];
    let colVisibleStartIdx = firstUnfrozenColumnIdx;
    while (colVisibleStartIdx < lastColIdx) {
      const { left, width } = columnMetrics.get(columns[colVisibleStartIdx]);
      if (left + width > viewportLeft) break;
      colVisibleStartIdx++;
    }
    let colVisibleEndIdx = colVisibleStartIdx;
    while (colVisibleEndIdx < lastColIdx) {
      const { left, width } = columnMetrics.get(columns[colVisibleEndIdx]);
      if (left + width >= viewportRight) break;
      colVisibleEndIdx++;
    }
    return [max(firstUnfrozenColumnIdx, colVisibleStartIdx - 1), min(lastColIdx, colVisibleEndIdx + 1)];
  }, [
    columnMetrics,
    columns,
    lastFrozenColumnIndex,
    scrollLeft,
    totalFrozenColumnWidth,
    viewportWidth,
    enableVirtualization
  ]);
  return {
    columns,
    colSpanColumns,
    colOverscanStartIdx,
    colOverscanEndIdx,
    templateColumns,
    layoutCssVars,
    headerRowsCount,
    lastFrozenColumnIndex,
    totalFrozenColumnWidth
  };
}
function updateColumnParent(column, index, level) {
  if (level < column.level) column.level = level;
  if (column.parent !== void 0) {
    const { parent } = column;
    if (parent.idx === -1) parent.idx = index;
    parent.colSpan += 1;
    updateColumnParent(parent, index, level - 1);
  }
}
function useColumnWidths(columns, viewportColumns, templateColumns, gridRef, gridWidth, columnWidths, onColumnWidthsChange, onColumnResize, setColumnResizing) {
  const [columnToAutoResize, setColumnToAutoResize] = (0, import_react5.useState)(null);
  const [columnsToMeasureOnResize, setColumnsToMeasureOnResize] = (0, import_react5.useState)(null);
  const [prevGridWidth, setPreviousGridWidth] = (0, import_react5.useState)(gridWidth);
  const columnsCanFlex = columns.length === viewportColumns.length;
  const ignorePreviouslyMeasuredColumnsOnGridWidthChange = columnsCanFlex && gridWidth !== prevGridWidth;
  const newTemplateColumns = [...templateColumns];
  const columnsToMeasure = [];
  for (const { key, idx, width } of viewportColumns) {
    const columnWidth = columnWidths.get(key);
    if (key === columnToAutoResize?.key) {
      newTemplateColumns[idx] = columnToAutoResize.width === "max-content" ? columnToAutoResize.width : `${columnToAutoResize.width}px`;
      columnsToMeasure.push(key);
    } else if (typeof width === "string" && columnWidth?.type !== "resized" && (ignorePreviouslyMeasuredColumnsOnGridWidthChange || columnsToMeasureOnResize?.has(key) === true || columnWidth === void 0)) {
      newTemplateColumns[idx] = width;
      columnsToMeasure.push(key);
    }
  }
  const gridTemplateColumns = newTemplateColumns.join(" ");
  (0, import_react5.useLayoutEffect)(updateMeasuredAndResizedWidths);
  function updateMeasuredAndResizedWidths() {
    setPreviousGridWidth(gridWidth);
    if (columnsToMeasure.length === 0) return;
    const newColumnWidths = new Map(columnWidths);
    let hasChanges = false;
    for (const key of columnsToMeasure) {
      const measuredWidth = measureColumnWidth(gridRef, key);
      hasChanges || (hasChanges = measuredWidth !== columnWidths.get(key)?.width);
      if (measuredWidth === void 0) newColumnWidths.delete(key);
      else newColumnWidths.set(key, {
        type: "measured",
        width: measuredWidth
      });
    }
    if (columnToAutoResize !== null) {
      const resizingKey = columnToAutoResize.key;
      const oldWidth = columnWidths.get(resizingKey)?.width;
      const newWidth = measureColumnWidth(gridRef, resizingKey);
      if (newWidth !== void 0 && oldWidth !== newWidth) {
        hasChanges = true;
        newColumnWidths.set(resizingKey, {
          type: "resized",
          width: newWidth
        });
      }
      setColumnToAutoResize(null);
    }
    if (hasChanges) onColumnWidthsChange(newColumnWidths);
  }
  function handleColumnResize(column, nextWidth) {
    const { key: resizingKey } = column;
    (0, import_react_dom.flushSync)(() => {
      if (columnsCanFlex) {
        const columnsToRemeasure = /* @__PURE__ */ new Set();
        for (const { key, width } of viewportColumns) if (resizingKey !== key && typeof width === "string" && columnWidths.get(key)?.type !== "resized") columnsToRemeasure.add(key);
        setColumnsToMeasureOnResize(columnsToRemeasure);
      }
      setColumnToAutoResize({
        key: resizingKey,
        width: nextWidth
      });
      setColumnResizing(typeof nextWidth === "number");
    });
    setColumnsToMeasureOnResize(null);
    if (onColumnResize) {
      const previousWidth = columnWidths.get(resizingKey)?.width;
      const newWidth = typeof nextWidth === "number" ? nextWidth : measureColumnWidth(gridRef, resizingKey);
      if (newWidth !== void 0 && newWidth !== previousWidth) onColumnResize(column, newWidth);
    }
  }
  return {
    gridTemplateColumns,
    handleColumnResize
  };
}
function measureColumnWidth(gridRef, key) {
  const selector = `[data-measuring-cell-key="${CSS.escape(key)}"]`;
  return gridRef.current?.querySelector(selector)?.getBoundingClientRect().width;
}
function useGridDimensions() {
  const gridRef = (0, import_react5.useRef)(null);
  const [inlineSize, setInlineSize] = (0, import_react5.useState)(1);
  const [blockSize, setBlockSize] = (0, import_react5.useState)(1);
  const [horizontalScrollbarHeight, setHorizontalScrollbarHeight] = (0, import_react5.useState)(0);
  (0, import_react5.useLayoutEffect)(() => {
    const { ResizeObserver } = window;
    if (ResizeObserver == null) return;
    const { clientWidth, clientHeight, offsetWidth, offsetHeight } = gridRef.current;
    const { width, height } = gridRef.current.getBoundingClientRect();
    const initialHorizontalScrollbarHeight = offsetHeight - clientHeight;
    const initialWidth = width - offsetWidth + clientWidth;
    const initialHeight = height - initialHorizontalScrollbarHeight;
    setInlineSize(initialWidth);
    setBlockSize(initialHeight);
    setHorizontalScrollbarHeight(initialHorizontalScrollbarHeight);
    const resizeObserver = new ResizeObserver((entries) => {
      const size = entries[0].contentBoxSize[0];
      const { clientHeight: clientHeight$1, offsetHeight: offsetHeight$1 } = gridRef.current;
      (0, import_react_dom.flushSync)(() => {
        setInlineSize(size.inlineSize);
        setBlockSize(size.blockSize);
        setHorizontalScrollbarHeight(offsetHeight$1 - clientHeight$1);
      });
    });
    resizeObserver.observe(gridRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  return [
    gridRef,
    inlineSize,
    blockSize,
    horizontalScrollbarHeight
  ];
}
function useLatestFunc(fn) {
  const ref = (0, import_react5.useRef)(fn);
  (0, import_react5.useLayoutEffect)(() => {
    ref.current = fn;
  });
  const callbackFn = (0, import_react5.useCallback)((...args) => {
    ref.current(...args);
  }, []);
  return fn ? callbackFn : fn;
}
function useRovingTabIndex(isSelected) {
  const [isChildFocused, setIsChildFocused] = (0, import_react5.useState)(false);
  if (isChildFocused && !isSelected) setIsChildFocused(false);
  function onFocus(event) {
    if (event.target === event.currentTarget) {
      const elementToFocus = event.currentTarget.querySelector('[tabindex="0"]');
      if (elementToFocus !== null) {
        elementToFocus.focus({ preventScroll: true });
        setIsChildFocused(true);
      } else setIsChildFocused(false);
    } else setIsChildFocused(true);
  }
  return {
    tabIndex: isSelected && !isChildFocused ? 0 : -1,
    childTabIndex: isSelected ? 0 : -1,
    onFocus: isSelected ? onFocus : void 0
  };
}
function useViewportColumns({ columns, colSpanColumns, rows, topSummaryRows, bottomSummaryRows, colOverscanStartIdx, colOverscanEndIdx, lastFrozenColumnIndex, rowOverscanStartIdx, rowOverscanEndIdx }) {
  const startIdx = (0, import_react5.useMemo)(() => {
    if (colOverscanStartIdx === 0) return 0;
    let startIdx$1 = colOverscanStartIdx;
    const updateStartIdx = (colIdx, colSpan) => {
      if (colSpan !== void 0 && colIdx + colSpan > colOverscanStartIdx) {
        startIdx$1 = colIdx;
        return true;
      }
      return false;
    };
    for (const column of colSpanColumns) {
      const colIdx = column.idx;
      if (colIdx >= startIdx$1) break;
      if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, { type: "HEADER" }))) break;
      for (let rowIdx = rowOverscanStartIdx; rowIdx <= rowOverscanEndIdx; rowIdx++) {
        const row$1 = rows[rowIdx];
        if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, {
          type: "ROW",
          row: row$1
        }))) break;
      }
      if (topSummaryRows != null) {
        for (const row$1 of topSummaryRows) if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, {
          type: "SUMMARY",
          row: row$1
        }))) break;
      }
      if (bottomSummaryRows != null) {
        for (const row$1 of bottomSummaryRows) if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, {
          type: "SUMMARY",
          row: row$1
        }))) break;
      }
    }
    return startIdx$1;
  }, [
    rowOverscanStartIdx,
    rowOverscanEndIdx,
    rows,
    topSummaryRows,
    bottomSummaryRows,
    colOverscanStartIdx,
    lastFrozenColumnIndex,
    colSpanColumns
  ]);
  return (0, import_react5.useMemo)(() => {
    const viewportColumns = [];
    for (let colIdx = 0; colIdx <= colOverscanEndIdx; colIdx++) {
      const column = columns[colIdx];
      if (colIdx < startIdx && !column.frozen) continue;
      viewportColumns.push(column);
    }
    return viewportColumns;
  }, [
    startIdx,
    colOverscanEndIdx,
    columns
  ]);
}
function useViewportRows({ rows, rowHeight, clientHeight, scrollTop, enableVirtualization }) {
  const { totalRowHeight, gridTemplateRows, getRowTop, getRowHeight, findRowIdx } = (0, import_react5.useMemo)(() => {
    if (typeof rowHeight === "number") return {
      totalRowHeight: rowHeight * rows.length,
      gridTemplateRows: ` repeat(${rows.length}, ${rowHeight}px)`,
      getRowTop: (rowIdx) => rowIdx * rowHeight,
      getRowHeight: () => rowHeight,
      findRowIdx: (offset) => floor(offset / rowHeight)
    };
    let totalRowHeight$1 = 0;
    let gridTemplateRows$1 = "";
    let currentHeight = null;
    let repeatCount = 0;
    const rowPositions = rows.map((row$1, index) => {
      const currentRowHeight = rowHeight(row$1);
      const position = {
        top: totalRowHeight$1,
        height: currentRowHeight
      };
      totalRowHeight$1 += currentRowHeight;
      if (currentHeight === null) {
        currentHeight = currentRowHeight;
        repeatCount = 1;
      } else if (currentHeight === currentRowHeight) repeatCount++;
      else {
        if (repeatCount > 1) gridTemplateRows$1 += `repeat(${repeatCount}, ${currentHeight}px) `;
        else gridTemplateRows$1 += `${currentHeight}px `;
        currentHeight = currentRowHeight;
        repeatCount = 1;
      }
      if (index === rows.length - 1) if (repeatCount > 1) gridTemplateRows$1 += `repeat(${repeatCount}, ${currentHeight}px)`;
      else gridTemplateRows$1 += `${currentHeight}px`;
      return position;
    });
    const validateRowIdx = (rowIdx) => {
      return max(0, min(rows.length - 1, rowIdx));
    };
    return {
      totalRowHeight: totalRowHeight$1,
      gridTemplateRows: gridTemplateRows$1,
      getRowTop: (rowIdx) => rowPositions[validateRowIdx(rowIdx)].top,
      getRowHeight: (rowIdx) => rowPositions[validateRowIdx(rowIdx)].height,
      findRowIdx(offset) {
        let start = 0;
        let end = rowPositions.length - 1;
        while (start <= end) {
          const middle = start + floor((end - start) / 2);
          const currentOffset = rowPositions[middle].top;
          if (currentOffset === offset) return middle;
          if (currentOffset < offset) start = middle + 1;
          else if (currentOffset > offset) end = middle - 1;
          if (start > end) return end;
        }
        return 0;
      }
    };
  }, [rowHeight, rows]);
  let rowOverscanStartIdx = 0;
  let rowOverscanEndIdx = rows.length - 1;
  if (enableVirtualization) {
    const overscanThreshold = 4;
    const rowVisibleStartIdx = findRowIdx(scrollTop);
    const rowVisibleEndIdx = findRowIdx(scrollTop + clientHeight);
    rowOverscanStartIdx = max(0, rowVisibleStartIdx - overscanThreshold);
    rowOverscanEndIdx = min(rows.length - 1, rowVisibleEndIdx + overscanThreshold);
  }
  return {
    rowOverscanStartIdx,
    rowOverscanEndIdx,
    totalRowHeight,
    gridTemplateRows,
    getRowTop,
    getRowHeight,
    findRowIdx
  };
}
var cellDraggedOverClassname = `rdg-cell-dragged-over rdg-7-0-0-beta-58-35ccb4c8`;
function Cell({ column, colSpan, isCellSelected, isDraggedOver, row: row$1, rowIdx, className, onMouseDown, onCellMouseDown, onClick, onCellClick, onDoubleClick, onCellDoubleClick, onContextMenu, onCellContextMenu, onRowChange, selectCell, style, ...props }) {
  const { tabIndex, childTabIndex, onFocus } = useRovingTabIndex(isCellSelected);
  const { cellClass } = column;
  className = getCellClassname(column, { [cellDraggedOverClassname]: isDraggedOver }, typeof cellClass === "function" ? cellClass(row$1) : cellClass, className);
  const isEditable = isCellEditableUtil(column, row$1);
  function selectCellWrapper(enableEditor) {
    selectCell({
      rowIdx,
      idx: column.idx
    }, { enableEditor });
  }
  function handleMouseEvent(event, eventHandler) {
    let eventHandled = false;
    if (eventHandler) {
      const cellEvent = createCellEvent(event);
      eventHandler({
        rowIdx,
        row: row$1,
        column,
        selectCell: selectCellWrapper
      }, cellEvent);
      eventHandled = cellEvent.isGridDefaultPrevented();
    }
    return eventHandled;
  }
  function handleMouseDown(event) {
    onMouseDown?.(event);
    if (!handleMouseEvent(event, onCellMouseDown)) selectCellWrapper();
  }
  function handleClick(event) {
    onClick?.(event);
    handleMouseEvent(event, onCellClick);
  }
  function handleDoubleClick(event) {
    onDoubleClick?.(event);
    if (!handleMouseEvent(event, onCellDoubleClick)) selectCellWrapper(true);
  }
  function handleContextMenu(event) {
    onContextMenu?.(event);
    handleMouseEvent(event, onCellContextMenu);
  }
  function handleRowChange(newRow) {
    onRowChange(column, newRow);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
    role: "gridcell",
    "aria-colindex": column.idx + 1,
    "aria-colspan": colSpan,
    "aria-selected": isCellSelected,
    "aria-readonly": !isEditable || void 0,
    tabIndex,
    className,
    style: {
      ...getCellStyle(column, colSpan),
      ...style
    },
    onClick: handleClick,
    onMouseDown: handleMouseDown,
    onDoubleClick: handleDoubleClick,
    onContextMenu: handleContextMenu,
    onFocus,
    ...props,
    children: column.renderCell({
      column,
      row: row$1,
      rowIdx,
      isCellEditable: isEditable,
      tabIndex: childTabIndex,
      onRowChange: handleRowChange
    })
  });
}
var CellComponent = (0, import_react5.memo)(Cell);
function defaultRenderCell(key, props) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CellComponent, { ...props }, key);
}
var canUsePostTask = typeof scheduler === "object" && typeof scheduler.postTask === "function";
var cellEditing = "rdg-7-0-0-beta-58-46f9ea88";
function EditCell({ column, colSpan, row: row$1, rowIdx, onRowChange, closeEditor, onKeyDown, navigate }) {
  const captureEventRef = (0, import_react5.useRef)(void 0);
  const abortControllerRef = (0, import_react5.useRef)(void 0);
  const frameRequestRef = (0, import_react5.useRef)(void 0);
  const commitOnOutsideClick = column.editorOptions?.commitOnOutsideClick ?? true;
  const commitOnOutsideMouseDown = (0, import_react5.useEffectEvent)(() => {
    onClose(true, false);
  });
  (0, import_react5.useLayoutEffect)(() => {
    if (!commitOnOutsideClick) return;
    function onWindowCaptureMouseDown(event) {
      captureEventRef.current = event;
      if (canUsePostTask) {
        const abortController = new AbortController();
        const { signal } = abortController;
        abortControllerRef.current = abortController;
        scheduler.postTask(commitOnOutsideMouseDown, {
          priority: "user-blocking",
          signal
        }).catch(() => {
        });
      } else frameRequestRef.current = requestAnimationFrame(commitOnOutsideMouseDown);
    }
    function onWindowMouseDown(event) {
      if (captureEventRef.current === event) commitOnOutsideMouseDown();
    }
    addEventListener("mousedown", onWindowCaptureMouseDown, { capture: true });
    addEventListener("mousedown", onWindowMouseDown);
    return () => {
      removeEventListener("mousedown", onWindowCaptureMouseDown, { capture: true });
      removeEventListener("mousedown", onWindowMouseDown);
      cancelTask();
    };
  }, [commitOnOutsideClick]);
  function cancelTask() {
    captureEventRef.current = void 0;
    if (abortControllerRef.current !== void 0) {
      abortControllerRef.current.abort();
      abortControllerRef.current = void 0;
    }
    if (frameRequestRef.current !== void 0) {
      cancelAnimationFrame(frameRequestRef.current);
      frameRequestRef.current = void 0;
    }
  }
  function handleKeyDown(event) {
    if (onKeyDown) {
      const cellEvent = createCellEvent(event);
      onKeyDown({
        mode: "EDIT",
        row: row$1,
        column,
        rowIdx,
        navigate() {
          navigate(event);
        },
        onClose
      }, cellEvent);
      if (cellEvent.isGridDefaultPrevented()) return;
    }
    if (event.key === "Escape") onClose();
    else if (event.key === "Enter") onClose(true);
    else if (onEditorNavigation(event)) navigate(event);
  }
  function onClose(commitChanges = false, shouldFocusCell = true) {
    if (commitChanges) onRowChange(row$1, true, shouldFocusCell);
    else closeEditor(shouldFocusCell);
  }
  function onEditorRowChange(row$2, commitChangesAndFocus = false) {
    onRowChange(row$2, commitChangesAndFocus, commitChangesAndFocus);
  }
  const { cellClass } = column;
  const className = getCellClassname(column, "rdg-editor-container", !column.editorOptions?.displayCellContent && cellEditing, typeof cellClass === "function" ? cellClass(row$1) : cellClass);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
    role: "gridcell",
    "aria-colindex": column.idx + 1,
    "aria-colspan": colSpan,
    "aria-selected": true,
    className,
    style: getCellStyle(column, colSpan),
    onKeyDown: handleKeyDown,
    onMouseDownCapture: cancelTask,
    children: column.renderEditCell != null && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [column.renderEditCell({
      column,
      row: row$1,
      rowIdx,
      onRowChange: onEditorRowChange,
      onClose
    }), column.editorOptions?.displayCellContent && column.renderCell({
      column,
      row: row$1,
      rowIdx,
      isCellEditable: true,
      tabIndex: -1,
      onRowChange: onEditorRowChange
    })] })
  });
}
function GroupedColumnHeaderCell({ column, rowIdx, isCellSelected, selectCell }) {
  const { tabIndex, onFocus } = useRovingTabIndex(isCellSelected);
  const { colSpan } = column;
  const rowSpan = getHeaderCellRowSpan(column, rowIdx);
  const index = column.idx + 1;
  function onMouseDown() {
    selectCell({
      idx: column.idx,
      rowIdx
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
    role: "columnheader",
    "aria-colindex": index,
    "aria-colspan": colSpan,
    "aria-rowspan": rowSpan,
    "aria-selected": isCellSelected,
    tabIndex,
    className: classnames(cellClassname, column.headerCellClass),
    style: {
      ...getHeaderCellStyle(column, rowIdx, rowSpan),
      gridColumnStart: index,
      gridColumnEnd: index + colSpan
    },
    onFocus,
    onMouseDown,
    children: column.name
  });
}
var cellSortableClassname = "rdg-7-0-0-beta-58-2a7e240d";
var cellResizableClassname = `rdg-cell-resizable rdg-7-0-0-beta-58-1893dc0f`;
var resizeHandleClassname = `rdg-resize-handle rdg-7-0-0-beta-58-4e60db91`;
var cellDraggableClassname = "rdg-cell-draggable";
var cellDraggingClassname = `rdg-cell-dragging rdg-7-0-0-beta-58-3e1a4ad4`;
var cellOverClassname = `rdg-cell-drag-over rdg-7-0-0-beta-58-51abd8b8`;
var dragImageClassname = "rdg-7-0-0-beta-58-c8d7aa64";
function HeaderCell({ column, colSpan, rowIdx, isCellSelected, onColumnResize, onColumnResizeEnd, onColumnsReorder, sortColumns, onSortColumnsChange, selectCell, shouldFocusGrid, direction, draggedColumnKey, setDraggedColumnKey }) {
  const [isOver, setIsOver] = (0, import_react5.useState)(false);
  const dragImageRef = (0, import_react5.useRef)(null);
  const isDragging = draggedColumnKey === column.key;
  const rowSpan = getHeaderCellRowSpan(column, rowIdx);
  const { tabIndex, childTabIndex, onFocus } = useRovingTabIndex(shouldFocusGrid || isCellSelected);
  const sortIndex = sortColumns?.findIndex((sort) => sort.columnKey === column.key);
  const sortColumn = sortIndex !== void 0 && sortIndex > -1 ? sortColumns[sortIndex] : void 0;
  const sortDirection = sortColumn?.direction;
  const priority = sortColumn !== void 0 && sortColumns.length > 1 ? sortIndex + 1 : void 0;
  const ariaSort = sortDirection && !priority ? sortDirection === "ASC" ? "ascending" : "descending" : void 0;
  const { sortable, resizable, draggable } = column;
  const className = getCellClassname(column, column.headerCellClass, {
    [cellSortableClassname]: sortable,
    [cellResizableClassname]: resizable,
    [cellDraggableClassname]: draggable,
    [cellDraggingClassname]: isDragging,
    [cellOverClassname]: isOver
  });
  function onSort(ctrlClick) {
    if (onSortColumnsChange == null) return;
    const { sortDescendingFirst } = column;
    if (sortColumn === void 0) {
      const nextSort = {
        columnKey: column.key,
        direction: sortDescendingFirst ? "DESC" : "ASC"
      };
      onSortColumnsChange(sortColumns && ctrlClick ? [...sortColumns, nextSort] : [nextSort]);
    } else {
      let nextSortColumn;
      if (sortDescendingFirst === true && sortDirection === "DESC" || sortDescendingFirst !== true && sortDirection === "ASC") nextSortColumn = {
        columnKey: column.key,
        direction: sortDirection === "ASC" ? "DESC" : "ASC"
      };
      if (ctrlClick) {
        const nextSortColumns = [...sortColumns];
        if (nextSortColumn) nextSortColumns[sortIndex] = nextSortColumn;
        else nextSortColumns.splice(sortIndex, 1);
        onSortColumnsChange(nextSortColumns);
      } else onSortColumnsChange(nextSortColumn ? [nextSortColumn] : []);
    }
  }
  function handleFocus(event) {
    onFocus?.(event);
    if (shouldFocusGrid) selectCell({
      idx: 0,
      rowIdx
    });
  }
  function onMouseDown() {
    selectCell({
      idx: column.idx,
      rowIdx
    });
  }
  function onClick(event) {
    if (sortable) onSort(event.ctrlKey || event.metaKey);
  }
  function onKeyDown(event) {
    const { key } = event;
    if (sortable && (key === " " || key === "Enter")) {
      event.preventDefault();
      onSort(event.ctrlKey || event.metaKey);
    } else if (resizable && isCtrlKeyHeldDown(event) && (key === "ArrowLeft" || key === "ArrowRight")) {
      event.stopPropagation();
      const { width } = event.currentTarget.getBoundingClientRect();
      const { leftKey } = getLeftRightKey(direction);
      const newWidth = clampColumnWidth(width + (key === leftKey ? -10 : 10), column);
      if (newWidth !== width) onColumnResize(column, newWidth);
    }
  }
  function onDragStart(event) {
    (0, import_react_dom.flushSync)(() => {
      setDraggedColumnKey(column.key);
    });
    event.dataTransfer.setDragImage(dragImageRef.current, 0, 0);
    event.dataTransfer.dropEffect = "move";
  }
  function onDragEnd() {
    setDraggedColumnKey(void 0);
  }
  function onDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }
  function onDrop(event) {
    setIsOver(false);
    event.preventDefault();
    onColumnsReorder?.(draggedColumnKey, column.key);
  }
  function onDragEnter(event) {
    if (isEventPertinent(event)) setIsOver(true);
  }
  function onDragLeave(event) {
    if (isEventPertinent(event)) setIsOver(false);
  }
  let dragTargetProps;
  let dropTargetProps;
  if (draggable) {
    dragTargetProps = {
      draggable: true,
      onDragStart,
      onDragEnd
    };
    if (draggedColumnKey !== void 0 && draggedColumnKey !== column.key) dropTargetProps = {
      onDragOver,
      onDragEnter,
      onDragLeave,
      onDrop
    };
  }
  const style = {
    ...getHeaderCellStyle(column, rowIdx, rowSpan),
    ...getCellStyle(column, colSpan)
  };
  const content = column.renderHeaderCell({
    column,
    sortDirection,
    priority,
    tabIndex: childTabIndex
  });
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [isDragging && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
    ref: dragImageRef,
    style,
    className: getCellClassname(column, column.headerCellClass, dragImageClassname),
    children: content
  }), /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", {
    role: "columnheader",
    "aria-colindex": column.idx + 1,
    "aria-colspan": colSpan,
    "aria-rowspan": rowSpan,
    "aria-selected": isCellSelected,
    "aria-sort": ariaSort,
    tabIndex,
    className,
    style,
    onMouseDown,
    onFocus: handleFocus,
    onClick,
    onKeyDown,
    ...dragTargetProps,
    ...dropTargetProps,
    children: [content, resizable && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ResizeHandle, {
      direction,
      column,
      onColumnResize,
      onColumnResizeEnd
    })]
  })] });
}
function ResizeHandle({ direction, column, onColumnResize, onColumnResizeEnd }) {
  const resizingOffsetRef = (0, import_react5.useRef)(void 0);
  const isRtl = direction === "rtl";
  function onPointerDown(event) {
    if (event.pointerType === "mouse" && event.buttons !== 1) return;
    event.preventDefault();
    const { currentTarget, pointerId } = event;
    currentTarget.setPointerCapture(pointerId);
    const { right, left } = currentTarget.parentElement.getBoundingClientRect();
    resizingOffsetRef.current = isRtl ? event.clientX - left : right - event.clientX;
  }
  function onPointerMove(event) {
    const offset = resizingOffsetRef.current;
    if (offset === void 0) return;
    const { width, right, left } = event.currentTarget.parentElement.getBoundingClientRect();
    let newWidth = isRtl ? right + offset - event.clientX : event.clientX + offset - left;
    newWidth = clampColumnWidth(newWidth, column);
    if (width > 0 && newWidth !== width) onColumnResize(column, newWidth);
  }
  function onLostPointerCapture() {
    onColumnResizeEnd();
    resizingOffsetRef.current = void 0;
  }
  function onDoubleClick() {
    onColumnResize(column, "max-content");
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
    "aria-hidden": true,
    className: resizeHandleClassname,
    onClick: stopPropagation,
    onPointerDown,
    onPointerMove,
    onLostPointerCapture,
    onDoubleClick
  });
}
function isEventPertinent(event) {
  const relatedTarget = event.relatedTarget;
  return !event.currentTarget.contains(relatedTarget);
}
var row = "rdg-7-0-0-beta-58-3c083f1b";
var rowClassname = `rdg-row ${row}`;
var rowSelected = "rdg-7-0-0-beta-58-3fe773c3";
var rowSelectedClassname = "rdg-row-selected";
var rowSelectedWithFrozenCell = "rdg-7-0-0-beta-58-97ce3fde";
var topSummaryRowClassname = "rdg-top-summary-row";
var bottomSummaryRowClassname = "rdg-bottom-summary-row";
var headerRow = "rdg-7-0-0-beta-58-0dbd5994";
var headerRowClassname = `rdg-header-row ${headerRow}`;
function HeaderRow({ headerRowClass, rowIdx, columns, onColumnResize, onColumnResizeEnd, onColumnsReorder, sortColumns, onSortColumnsChange, lastFrozenColumnIndex, selectedCellIdx, selectCell, shouldFocusGrid, direction }) {
  const [draggedColumnKey, setDraggedColumnKey] = (0, import_react5.useState)();
  const cells = [];
  for (let index = 0; index < columns.length; index++) {
    const column = columns[index];
    const colSpan = getColSpan(column, lastFrozenColumnIndex, { type: "HEADER" });
    if (colSpan !== void 0) index += colSpan - 1;
    cells.push(/* @__PURE__ */ (0, import_jsx_runtime6.jsx)(HeaderCell, {
      column,
      colSpan,
      rowIdx,
      isCellSelected: selectedCellIdx === column.idx,
      onColumnResize,
      onColumnResizeEnd,
      onColumnsReorder,
      onSortColumnsChange,
      sortColumns,
      selectCell,
      shouldFocusGrid: shouldFocusGrid && index === 0,
      direction,
      draggedColumnKey,
      setDraggedColumnKey
    }, column.key));
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
    role: "row",
    "aria-rowindex": rowIdx,
    className: classnames(headerRowClassname, { [rowSelectedClassname]: selectedCellIdx === -1 }, headerRowClass),
    children: cells
  });
}
var HeaderRow_default = (0, import_react5.memo)(HeaderRow);
function GroupedColumnHeaderRow({ rowIdx, level, columns, selectedCellIdx, selectCell }) {
  const cells = [];
  const renderedParents = /* @__PURE__ */ new Set();
  for (const column of columns) {
    let { parent } = column;
    if (parent === void 0) continue;
    while (parent.level > level) {
      if (parent.parent === void 0) break;
      parent = parent.parent;
    }
    if (parent.level === level && !renderedParents.has(parent)) {
      renderedParents.add(parent);
      const { idx } = parent;
      cells.push(/* @__PURE__ */ (0, import_jsx_runtime6.jsx)(GroupedColumnHeaderCell, {
        column: parent,
        rowIdx,
        isCellSelected: selectedCellIdx === idx,
        selectCell
      }, idx));
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
    role: "row",
    "aria-rowindex": rowIdx,
    className: headerRowClassname,
    children: cells
  });
}
var GroupedColumnHeaderRow_default = (0, import_react5.memo)(GroupedColumnHeaderRow);
function Row({ className, rowIdx, gridRowStart, selectedCellIdx, isRowSelectionDisabled, isRowSelected, draggedOverCellIdx, lastFrozenColumnIndex, row: row$1, viewportColumns, selectedCellEditor, onCellMouseDown, onCellClick, onCellDoubleClick, onCellContextMenu, rowClass, onRowChange, selectCell, style, ...props }) {
  const renderCell = useDefaultRenderers().renderCell;
  const handleRowChange = useLatestFunc((column, newRow) => {
    onRowChange(column, rowIdx, newRow);
  });
  className = classnames(rowClassname, `rdg-row-${rowIdx % 2 === 0 ? "even" : "odd"}`, { [rowSelectedClassname]: selectedCellIdx === -1 }, rowClass?.(row$1, rowIdx), className);
  const cells = [];
  for (let index = 0; index < viewportColumns.length; index++) {
    const column = viewportColumns[index];
    const { idx } = column;
    const colSpan = getColSpan(column, lastFrozenColumnIndex, {
      type: "ROW",
      row: row$1
    });
    if (colSpan !== void 0) index += colSpan - 1;
    const isCellSelected = selectedCellIdx === idx;
    if (isCellSelected && selectedCellEditor) cells.push(selectedCellEditor);
    else cells.push(renderCell(column.key, {
      column,
      colSpan,
      row: row$1,
      rowIdx,
      isDraggedOver: draggedOverCellIdx === idx,
      isCellSelected,
      onCellMouseDown,
      onCellClick,
      onCellDoubleClick,
      onCellContextMenu,
      onRowChange: handleRowChange,
      selectCell
    }));
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(RowSelectionContext, {
    value: (0, import_react5.useMemo)(() => ({
      isRowSelected,
      isRowSelectionDisabled
    }), [isRowSelectionDisabled, isRowSelected]),
    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
      role: "row",
      className,
      style: {
        ...getRowStyle(gridRowStart),
        ...style
      },
      ...props,
      children: cells
    })
  });
}
var RowComponent = (0, import_react5.memo)(Row);
function defaultRenderRow(key, props) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(RowComponent, { ...props }, key);
}
function ScrollToCell({ scrollToPosition: { idx, rowIdx }, gridRef, setScrollToCellPosition }) {
  const ref = (0, import_react5.useRef)(null);
  (0, import_react5.useLayoutEffect)(() => {
    scrollIntoView(ref.current, "auto");
  });
  (0, import_react5.useLayoutEffect)(() => {
    function removeScrollToCell() {
      setScrollToCellPosition(null);
    }
    const observer = new IntersectionObserver(removeScrollToCell, {
      root: gridRef.current,
      threshold: 1
    });
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [gridRef, setScrollToCellPosition]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
    ref,
    style: {
      gridColumn: idx === void 0 ? "1/-1" : idx + 1,
      gridRow: rowIdx === void 0 ? "1/-1" : rowIdx + 2
    }
  });
}
var arrowClassname = `rdg-sort-arrow rdg-7-0-0-beta-58-3d5115f3`;
function renderSortStatus({ sortDirection, priority }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [renderSortIcon({ sortDirection }), renderSortPriority({ priority })] });
}
function renderSortIcon({ sortDirection }) {
  if (sortDirection === void 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: arrowClassname,
    "aria-hidden": true,
    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: sortDirection === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0" })
  });
}
function renderSortPriority({ priority }) {
  return priority;
}
var root = "rdg-7-0-0-beta-58-ccd2e5d9";
var rootClassname = `rdg ${root}`;
var viewportDragging = "rdg-7-0-0-beta-58-e9b0e1c9";
var viewportDraggingClassname = `rdg-viewport-dragging ${viewportDragging}`;
var focusSinkClassname = "rdg-7-0-0-beta-58-dbb8b3c5";
var focusSinkHeaderAndSummaryClassname = "rdg-7-0-0-beta-58-e9f55541";
var summaryCellClassname = "rdg-7-0-0-beta-58-d907aa87";
function SummaryCell({ column, colSpan, row: row$1, rowIdx, isCellSelected, selectCell }) {
  const { tabIndex, childTabIndex, onFocus } = useRovingTabIndex(isCellSelected);
  const { summaryCellClass } = column;
  const className = getCellClassname(column, summaryCellClassname, typeof summaryCellClass === "function" ? summaryCellClass(row$1) : summaryCellClass);
  function onMouseDown() {
    selectCell({
      rowIdx,
      idx: column.idx
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
    role: "gridcell",
    "aria-colindex": column.idx + 1,
    "aria-colspan": colSpan,
    "aria-selected": isCellSelected,
    tabIndex,
    className,
    style: getCellStyle(column, colSpan),
    onMouseDown,
    onFocus,
    children: column.renderSummaryCell?.({
      column,
      row: row$1,
      tabIndex: childTabIndex
    })
  });
}
var SummaryCell_default = (0, import_react5.memo)(SummaryCell);
var summaryRow = "rdg-7-0-0-beta-58-0b90c82c";
var topSummaryRow = "rdg-7-0-0-beta-58-d0520eab";
var summaryRowClassname = `rdg-summary-row ${summaryRow}`;
function SummaryRow({ rowIdx, gridRowStart, row: row$1, viewportColumns, top, bottom, lastFrozenColumnIndex, selectedCellIdx, isTop, selectCell, "aria-rowindex": ariaRowIndex }) {
  const cells = [];
  for (let index = 0; index < viewportColumns.length; index++) {
    const column = viewportColumns[index];
    const colSpan = getColSpan(column, lastFrozenColumnIndex, {
      type: "SUMMARY",
      row: row$1
    });
    if (colSpan !== void 0) index += colSpan - 1;
    const isCellSelected = selectedCellIdx === column.idx;
    cells.push(/* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SummaryCell_default, {
      column,
      colSpan,
      row: row$1,
      rowIdx,
      isCellSelected,
      selectCell
    }, column.key));
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
    role: "row",
    "aria-rowindex": ariaRowIndex,
    className: classnames(rowClassname, `rdg-row-${rowIdx % 2 === 0 ? "even" : "odd"}`, summaryRowClassname, {
      [rowSelectedClassname]: selectedCellIdx === -1,
      [`${topSummaryRowClassname} ${topSummaryRow}`]: isTop,
      [bottomSummaryRowClassname]: !isTop
    }),
    style: {
      ...getRowStyle(gridRowStart),
      "--rdg-summary-row-top": top !== void 0 ? `${top}px` : void 0,
      "--rdg-summary-row-bottom": bottom !== void 0 ? `${bottom}px` : void 0
    },
    children: cells
  });
}
var SummaryRow_default = (0, import_react5.memo)(SummaryRow);
function DataGrid(props) {
  const { ref, columns: rawColumns, rows, topSummaryRows, bottomSummaryRows, rowKeyGetter, onRowsChange, rowHeight: rawRowHeight, headerRowHeight: rawHeaderRowHeight, summaryRowHeight: rawSummaryRowHeight, columnWidths: columnWidthsRaw, onColumnWidthsChange: onColumnWidthsChangeRaw, selectedRows, isRowSelectionDisabled, onSelectedRowsChange, sortColumns, onSortColumnsChange, defaultColumnOptions, onCellMouseDown, onCellClick, onCellDoubleClick, onCellContextMenu, onCellKeyDown, onSelectedCellChange, onScroll, onColumnResize, onColumnsReorder, onFill, onCellCopy, onCellPaste, enableVirtualization: rawEnableVirtualization, renderers, className, style, rowClass, headerRowClass, direction: rawDirection, role: rawRole, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-description": ariaDescription, "aria-describedby": ariaDescribedBy, "aria-rowcount": rawAriaRowCount, "data-testid": testId, "data-cy": dataCy } = props;
  const defaultRenderers = useDefaultRenderers();
  const role = rawRole ?? "grid";
  const rowHeight = rawRowHeight ?? 35;
  const headerRowHeight = rawHeaderRowHeight ?? (typeof rowHeight === "number" ? rowHeight : 35);
  const summaryRowHeight = rawSummaryRowHeight ?? (typeof rowHeight === "number" ? rowHeight : 35);
  const renderRow = renderers?.renderRow ?? defaultRenderers?.renderRow ?? defaultRenderRow;
  const renderCell = renderers?.renderCell ?? defaultRenderers?.renderCell ?? defaultRenderCell;
  const renderSortStatus$1 = renderers?.renderSortStatus ?? defaultRenderers?.renderSortStatus ?? renderSortStatus;
  const renderCheckbox$1 = renderers?.renderCheckbox ?? defaultRenderers?.renderCheckbox ?? renderCheckbox;
  const noRowsFallback = renderers?.noRowsFallback ?? defaultRenderers?.noRowsFallback;
  const enableVirtualization = rawEnableVirtualization ?? true;
  const direction = rawDirection ?? "ltr";
  const [scrollTop, setScrollTop] = (0, import_react5.useState)(0);
  const [scrollLeft, setScrollLeft] = (0, import_react5.useState)(0);
  const [columnWidthsInternal, setColumnWidthsInternal] = (0, import_react5.useState)(() => columnWidthsRaw ?? /* @__PURE__ */ new Map());
  const [isColumnResizing, setColumnResizing] = (0, import_react5.useState)(false);
  const [isDragging, setDragging] = (0, import_react5.useState)(false);
  const [draggedOverRowIdx, setDraggedOverRowIdx] = (0, import_react5.useState)(void 0);
  const [scrollToPosition, setScrollToPosition] = (0, import_react5.useState)(null);
  const [shouldFocusCell, setShouldFocusCell] = (0, import_react5.useState)(false);
  const [previousRowIdx, setPreviousRowIdx] = (0, import_react5.useState)(-1);
  const isColumnWidthsControlled = columnWidthsRaw != null && onColumnWidthsChangeRaw != null && !isColumnResizing;
  const columnWidths = isColumnWidthsControlled ? columnWidthsRaw : columnWidthsInternal;
  const onColumnWidthsChange = isColumnWidthsControlled ? (columnWidths$1) => {
    setColumnWidthsInternal(columnWidths$1);
    onColumnWidthsChangeRaw(columnWidths$1);
  } : setColumnWidthsInternal;
  const getColumnWidth = (0, import_react5.useCallback)((column) => {
    return columnWidths.get(column.key)?.width ?? column.width;
  }, [columnWidths]);
  const [gridRef, gridWidth, gridHeight, horizontalScrollbarHeight] = useGridDimensions();
  const { columns, colSpanColumns, lastFrozenColumnIndex, headerRowsCount, colOverscanStartIdx, colOverscanEndIdx, templateColumns, layoutCssVars, totalFrozenColumnWidth } = useCalculatedColumns({
    rawColumns,
    defaultColumnOptions,
    getColumnWidth,
    scrollLeft,
    viewportWidth: gridWidth,
    enableVirtualization
  });
  const topSummaryRowsCount = topSummaryRows?.length ?? 0;
  const bottomSummaryRowsCount = bottomSummaryRows?.length ?? 0;
  const summaryRowsCount = topSummaryRowsCount + bottomSummaryRowsCount;
  const headerAndTopSummaryRowsCount = headerRowsCount + topSummaryRowsCount;
  const groupedColumnHeaderRowsCount = headerRowsCount - 1;
  const minRowIdx = -headerAndTopSummaryRowsCount;
  const mainHeaderRowIdx = minRowIdx + groupedColumnHeaderRowsCount;
  const maxRowIdx = rows.length + bottomSummaryRowsCount - 1;
  const [selectedPosition, setSelectedPosition] = (0, import_react5.useState)(() => ({
    idx: -1,
    rowIdx: minRowIdx - 1,
    mode: "SELECT"
  }));
  const focusSinkRef = (0, import_react5.useRef)(null);
  const isTreeGrid = role === "treegrid";
  const headerRowsHeight = headerRowsCount * headerRowHeight;
  const summaryRowsHeight = summaryRowsCount * summaryRowHeight;
  const clientHeight = gridHeight - headerRowsHeight - summaryRowsHeight;
  const isSelectable = selectedRows != null && onSelectedRowsChange != null;
  const { leftKey, rightKey } = getLeftRightKey(direction);
  const ariaRowCount = rawAriaRowCount ?? headerRowsCount + rows.length + summaryRowsCount;
  const defaultGridComponents = (0, import_react5.useMemo)(() => ({
    renderCheckbox: renderCheckbox$1,
    renderSortStatus: renderSortStatus$1,
    renderCell
  }), [
    renderCheckbox$1,
    renderSortStatus$1,
    renderCell
  ]);
  const headerSelectionValue = (0, import_react5.useMemo)(() => {
    let hasSelectedRow = false;
    let hasUnselectedRow = false;
    if (rowKeyGetter != null && selectedRows != null && selectedRows.size > 0) for (const row$1 of rows) {
      if (selectedRows.has(rowKeyGetter(row$1))) hasSelectedRow = true;
      else hasUnselectedRow = true;
      if (hasSelectedRow && hasUnselectedRow) break;
    }
    return {
      isRowSelected: hasSelectedRow && !hasUnselectedRow,
      isIndeterminate: hasSelectedRow && hasUnselectedRow
    };
  }, [
    rows,
    selectedRows,
    rowKeyGetter
  ]);
  const { rowOverscanStartIdx, rowOverscanEndIdx, totalRowHeight, gridTemplateRows, getRowTop, getRowHeight, findRowIdx } = useViewportRows({
    rows,
    rowHeight,
    clientHeight,
    scrollTop,
    enableVirtualization
  });
  const viewportColumns = useViewportColumns({
    columns,
    colSpanColumns,
    colOverscanStartIdx,
    colOverscanEndIdx,
    lastFrozenColumnIndex,
    rowOverscanStartIdx,
    rowOverscanEndIdx,
    rows,
    topSummaryRows,
    bottomSummaryRows
  });
  const { gridTemplateColumns, handleColumnResize } = useColumnWidths(columns, viewportColumns, templateColumns, gridRef, gridWidth, columnWidths, onColumnWidthsChange, onColumnResize, setColumnResizing);
  const minColIdx = isTreeGrid ? -1 : 0;
  const maxColIdx = columns.length - 1;
  const selectedCellIsWithinSelectionBounds = isCellWithinSelectionBounds(selectedPosition);
  const selectedCellIsWithinViewportBounds = isCellWithinViewportBounds(selectedPosition);
  const scrollHeight = headerRowHeight + totalRowHeight + summaryRowsHeight + horizontalScrollbarHeight;
  const handleColumnResizeLatest = useLatestFunc(handleColumnResize);
  const handleColumnResizeEndLatest = useLatestFunc(handleColumnResizeEnd);
  const onColumnsReorderLastest = useLatestFunc(onColumnsReorder);
  const onSortColumnsChangeLatest = useLatestFunc(onSortColumnsChange);
  const onCellMouseDownLatest = useLatestFunc(onCellMouseDown);
  const onCellClickLatest = useLatestFunc(onCellClick);
  const onCellDoubleClickLatest = useLatestFunc(onCellDoubleClick);
  const onCellContextMenuLatest = useLatestFunc(onCellContextMenu);
  const selectHeaderRowLatest = useLatestFunc(selectHeaderRow);
  const selectRowLatest = useLatestFunc(selectRow);
  const handleFormatterRowChangeLatest = useLatestFunc(updateRow);
  const selectCellLatest = useLatestFunc(selectCell);
  const selectHeaderCellLatest = useLatestFunc(selectHeaderCell);
  const focusCell = (0, import_react5.useCallback)((shouldScroll = true) => {
    const cell$1 = getCellToScroll(gridRef.current);
    if (cell$1 === null) return;
    if (shouldScroll) scrollIntoView(cell$1);
    cell$1.focus({ preventScroll: true });
  }, [gridRef]);
  (0, import_react5.useLayoutEffect)(() => {
    if (shouldFocusCell) {
      if (focusSinkRef.current !== null && selectedPosition.idx === -1) {
        focusSinkRef.current.focus({ preventScroll: true });
        scrollIntoView(focusSinkRef.current);
      } else focusCell();
      setShouldFocusCell(false);
    }
  }, [
    shouldFocusCell,
    focusCell,
    selectedPosition.idx
  ]);
  (0, import_react5.useImperativeHandle)(ref, () => ({
    element: gridRef.current,
    scrollToCell({ idx, rowIdx }) {
      const scrollToIdx = idx !== void 0 && idx > lastFrozenColumnIndex && idx < columns.length ? idx : void 0;
      const scrollToRowIdx = rowIdx !== void 0 && isRowIdxWithinViewportBounds(rowIdx) ? rowIdx : void 0;
      if (scrollToIdx !== void 0 || scrollToRowIdx !== void 0) setScrollToPosition({
        idx: scrollToIdx,
        rowIdx: scrollToRowIdx
      });
    },
    selectCell
  }));
  function selectHeaderRow(args) {
    if (!onSelectedRowsChange) return;
    assertIsValidKeyGetter(rowKeyGetter);
    const newSelectedRows = new Set(selectedRows);
    for (const row$1 of rows) {
      if (isRowSelectionDisabled?.(row$1) === true) continue;
      const rowKey = rowKeyGetter(row$1);
      if (args.checked) newSelectedRows.add(rowKey);
      else newSelectedRows.delete(rowKey);
    }
    onSelectedRowsChange(newSelectedRows);
  }
  function selectRow(args) {
    if (!onSelectedRowsChange) return;
    assertIsValidKeyGetter(rowKeyGetter);
    const { row: row$1, checked, isShiftClick } = args;
    if (isRowSelectionDisabled?.(row$1) === true) return;
    const newSelectedRows = new Set(selectedRows);
    const rowKey = rowKeyGetter(row$1);
    const rowIdx = rows.indexOf(row$1);
    setPreviousRowIdx(rowIdx);
    if (checked) newSelectedRows.add(rowKey);
    else newSelectedRows.delete(rowKey);
    if (isShiftClick && previousRowIdx !== -1 && previousRowIdx !== rowIdx && previousRowIdx < rows.length) {
      const step = sign(rowIdx - previousRowIdx);
      for (let i = previousRowIdx + step; i !== rowIdx; i += step) {
        const row$2 = rows[i];
        if (isRowSelectionDisabled?.(row$2) === true) continue;
        if (checked) newSelectedRows.add(rowKeyGetter(row$2));
        else newSelectedRows.delete(rowKeyGetter(row$2));
      }
    }
    onSelectedRowsChange(newSelectedRows);
  }
  function handleKeyDown(event) {
    const { idx, rowIdx, mode } = selectedPosition;
    if (mode === "EDIT") return;
    if (onCellKeyDown && isRowIdxWithinViewportBounds(rowIdx)) {
      const row$1 = rows[rowIdx];
      const cellEvent = createCellEvent(event);
      onCellKeyDown({
        mode: "SELECT",
        row: row$1,
        column: columns[idx],
        rowIdx,
        selectCell
      }, cellEvent);
      if (cellEvent.isGridDefaultPrevented()) return;
    }
    if (!(event.target instanceof Element)) return;
    const isCellEvent = event.target.closest(".rdg-cell") !== null;
    const isRowEvent = isTreeGrid && event.target === focusSinkRef.current;
    if (!isCellEvent && !isRowEvent) return;
    switch (event.key) {
      case "ArrowUp":
      case "ArrowDown":
      case "ArrowLeft":
      case "ArrowRight":
      case "Tab":
      case "Home":
      case "End":
      case "PageUp":
      case "PageDown":
        navigate(event);
        break;
      default:
        handleCellInput(event);
        break;
    }
  }
  function handleScroll(event) {
    const { scrollTop: scrollTop$1, scrollLeft: scrollLeft$1 } = event.currentTarget;
    (0, import_react_dom.flushSync)(() => {
      setScrollTop(scrollTop$1);
      setScrollLeft(abs(scrollLeft$1));
    });
    onScroll?.(event);
  }
  function updateRow(column, rowIdx, row$1) {
    if (typeof onRowsChange !== "function") return;
    if (row$1 === rows[rowIdx]) return;
    onRowsChange(rows.with(rowIdx, row$1), {
      indexes: [rowIdx],
      column
    });
  }
  function commitEditorChanges() {
    if (selectedPosition.mode !== "EDIT") return;
    updateRow(columns[selectedPosition.idx], selectedPosition.rowIdx, selectedPosition.row);
  }
  function handleCellCopy(event) {
    if (!selectedCellIsWithinViewportBounds) return;
    const { idx, rowIdx } = selectedPosition;
    onCellCopy?.({
      row: rows[rowIdx],
      column: columns[idx]
    }, event);
  }
  function handleCellPaste(event) {
    if (!onCellPaste || !onRowsChange || !isCellEditable(selectedPosition)) return;
    const { idx, rowIdx } = selectedPosition;
    const column = columns[idx];
    updateRow(column, rowIdx, onCellPaste({
      row: rows[rowIdx],
      column
    }, event));
  }
  function handleCellInput(event) {
    if (!selectedCellIsWithinViewportBounds) return;
    const row$1 = rows[selectedPosition.rowIdx];
    const { key, shiftKey } = event;
    if (isSelectable && shiftKey && key === " ") {
      assertIsValidKeyGetter(rowKeyGetter);
      const rowKey = rowKeyGetter(row$1);
      selectRow({
        row: row$1,
        checked: !selectedRows.has(rowKey),
        isShiftClick: false
      });
      event.preventDefault();
      return;
    }
    if (isCellEditable(selectedPosition) && isDefaultCellInput(event, onCellPaste != null)) setSelectedPosition(({ idx, rowIdx }) => ({
      idx,
      rowIdx,
      mode: "EDIT",
      row: row$1,
      originalRow: row$1
    }));
  }
  function handleColumnResizeEnd() {
    if (isColumnResizing) {
      onColumnWidthsChangeRaw?.(columnWidths);
      setColumnResizing(false);
    }
  }
  function handleDragHandlePointerDown(event) {
    event.preventDefault();
    if (event.pointerType === "mouse" && event.buttons !== 1) return;
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }
  function handleDragHandlePointerMove(event) {
    const gridEl = gridRef.current;
    const overRowIdx = findRowIdx(scrollTop - (headerRowsHeight + topSummaryRowsCount * summaryRowHeight) + event.clientY - gridEl.getBoundingClientRect().top);
    setDraggedOverRowIdx(overRowIdx);
    const ariaRowIndex = headerAndTopSummaryRowsCount + overRowIdx + 1;
    scrollIntoView(gridEl.querySelector(`:scope > [aria-rowindex="${ariaRowIndex}"] > [aria-colindex="${selectedPosition.idx + 1}"]`));
  }
  function handleDragHandleLostPointerCapture() {
    setDragging(false);
    if (draggedOverRowIdx === void 0) return;
    const { rowIdx } = selectedPosition;
    const [startRowIndex, endRowIndex] = rowIdx < draggedOverRowIdx ? [rowIdx + 1, draggedOverRowIdx + 1] : [draggedOverRowIdx, rowIdx];
    updateRows(startRowIndex, endRowIndex);
    setDraggedOverRowIdx(void 0);
  }
  function handleDragHandleClick() {
    focusCell(false);
  }
  function handleDragHandleDoubleClick(event) {
    event.stopPropagation();
    updateRows(selectedPosition.rowIdx + 1, rows.length);
  }
  function updateRows(startRowIdx, endRowIdx) {
    if (onRowsChange == null) return;
    const { rowIdx, idx } = selectedPosition;
    const column = columns[idx];
    const sourceRow = rows[rowIdx];
    const updatedRows = [...rows];
    const indexes = [];
    for (let i = startRowIdx; i < endRowIdx; i++) if (isCellEditable({
      rowIdx: i,
      idx
    })) {
      const updatedRow = onFill({
        columnKey: column.key,
        sourceRow,
        targetRow: rows[i]
      });
      if (updatedRow !== rows[i]) {
        updatedRows[i] = updatedRow;
        indexes.push(i);
      }
    }
    if (indexes.length > 0) onRowsChange(updatedRows, {
      indexes,
      column
    });
  }
  function isColIdxWithinSelectionBounds(idx) {
    return idx >= minColIdx && idx <= maxColIdx;
  }
  function isRowIdxWithinViewportBounds(rowIdx) {
    return rowIdx >= 0 && rowIdx < rows.length;
  }
  function isCellWithinSelectionBounds({ idx, rowIdx }) {
    return rowIdx >= minRowIdx && rowIdx <= maxRowIdx && isColIdxWithinSelectionBounds(idx);
  }
  function isCellWithinEditBounds({ idx, rowIdx }) {
    return isRowIdxWithinViewportBounds(rowIdx) && idx >= 0 && idx <= maxColIdx;
  }
  function isCellWithinViewportBounds({ idx, rowIdx }) {
    return isRowIdxWithinViewportBounds(rowIdx) && isColIdxWithinSelectionBounds(idx);
  }
  function isCellEditable(position) {
    return isCellWithinEditBounds(position) && isSelectedCellEditable({
      columns,
      rows,
      selectedPosition: position
    });
  }
  function selectCell(position, options) {
    if (!isCellWithinSelectionBounds(position)) return;
    commitEditorChanges();
    const samePosition = isSamePosition(selectedPosition, position);
    if (options?.enableEditor && isCellEditable(position)) {
      const row$1 = rows[position.rowIdx];
      setSelectedPosition({
        ...position,
        mode: "EDIT",
        row: row$1,
        originalRow: row$1
      });
    } else if (samePosition) scrollIntoView(getCellToScroll(gridRef.current));
    else {
      setShouldFocusCell(options?.shouldFocusCell === true);
      setSelectedPosition({
        ...position,
        mode: "SELECT"
      });
    }
    if (onSelectedCellChange && !samePosition) onSelectedCellChange({
      rowIdx: position.rowIdx,
      row: isRowIdxWithinViewportBounds(position.rowIdx) ? rows[position.rowIdx] : void 0,
      column: columns[position.idx]
    });
  }
  function selectHeaderCell({ idx, rowIdx }) {
    selectCell({
      rowIdx: minRowIdx + rowIdx - 1,
      idx
    });
  }
  function getNextPosition(key, ctrlKey, shiftKey) {
    const { idx, rowIdx } = selectedPosition;
    const isRowSelected = selectedCellIsWithinSelectionBounds && idx === -1;
    switch (key) {
      case "ArrowUp":
        return {
          idx,
          rowIdx: rowIdx - 1
        };
      case "ArrowDown":
        return {
          idx,
          rowIdx: rowIdx + 1
        };
      case leftKey:
        return {
          idx: idx - 1,
          rowIdx
        };
      case rightKey:
        return {
          idx: idx + 1,
          rowIdx
        };
      case "Tab":
        return {
          idx: idx + (shiftKey ? -1 : 1),
          rowIdx
        };
      case "Home":
        if (isRowSelected) return {
          idx,
          rowIdx: minRowIdx
        };
        return {
          idx: 0,
          rowIdx: ctrlKey ? minRowIdx : rowIdx
        };
      case "End":
        if (isRowSelected) return {
          idx,
          rowIdx: maxRowIdx
        };
        return {
          idx: maxColIdx,
          rowIdx: ctrlKey ? maxRowIdx : rowIdx
        };
      case "PageUp": {
        if (selectedPosition.rowIdx === minRowIdx) return selectedPosition;
        const nextRowY = getRowTop(rowIdx) + getRowHeight(rowIdx) - clientHeight;
        return {
          idx,
          rowIdx: nextRowY > 0 ? findRowIdx(nextRowY) : 0
        };
      }
      case "PageDown": {
        if (selectedPosition.rowIdx >= rows.length) return selectedPosition;
        const nextRowY = getRowTop(rowIdx) + clientHeight;
        return {
          idx,
          rowIdx: nextRowY < totalRowHeight ? findRowIdx(nextRowY) : rows.length - 1
        };
      }
      default:
        return selectedPosition;
    }
  }
  function navigate(event) {
    const { key, shiftKey } = event;
    let cellNavigationMode = "NONE";
    if (key === "Tab") {
      if (canExitGrid({
        shiftKey,
        maxColIdx,
        minRowIdx,
        maxRowIdx,
        selectedPosition
      })) {
        commitEditorChanges();
        return;
      }
      cellNavigationMode = "CHANGE_ROW";
    }
    event.preventDefault();
    const nextPosition = getNextPosition(key, isCtrlKeyHeldDown(event), shiftKey);
    if (isSamePosition(selectedPosition, nextPosition)) return;
    selectCell(getNextSelectedCellPosition({
      moveUp: key === "ArrowUp",
      moveNext: key === rightKey || key === "Tab" && !shiftKey,
      columns,
      colSpanColumns,
      rows,
      topSummaryRows,
      bottomSummaryRows,
      minRowIdx,
      mainHeaderRowIdx,
      maxRowIdx,
      lastFrozenColumnIndex,
      cellNavigationMode,
      currentPosition: selectedPosition,
      nextPosition,
      isCellWithinBounds: isCellWithinSelectionBounds
    }), { shouldFocusCell: true });
  }
  function getDraggedOverCellIdx(currentRowIdx) {
    if (draggedOverRowIdx === void 0) return;
    const { rowIdx } = selectedPosition;
    return (rowIdx < draggedOverRowIdx ? rowIdx < currentRowIdx && currentRowIdx <= draggedOverRowIdx : rowIdx > currentRowIdx && currentRowIdx >= draggedOverRowIdx) ? selectedPosition.idx : void 0;
  }
  function getDragHandle() {
    if (onFill == null || selectedPosition.mode === "EDIT" || !isCellWithinViewportBounds(selectedPosition)) return;
    const { idx, rowIdx } = selectedPosition;
    const column = columns[idx];
    if (column.renderEditCell == null || column.editable === false) return;
    const isLastRow = rowIdx === maxRowIdx;
    const columnWidth = getColumnWidth(column);
    const colSpan = column.colSpan?.({
      type: "ROW",
      row: rows[rowIdx]
    }) ?? 1;
    const { insetInlineStart, ...style$1 } = getCellStyle(column, colSpan);
    const marginEnd = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)";
    const isLastColumn = column.idx + colSpan - 1 === maxColIdx;
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
      style: {
        ...style$1,
        gridRowStart: headerAndTopSummaryRowsCount + rowIdx + 1,
        marginInlineEnd: isLastColumn ? void 0 : marginEnd,
        marginBlockEnd: isLastRow ? void 0 : marginEnd,
        insetInlineStart: insetInlineStart ? `calc(${insetInlineStart} + ${columnWidth}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
      },
      className: classnames(cellDragHandleClassname, column.frozen && cellDragHandleFrozenClassname),
      onPointerDown: handleDragHandlePointerDown,
      onPointerMove: isDragging ? handleDragHandlePointerMove : void 0,
      onLostPointerCapture: isDragging ? handleDragHandleLostPointerCapture : void 0,
      onClick: handleDragHandleClick,
      onDoubleClick: handleDragHandleDoubleClick
    });
  }
  function getCellEditor(rowIdx) {
    if (!isCellWithinViewportBounds(selectedPosition) || selectedPosition.rowIdx !== rowIdx || selectedPosition.mode === "SELECT") return;
    const { idx, row: row$1 } = selectedPosition;
    const column = columns[idx];
    const colSpan = getColSpan(column, lastFrozenColumnIndex, {
      type: "ROW",
      row: row$1
    });
    const closeOnExternalRowChange = column.editorOptions?.closeOnExternalRowChange ?? true;
    const closeEditor = (shouldFocusCell$1) => {
      setShouldFocusCell(shouldFocusCell$1);
      setSelectedPosition(({ idx: idx$1, rowIdx: rowIdx$1 }) => ({
        idx: idx$1,
        rowIdx: rowIdx$1,
        mode: "SELECT"
      }));
    };
    const onRowChange = (row$2, commitChanges, shouldFocusCell$1) => {
      if (commitChanges) (0, import_react_dom.flushSync)(() => {
        updateRow(column, selectedPosition.rowIdx, row$2);
        closeEditor(shouldFocusCell$1);
      });
      else setSelectedPosition((position) => ({
        ...position,
        row: row$2
      }));
    };
    if (closeOnExternalRowChange && rows[selectedPosition.rowIdx] !== selectedPosition.originalRow) closeEditor(false);
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(EditCell, {
      column,
      colSpan,
      row: row$1,
      rowIdx,
      onRowChange,
      closeEditor,
      onKeyDown: onCellKeyDown,
      navigate
    }, column.key);
  }
  function getRowViewportColumns(rowIdx) {
    const selectedColumn = selectedPosition.idx === -1 ? void 0 : columns[selectedPosition.idx];
    if (selectedColumn !== void 0 && selectedPosition.rowIdx === rowIdx && !viewportColumns.includes(selectedColumn)) return selectedPosition.idx > colOverscanEndIdx ? [...viewportColumns, selectedColumn] : [
      ...viewportColumns.slice(0, lastFrozenColumnIndex + 1),
      selectedColumn,
      ...viewportColumns.slice(lastFrozenColumnIndex + 1)
    ];
    return viewportColumns;
  }
  function getViewportRows() {
    const rowElements = [];
    const { idx: selectedIdx, rowIdx: selectedRowIdx } = selectedPosition;
    const startRowIdx = selectedCellIsWithinViewportBounds && selectedRowIdx < rowOverscanStartIdx ? rowOverscanStartIdx - 1 : rowOverscanStartIdx;
    const endRowIdx = selectedCellIsWithinViewportBounds && selectedRowIdx > rowOverscanEndIdx ? rowOverscanEndIdx + 1 : rowOverscanEndIdx;
    for (let viewportRowIdx = startRowIdx; viewportRowIdx <= endRowIdx; viewportRowIdx++) {
      const isRowOutsideViewport = viewportRowIdx === rowOverscanStartIdx - 1 || viewportRowIdx === rowOverscanEndIdx + 1;
      const rowIdx = isRowOutsideViewport ? selectedRowIdx : viewportRowIdx;
      let rowColumns = viewportColumns;
      const selectedColumn = selectedIdx === -1 ? void 0 : columns[selectedIdx];
      if (selectedColumn !== void 0) if (isRowOutsideViewport) rowColumns = [selectedColumn];
      else rowColumns = getRowViewportColumns(rowIdx);
      const row$1 = rows[rowIdx];
      const gridRowStart = headerAndTopSummaryRowsCount + rowIdx + 1;
      let key = rowIdx;
      let isRowSelected = false;
      if (typeof rowKeyGetter === "function") {
        key = rowKeyGetter(row$1);
        isRowSelected = selectedRows?.has(key) ?? false;
      }
      rowElements.push(renderRow(key, {
        "aria-rowindex": headerAndTopSummaryRowsCount + rowIdx + 1,
        "aria-selected": isSelectable ? isRowSelected : void 0,
        rowIdx,
        row: row$1,
        viewportColumns: rowColumns,
        isRowSelectionDisabled: isRowSelectionDisabled?.(row$1) ?? false,
        isRowSelected,
        onCellMouseDown: onCellMouseDownLatest,
        onCellClick: onCellClickLatest,
        onCellDoubleClick: onCellDoubleClickLatest,
        onCellContextMenu: onCellContextMenuLatest,
        rowClass,
        gridRowStart,
        selectedCellIdx: selectedRowIdx === rowIdx ? selectedIdx : void 0,
        draggedOverCellIdx: getDraggedOverCellIdx(rowIdx),
        lastFrozenColumnIndex,
        onRowChange: handleFormatterRowChangeLatest,
        selectCell: selectCellLatest,
        selectedCellEditor: getCellEditor(rowIdx)
      }));
    }
    return rowElements;
  }
  if (selectedPosition.idx > maxColIdx || selectedPosition.rowIdx > maxRowIdx) {
    setSelectedPosition({
      idx: -1,
      rowIdx: minRowIdx - 1,
      mode: "SELECT"
    });
    setDraggedOverRowIdx(void 0);
  }
  if (isColumnWidthsControlled && columnWidthsInternal !== columnWidthsRaw) setColumnWidthsInternal(columnWidthsRaw);
  let templateRows = `repeat(${headerRowsCount}, ${headerRowHeight}px)`;
  if (topSummaryRowsCount > 0) templateRows += ` repeat(${topSummaryRowsCount}, ${summaryRowHeight}px)`;
  if (rows.length > 0) templateRows += gridTemplateRows;
  if (bottomSummaryRowsCount > 0) templateRows += ` repeat(${bottomSummaryRowsCount}, ${summaryRowHeight}px)`;
  const isGroupRowFocused = selectedPosition.idx === -1 && selectedPosition.rowIdx !== minRowIdx - 1;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", {
    role,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-description": ariaDescription,
    "aria-describedby": ariaDescribedBy,
    "aria-multiselectable": isSelectable ? true : void 0,
    "aria-colcount": columns.length,
    "aria-rowcount": ariaRowCount,
    tabIndex: -1,
    className: classnames(rootClassname, { [viewportDraggingClassname]: isDragging }, className),
    style: {
      ...style,
      scrollPaddingInlineStart: selectedPosition.idx > lastFrozenColumnIndex || scrollToPosition?.idx !== void 0 ? `${totalFrozenColumnWidth}px` : void 0,
      scrollPaddingBlock: isRowIdxWithinViewportBounds(selectedPosition.rowIdx) || scrollToPosition?.rowIdx !== void 0 ? `${headerRowsHeight + topSummaryRowsCount * summaryRowHeight}px ${bottomSummaryRowsCount * summaryRowHeight}px` : void 0,
      gridTemplateColumns,
      gridTemplateRows: templateRows,
      "--rdg-header-row-height": `${headerRowHeight}px`,
      "--rdg-scroll-height": `${scrollHeight}px`,
      ...layoutCssVars
    },
    dir: direction,
    ref: gridRef,
    onScroll: handleScroll,
    onKeyDown: handleKeyDown,
    onCopy: handleCellCopy,
    onPaste: handleCellPaste,
    "data-testid": testId,
    "data-cy": dataCy,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(DataGridDefaultRenderersContext, {
        value: defaultGridComponents,
        children: [/* @__PURE__ */ (0, import_jsx_runtime6.jsx)(HeaderRowSelectionChangeContext, {
          value: selectHeaderRowLatest,
          children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(HeaderRowSelectionContext, {
            value: headerSelectionValue,
            children: [Array.from({ length: groupedColumnHeaderRowsCount }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(GroupedColumnHeaderRow_default, {
              rowIdx: index + 1,
              level: -groupedColumnHeaderRowsCount + index,
              columns: getRowViewportColumns(minRowIdx + index),
              selectedCellIdx: selectedPosition.rowIdx === minRowIdx + index ? selectedPosition.idx : void 0,
              selectCell: selectHeaderCellLatest
            }, index)), /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(HeaderRow_default, {
              headerRowClass,
              rowIdx: headerRowsCount,
              columns: getRowViewportColumns(mainHeaderRowIdx),
              onColumnResize: handleColumnResizeLatest,
              onColumnResizeEnd: handleColumnResizeEndLatest,
              onColumnsReorder: onColumnsReorderLastest,
              sortColumns,
              onSortColumnsChange: onSortColumnsChangeLatest,
              lastFrozenColumnIndex,
              selectedCellIdx: selectedPosition.rowIdx === mainHeaderRowIdx ? selectedPosition.idx : void 0,
              selectCell: selectHeaderCellLatest,
              shouldFocusGrid: !selectedCellIsWithinSelectionBounds,
              direction
            })]
          })
        }), rows.length === 0 && noRowsFallback ? noRowsFallback : /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
          topSummaryRows?.map((row$1, rowIdx) => {
            const gridRowStart = headerRowsCount + 1 + rowIdx;
            const summaryRowIdx = mainHeaderRowIdx + 1 + rowIdx;
            const isSummaryRowSelected = selectedPosition.rowIdx === summaryRowIdx;
            const top = headerRowsHeight + summaryRowHeight * rowIdx;
            return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SummaryRow_default, {
              "aria-rowindex": gridRowStart,
              rowIdx: summaryRowIdx,
              gridRowStart,
              row: row$1,
              top,
              bottom: void 0,
              viewportColumns: getRowViewportColumns(summaryRowIdx),
              lastFrozenColumnIndex,
              selectedCellIdx: isSummaryRowSelected ? selectedPosition.idx : void 0,
              isTop: true,
              selectCell: selectCellLatest
            }, rowIdx);
          }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(RowSelectionChangeContext, {
            value: selectRowLatest,
            children: getViewportRows()
          }),
          bottomSummaryRows?.map((row$1, rowIdx) => {
            const gridRowStart = headerAndTopSummaryRowsCount + rows.length + rowIdx + 1;
            const summaryRowIdx = rows.length + rowIdx;
            const isSummaryRowSelected = selectedPosition.rowIdx === summaryRowIdx;
            const top = clientHeight > totalRowHeight ? gridHeight - summaryRowHeight * (bottomSummaryRows.length - rowIdx) : void 0;
            const bottom = top === void 0 ? summaryRowHeight * (bottomSummaryRows.length - 1 - rowIdx) : void 0;
            return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SummaryRow_default, {
              "aria-rowindex": ariaRowCount - bottomSummaryRowsCount + rowIdx + 1,
              rowIdx: summaryRowIdx,
              gridRowStart,
              row: row$1,
              top,
              bottom,
              viewportColumns: getRowViewportColumns(summaryRowIdx),
              lastFrozenColumnIndex,
              selectedCellIdx: isSummaryRowSelected ? selectedPosition.idx : void 0,
              isTop: false,
              selectCell: selectCellLatest
            }, rowIdx);
          })
        ] })]
      }),
      getDragHandle(),
      renderMeasuringCells(viewportColumns),
      isTreeGrid && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
        ref: focusSinkRef,
        tabIndex: isGroupRowFocused ? 0 : -1,
        className: classnames(focusSinkClassname, {
          [focusSinkHeaderAndSummaryClassname]: !isRowIdxWithinViewportBounds(selectedPosition.rowIdx),
          [rowSelected]: isGroupRowFocused,
          [rowSelectedWithFrozenCell]: isGroupRowFocused && lastFrozenColumnIndex !== -1
        }),
        style: { gridRowStart: selectedPosition.rowIdx + headerAndTopSummaryRowsCount + 1 }
      }),
      scrollToPosition !== null && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ScrollToCell, {
        scrollToPosition,
        setScrollToCellPosition: setScrollToPosition,
        gridRef
      })
    ]
  });
}
function getCellToScroll(gridEl) {
  return gridEl.querySelector(':scope > [role="row"] > [tabindex="0"]');
}
function isSamePosition(p1, p2) {
  return p1.idx === p2.idx && p1.rowIdx === p2.rowIdx;
}
function GroupCell({ id, groupKey, childRows, isExpanded, isCellSelected, column, row: row$1, groupColumnIndex, isGroupByColumn, toggleGroup: toggleGroupWrapper }) {
  const { tabIndex, childTabIndex, onFocus } = useRovingTabIndex(isCellSelected);
  function toggleGroup() {
    toggleGroupWrapper(id);
  }
  const isLevelMatching = isGroupByColumn && groupColumnIndex === column.idx;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
    role: "gridcell",
    "aria-colindex": column.idx + 1,
    "aria-selected": isCellSelected,
    tabIndex,
    className: getCellClassname(column),
    style: {
      ...getCellStyle(column),
      cursor: isLevelMatching ? "pointer" : "default"
    },
    onMouseDown: (event) => {
      event.preventDefault();
    },
    onClick: isLevelMatching ? toggleGroup : void 0,
    onFocus,
    children: (!isGroupByColumn || isLevelMatching) && column.renderGroupCell?.({
      groupKey,
      childRows,
      column,
      row: row$1,
      isExpanded,
      tabIndex: childTabIndex,
      toggleGroup
    })
  }, column.key);
}
var GroupCell_default = (0, import_react5.memo)(GroupCell);
var groupRowClassname = `rdg-group-row rdg-7-0-0-beta-58-e74a2be3`;
function GroupedRow({ className, row: row$1, rowIdx, viewportColumns, selectedCellIdx, isRowSelected, selectCell, gridRowStart, groupBy, toggleGroup, isRowSelectionDisabled, ...props }) {
  const idx = viewportColumns[0].key === SELECT_COLUMN_KEY ? row$1.level + 1 : row$1.level;
  function handleSelectGroup() {
    selectCell({
      rowIdx,
      idx: -1
    }, { shouldFocusCell: true });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(RowSelectionContext, {
    value: (0, import_react5.useMemo)(() => ({
      isRowSelectionDisabled: false,
      isRowSelected
    }), [isRowSelected]),
    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
      role: "row",
      "aria-level": row$1.level + 1,
      "aria-setsize": row$1.setSize,
      "aria-posinset": row$1.posInSet + 1,
      "aria-expanded": row$1.isExpanded,
      className: classnames(rowClassname, groupRowClassname, `rdg-row-${rowIdx % 2 === 0 ? "even" : "odd"}`, selectedCellIdx === -1 && rowSelectedClassname, className),
      onMouseDown: handleSelectGroup,
      style: getRowStyle(gridRowStart),
      ...props,
      children: viewportColumns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(GroupCell_default, {
        id: row$1.id,
        groupKey: row$1.groupKey,
        childRows: row$1.childRows,
        isExpanded: row$1.isExpanded,
        isCellSelected: selectedCellIdx === column.idx,
        column,
        row: row$1,
        groupColumnIndex: idx,
        toggleGroup,
        isGroupByColumn: groupBy.includes(column.key)
      }, column.key))
    })
  });
}
var GroupRow_default = (0, import_react5.memo)(GroupedRow);
var textEditorInternalClassname = "rdg-7-0-0-beta-58-2f8db206";
var textEditorClassname = `rdg-text-editor ${textEditorInternalClassname}`;

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
function markError(row2, key, message) {
  const existing = row2.__errors ?? {};
  existing[key] = { message, level: "error" };
  row2.__errors = existing;
}
function rowHasErrors(row2) {
  if (!row2.__errors) return false;
  for (const k in row2.__errors) {
    if (row2.__errors[k]?.level === "error") return true;
  }
  return false;
}

// src/steps/ValidationStep.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function SelectHeaderCell(props) {
  const { isIndeterminate, isRowSelected, onRowSelectionChange } = useHeaderRowSelection();
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "input",
    {
      type: "checkbox",
      className: "form-check-input m-0",
      tabIndex: props.tabIndex,
      ref: (el) => {
        if (el) el.indeterminate = isIndeterminate;
      },
      checked: isRowSelected,
      onChange: (e) => onRowSelectionChange({ checked: isIndeterminate ? false : e.target.checked })
    }
  ) });
}
function SelectRowCell(props) {
  const { isRowSelected, onRowSelectionChange } = useRowSelection();
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "input",
    {
      type: "checkbox",
      className: "form-check-input m-0",
      tabIndex: props.tabIndex,
      checked: isRowSelected,
      onChange: (e) => onRowSelectionChange({ row: props.row, checked: e.target.checked, isShiftClick: false })
    }
  ) });
}
var CustomSelectColumn = {
  key: SELECT_COLUMN_KEY,
  name: "",
  width: 40,
  minWidth: 40,
  maxWidth: 40,
  resizable: false,
  sortable: false,
  frozen: true,
  renderHeaderCell: (props) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SelectHeaderCell, { tabIndex: props.tabIndex }),
  renderCell: (props) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SelectRowCell, { tabIndex: props.tabIndex, row: props.row })
};
function ErrorCell({ className, message, children }) {
  const ref = (0, import_react6.useRef)(null);
  const [show, setShow] = (0, import_react6.useState)(false);
  const [pos, setPos] = (0, import_react6.useState)({ top: 0, left: 0 });
  function handleEnter() {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setPos({ top: rect.top - 6, left: rect.left + rect.width / 2 });
    }
    setShow(true);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "div",
      {
        ref,
        className,
        style: { width: "100%", height: "100%", display: "flex", alignItems: "center" },
        onMouseEnter: handleEnter,
        onMouseLeave: () => setShow(false),
        children
      }
    ),
    show && (0, import_react_dom2.createPortal)(
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "rsi-tooltip-fixed", style: { position: "fixed", top: pos.top, left: pos.left, transform: "translate(-50%, -100%)", zIndex: 9999 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "rsi-tooltip-inner", children: message }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "rsi-tooltip-arrow" })
      ] }),
      document.body
    )
  ] });
}
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
  const [rows, setRows] = (0, import_react6.useState)([]);
  const [selected, setSelected] = (0, import_react6.useState)(/* @__PURE__ */ new Set());
  const [filterErrors, setFilterErrors] = (0, import_react6.useState)(false);
  const [submitting, setSubmitting] = (0, import_react6.useState)(false);
  const [showConfirm, setShowConfirm] = (0, import_react6.useState)(false);
  const [loading, setLoading] = (0, import_react6.useState)(true);
  (0, import_react6.useEffect)(() => {
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
  const columns = (0, import_react6.useMemo)(() => {
    return [CustomSelectColumn, ...fields.map((f) => ({
      key: f.key,
      name: f.label,
      editable: true,
      resizable: true,
      renderEditCell: ({ row: row2, onRowChange, onClose }) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "input",
        {
          autoFocus: true,
          className: "form-control form-control-sm rsi-cell-edit",
          value: row2[f.key] ?? "",
          onChange: (e) => onRowChange({ ...row2, [f.key]: e.target.value }),
          onBlur: () => onClose(true),
          onKeyDown: (e) => {
            if (e.key === "Enter") onClose(true);
            if (e.key === "Escape") onClose(false);
          }
        }
      ),
      renderCell: ({ row: row2 }) => {
        const value = row2[f.key];
        const err = row2.__errors?.[f.key];
        if (!err) {
          return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { style: { width: "100%", height: "100%", display: "flex", alignItems: "center" }, children: value ?? "" });
        }
        return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ErrorCell, { className: `rsi-cell-${err.level}`, message: err.message, children: value ?? "" });
      }
    }))];
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "d-flex flex-column gap-3", style: { minHeight: 400 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "d-flex align-items-center justify-content-between", children: [
      showTitle ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h5", { className: "m-0", children: translations.title }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", {}),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "d-flex align-items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          import_react_bootstrap5.Form.Check,
          {
            type: "switch",
            id: "rsi-filter-errors",
            label: translations.filterSwitchTitle,
            checked: filterErrors,
            onChange: (e) => setFilterErrors(e.target.checked)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react_bootstrap5.Button, { variant: "outline-danger", size: "sm", disabled: selected.size === 0, onClick: handleDiscard, children: [
          translations.discardButtonTitle,
          " (",
          selected.size,
          ")"
        ] })
      ] })
    ] }),
    loading ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "d-flex align-items-center justify-content-center flex-grow-1", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_bootstrap5.Spinner, { animation: "border" }) }) : visibleRows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_bootstrap5.Alert, { variant: "info", className: "m-0", children: filterErrors ? translations.noRowsMessageWhenFiltered : translations.noRowsMessage }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "rsi-grid-wrapper", style: { flex: 1, minHeight: 320 }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
    errorCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "text-danger small", children: [
      errorCount,
      " row",
      errorCount === 1 ? "" : "s",
      " with errors"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "d-flex justify-content-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_bootstrap5.Button, { variant: "outline-secondary", onClick: onBack, disabled: submitting, children: translations.backButtonTitle }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_bootstrap5.Button, { variant: "primary", onClick: handleSubmit, disabled: submitting || !allowInvalidSubmit && errorCount > 0, children: submitting ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_bootstrap5.Spinner, { size: "sm", animation: "border" }) : translations.submitButtonTitle })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react_bootstrap5.Modal, { show: showConfirm, onHide: () => setShowConfirm(false), centered: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_bootstrap5.Modal.Header, { closeButton: true, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_bootstrap5.Modal.Title, { children: alertTranslations.headerTitle }) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_bootstrap5.Modal.Body, { children: allowInvalidSubmit ? alertTranslations.bodyText : alertTranslations.bodyTextSubmitForbidden }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react_bootstrap5.Modal.Footer, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_bootstrap5.Button, { variant: "outline-secondary", onClick: () => setShowConfirm(false), children: alertTranslations.cancelButtonTitle }),
        allowInvalidSubmit && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
    maxRecordsExceeded: (max2) => `Too many records. Up to ${max2} allowed`,
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
var import_jsx_runtime8 = require("react/jsx-runtime");
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
  const t = (0, import_react7.useMemo)(
    () => mergeTranslations(defaultTranslations, translationsOverride),
    [translationsOverride]
  );
  const [state, setState] = (0, import_react7.useState)(INITIAL_STATE);
  (0, import_react7.useEffect)(() => {
    if (!inline && isOpen) {
      setState(INITIAL_STATE);
    }
  }, [isOpen, inline]);
  const sheet = state.workbook?.sheets[state.sheetIndex];
  const dataRows = sheet?.rows ?? [];
  const headerRow2 = dataRows[state.headerIndex] ?? [];
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
    const mapped = bodyRows.map((row2) => {
      const obj = {};
      mapping.forEach((key, i) => {
        if (key) obj[key] = row2[i] ?? "";
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
  const body = /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "d-flex flex-column gap-3", children: [
    !hideStepper && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Stepper, { current: state.step, translations: t.stepper }),
    state.maxExceeded && maxRecords !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_bootstrap6.Alert, { variant: "danger", className: "m-0", children: t.uploadStep.maxRecordsExceeded(maxRecords) }),
    state.step === "upload" && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
    state.step === "selectSheet" && state.workbook && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      SelectSheetStep,
      {
        workbook: state.workbook,
        translations: t.selectSheetStep,
        onBack: () => setState((s) => ({ ...s, step: "upload" })),
        onNext: (idx) => advanceFromSheet(state.workbook, idx),
        showTitle: !hideStepTitles
      }
    ),
    state.step === "selectHeader" && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
    state.step === "matchColumns" && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      MatchColumnsStep,
      {
        fields,
        headers: headerRow2,
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
    state.step === "validate" && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "rsi-inline", children: body });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_bootstrap6.Modal.Header, { closeButton: true, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_bootstrap6.Modal.Title, { children: title ?? "Spreadsheet importer" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_bootstrap6.Modal.Body, { children: body })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      import_react_bootstrap6.Modal,
      {
        show: state.showCloseConfirm,
        onHide: () => setState((s) => ({ ...s, showCloseConfirm: false })),
        centered: true,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_bootstrap6.Modal.Header, { closeButton: true, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_bootstrap6.Modal.Title, { children: t.alerts.confirmClose.headerTitle }) }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_bootstrap6.Modal.Body, { children: t.alerts.confirmClose.bodyText }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_react_bootstrap6.Modal.Footer, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_bootstrap6.Button, { variant: "outline-secondary", onClick: () => setState((s) => ({ ...s, showCloseConfirm: false })), children: t.alerts.confirmClose.cancelButtonTitle }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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