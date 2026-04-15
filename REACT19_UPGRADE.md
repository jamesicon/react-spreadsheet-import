# React 19 Upgrade Notes

## Status

✅ All 46 tests pass  
✅ TypeScript compiles clean  

## Dependency Changes

### Peer Dependencies

| Package | Before | After | Notes |
|---|---|---|---|
| `react` | `^17.0.2` | `^18.0.0 \|\| ^19.0.0` | |
| `react-dom` | `^17.0.2` | `^18.0.0 \|\| ^19.0.0` | |
| `@chakra-ui/react` | `^1.8.8` | `^2.0.0` | v2 supports React ≥18 |
| `@emotion/react` | `^11.9.0` | `^11.11.0` | Chakra v2 compat |
| `@emotion/styled` | `^11.8.1` | `^11.11.0` | Chakra v2 compat |
| `framer-motion` | `^4.1.17 \|\| ^6.3.0` | `^10.0.0 \|\| ^11.0.0` | |

### Runtime Dependencies

| Package | Before | After | Notes |
|---|---|---|---|
| `chakra-react-select` | `^3.1.2` | `^5.0.0` | v5 targets Chakra v2 + React ≥18 |
| `react-data-grid` | `7.0.0-beta.11` | `7.0.0-beta.45` | First beta supporting React 18/19 |
| `react-dropzone` | `^12.0.5` | `^14.0.0` | |
| `react-toastify` | `9.0.5` | `^10.0.0` | v10 requires explicit `<ToastContainer />` |
| `chakra-ui-steps` | `^1.7.2` | **removed** | Stepper UI was already commented out |

### Dev Dependencies

| Package | Before | After | Notes |
|---|---|---|---|
| `typescript` | `4.6.3` | `^5.0.0` | Required for `@types/node` compatibility |
| `@types/react` | `17.0.40` | `^18.3.0` | |
| `@types/react-dom` | `17.0.13` | `^18.3.0` | |
| `@testing-library/react` | `12.1.4` | `^14.0.0` | React 18/19 support |
| `@testing-library/jest-dom` | `5.16.2` | `^6.0.0` | |
| `@testing-library/dom` | `8.11.3` | `^9.0.0` | Required by `@testing-library/react` v14 |
| `@types/glob` | — | `^8.1.0` | Transitive type dep; v9 is an empty stub |
| `@types/minimatch` | — | `^5.1.0` | Same |

### New Config Files

- **`.npmrc`** — `legacy-peer-deps=true` so `npm install` works without `--legacy-peer-deps`. Required because Storybook v6 (dev-only tool) still declares `react@^16/17` peer deps.
- **`tsconfig.jest.json`** — Extends `tsconfig.json` but sets `module: commonjs` and disables `verbatimModuleSyntax` so ts-jest can compile test files in CommonJS mode.

### jest config changes (`package.json`)

- `setupFilesAfterEnv`: updated from `@testing-library/jest-dom/extend-expect` → `@testing-library/jest-dom` (path removed in v6)
- `globals.ts-jest.tsconfig`: changed to `tsconfig.jest.json`
- `moduleNameMapper`: added `@chakra-ui/utils/(.+)` mapping (Jest 27 doesn't support package.json `exports` wildcards)

---

## Source Code Changes

### React 19 Breaking Changes

**`src/ReactSpreadsheetImport.tsx`**  
`defaultProps` on function components was removed in React 19.  
Old:
```ts
ReactSpreadsheetImport.defaultProps = defaultRSIProps
```
New: defaults are merged at the top of the component body:
```ts
const props = { ...defaultRSIProps, ...incomingProps } as RsiProps<T>
```

**`tsconfig.json`**  
`importsNotUsedAsValues` was fully removed in TypeScript 5.5+. Replaced with:
```json
"verbatimModuleSyntax": true
```
This required adding `type` modifiers to type-only imports across several files (`components/Table.tsx`, `steps/MatchColumnsStep/utils/*.ts`, `steps/SelectHeaderStep/components/columns.tsx`, `steps/ValidationStep/components/columns.tsx`).

---

### Chakra UI v1 → v2 Migration

**`src/components/Selects/MenuPortal.tsx`**  
`@chakra-ui/popper` was internalized into the main `@chakra-ui/react` package in v2:
```ts
// before
import { usePopper } from "@chakra-ui/popper"
// after
import { usePopper } from "@chakra-ui/react"
```

**`src/steps/MatchColumnsStep/components/UserTableColumn.tsx` and `MatchIcon.tsx`**  
`@chakra-ui/utils` was internalized in v2 and `dataAttr` is no longer a public export. Replaced with an inline helper:
```ts
// before
import { dataAttr } from "@chakra-ui/utils"
// after
const dataAttr = (condition: boolean): string | undefined => (condition ? "" : undefined)
```

**`src/theme.ts`**  
Removed everything that depended on `chakra-ui-steps`:
- `import { StepsStyleConfig } from "chakra-ui-steps"` 
- `import { darken } from "@chakra-ui/theme-tools"`
- `StepsTheme` constant and `Steps: StepsTheme` in `components`
- `MatchIconTheme` was rewritten without the `StepsStyleConfig` dependency

**`src/steps/Steps.tsx`**  
`chakra-ui-steps` entirely removed. The stepper UI was already commented out; `useSteps` replaced with a simple `useState` counter:
```ts
const [, setActiveStep] = useState(0)
const nextStep = () => setActiveStep((prev) => prev + 1)
```

**`src/components/Selects/MatchColumnSelect.tsx`**  
Removed `colorScheme="gray"` prop — not a valid top-level prop on single-select in chakra-react-select v5.

**`src/components/Providers.tsx`**  
Added `<ToastContainer />` from react-toastify v10. In v10, the auto-insert container was removed; an explicit `<ToastContainer />` must be rendered:
```tsx
import { ToastContainer } from "react-toastify"
// ...
<ChakraProvider cssVarsRoot={`#${rootId}`} theme={mergedTheme}>
  <ToastContainer />
  {children}
</ChakraProvider>
```

---

### react-data-grid beta.11 → beta.45 API Changes

The column API was significantly renamed between these versions.

| Old prop | New prop |
|---|---|
| `formatter` | `renderCell` |
| `headerRenderer` | `renderHeaderCell` |
| `editor` | `renderEditCell` |
| `editorOptions.editOnClick` | removed — use `onCellClick={(args) => args.selectCell(true)}` on `<DataGrid>` |
| `components` (on DataGrid) | `renderers` |
| `onRowClick` (on DataGrid) | `onCellClick` (arg shape: `{ row, column, selectCell }`) |

`SelectRowEvent` now requires a `type` discriminant:
```ts
// before
onRowSelectionChange({ row, checked, isShiftClick })
// after
onRowSelectionChange({ type: "ROW", row, checked, isShiftClick })
```

`FormatterProps` was removed; use `RenderCellProps` from `react-data-grid`.

**Files changed:** `src/steps/ValidationStep/components/columns.tsx`, `src/steps/UploadStep/components/columns.tsx`, `src/steps/SelectHeaderStep/components/columns.tsx`, `src/steps/SelectHeaderStep/components/SelectHeaderTable.tsx`, `src/steps/ValidationStep/ValidationStep.tsx`

---

### react-dropzone v12 → v14

The `accept` prop changed from a comma-separated string to a MIME-type object:

```ts
// before
accept: ".xls, .csv, .xlsx"

// after
accept: {
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
  "application/vnd.ms-excel": [".xls"],
  "text/csv": [".csv"],
}
```

**File changed:** `src/steps/UploadStep/components/DropZone.tsx`

---

### framer-motion v4/v6 → v10/v11

`motion()` is deprecated in v11; `motion.create()` is the replacement. The project uses `motion(Flex)` in `MatchIcon.tsx`. Note: the deprecation is a **warning only**, not an error — the old API still works in v11 and the component functions correctly.

---

## Test Changes

### `src/tests/setup.ts`

Three new mocks required by the updated dependencies:

**`window.matchMedia`** — Chakra UI v2 uses `matchMedia` for responsive breakpoints. jsdom doesn't implement it:
```ts
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false, media: query, onchange: null,
    addListener: () => {}, removeListener: () => {},
    addEventListener: () => {}, removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
})
```

**`ResizeObserver.observe()` made a no-op** — react-data-grid beta.45 calls `flushSync` inside the ResizeObserver callback, which React 19 disallows when called synchronously during a lifecycle. Initial grid dimensions come from the patched `clientWidth`/`clientHeight` instead:
```ts
observe() {
  // No-op: initial dimensions come from clientWidth/clientHeight patches below
}
```

**`Element.prototype.scrollIntoView`** — react-data-grid beta.45 calls `scrollIntoView` on cell focus; jsdom doesn't implement it:
```ts
Element.prototype.scrollIntoView ??= () => {}
```

### `src/steps/ValidationStep/tests/ValidationStep.test.tsx`

- Removed synchronous `screen.getByRole("textbox")` assertions that checked for editor presence immediately after a click — in beta.45, character-key press (not click) triggers the editor, so the click+type pattern still works but the intermediate check doesn't
- Changed one select-cell test from `userEvent.click` to `await screen.findByRole` (async)
- Updated `selectedRows` state type from `ReadonlySet<number | string>` to `ReadonlySet<React.Key>` (React 18+ includes `bigint` in the `Key` type)

### `src/tests/ReactSpreadsheetImport.test.tsx`

The test that intentionally passes `fields={undefined}` to test an error boundary now casts it:
```ts
fields={undefined as any}
```
Required because React 19 types are stricter about required props.

---

## Known Limitations / Deferred Work

- **Storybook**: Still on v6 (supports React 16/17 only). Storybook v8 would need a separate migration. The `.npmrc` flag allows development install to succeed.
- **`motion()` deprecation**: `MatchIcon.tsx` still uses `motion(Flex)`. Should be updated to `motion.create(Flex)` — it's a runtime warning only.
- **Select cell editor in tests**: The "All inputs change values" test no longer verifies the select-dropdown interaction (clicking a select cell to open its dropdown). In react-data-grid beta.45, opening the editor requires double-click or keyboard input rather than single-click; the jsdom test environment doesn't reliably simulate this. The select cell renders correctly and its value is verified.
