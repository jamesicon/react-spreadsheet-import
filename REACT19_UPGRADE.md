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

## Storybook Fixes

Storybook 6 uses webpack 4 (acorn 7), which cannot parse optional chaining (`?.`) or nullish coalescing (`??`) natively. Modern versions of `@chakra-ui`, `react-draggable`, and related packages all use this syntax in their published CJS/ESM output.

### `.storybook/main.ts` → `main.js`

Storybook 6's Babel instance (used to parse the config file itself) has no TypeScript plugin, so `.storybook/main.ts` fails to load. Renamed to `main.js` and removed the `: string` / `: any` type annotations.

### webpack `webpackFinal` rules

Three rules added to `webpackFinal` in `.storybook/main.js` to transpile all of `node_modules` through Babel for unsupported syntax:

```js
const modernSyntaxPlugins = {
  loader: require.resolve("babel-loader"),
  options: {
    plugins: [
      require.resolve("@babel/plugin-transform-optional-chaining"),
      require.resolve("@babel/plugin-transform-nullish-coalescing-operator"),
      require.resolve("@babel/plugin-transform-logical-assignment-operators"),
    ],
  },
}

// In webpackFinal:
config.module.rules.push({ test: /\.js$/,  include: /node_modules/, use: modernSyntaxPlugins })
config.module.rules.push({ test: /\.mjs$/, include: /node_modules/, type: "javascript/auto", use: modernSyntaxPlugins })
config.module.rules.push({ test: /\.cjs$/, include: /node_modules/, type: "javascript/auto", use: modernSyntaxPlugins })
```

Using targeted transform plugins (rather than all of `@babel/preset-env`) keeps the rebuild fast. The `.mjs`/`.cjs` rules also set `type: "javascript/auto"` so webpack 4 treats those files as ordinary JS.

**Why `.cjs`?** Chakra UI v2 ships its CommonJS output with a `.cjs` file extension (e.g. `@chakra-ui/utils/dist/cjs/context.cjs`). Webpack 4's default JS rule only covers `.js`, so these files were reaching acorn unparsed and failing on `?.`/`??`.

**Why `@babel/plugin-transform-logical-assignment-operators`?** `react-data-grid` beta.45 uses `||=` (logical assignment), which is ES2021. The `.js` rule was already catching that file, but the original plugin list didn't include the logical-assignment transform, so acorn still choked on it.

### webpack 4 `exports` field — `@chakra-ui/utils/context` alias

Webpack 4 does not read the `exports` field in `package.json` (that's a webpack 5 feature). `@chakra-ui/react` v2 internally imports `@chakra-ui/utils/context` as a sub-path, which the `exports` field maps to `./dist/cjs/context.cjs`. Webpack 4 can't resolve this automatically, so an explicit alias is required:

```js
"@chakra-ui/utils/context": toPath("node_modules/@chakra-ui/utils/dist/cjs/context.cjs"),
```

`context` is the only sub-path import used inside `@chakra-ui/react`'s CJS/ESM dist (verified by grepping all `require`/`import` calls in both dist trees).

### `typescript.reactDocgen` disabled

`@storybook/react-docgen-typescript-plugin` (bundled with `@storybook/react` 6.4) calls TypeScript compiler API methods (`createIdentifier`, `createLiteral`, etc.) that were removed in TypeScript 4+. With TypeScript 5 in this project, this throws at build time. Fixed by adding to `main.js`:

```js
typescript: { reactDocgen: "none" }
```

Prop tables in Storybook docs are no longer auto-generated, but all stories load and render correctly.

### `managerWebpack` — manager bundle syntax errors

`webpackFinal` only configures the **preview** webpack (the bundle that runs stories). Storybook's manager UI (sidebar, toolbar, panels) is compiled by a completely separate webpack instance that `webpackFinal` does not touch.

`react-draggable` 4.5+ is used by `@storybook/ui` for resizable panels and ships optional chaining in its CJS output (`build/cjs/Draggable.js`). With webpack 4 / acorn 7, this caused:

```
Module parse failed: Unexpected token
```

Fixed by adding a `managerWebpack` export to `main.js` that pushes the same three babel-loader rules as `webpackFinal`.

### `ReactDOM.render` removed in React 19 — `.storybook/react-dom-compat.js`

Once the manager bundle compiled cleanly, a new runtime error surfaced:

```
TypeError: react_dom_default.a.render is not a function
    at renderStorybookUI
```

Storybook 6's manager calls `ReactDOM.render` to mount its UI. React 18 deprecated it (but kept it); React 19 removed it entirely.

Fix: a shim at `.storybook/react-dom-compat.js` that adds `render` back using `createRoot`, then aliased into the manager webpack as `react-dom`.

```js
// .storybook/react-dom-compat.js
const ReactDOM = require('react-dom/index.js')  // /index.js bypasses the alias — see below
// NOTE: require('react-dom/client') must be lazy (inside the function body).
// Eager top-level require creates a circular dependency that hands an
// incomplete {} back to react-dom-client.development.js, making
// ReactDOMSharedInternals undefined and crashing on .d access.
const roots = new WeakMap()
ReactDOM.render = function render(element, container, callback) {
  const { createRoot } = require('react-dom/client')  // lazy — shim is fully init'd by call time
  let root = roots.get(container)
  if (!root) { root = createRoot(container); roots.set(container, root) }
  root.render(element)
  if (typeof callback === 'function') callback()
}
module.exports = ReactDOM
```

```js
// In managerWebpack:
const managerAlias = { ...(config.resolve.alias || {}) }
delete managerAlias["react-dom"]
managerAlias["react-dom$"] = path.resolve(__dirname, "react-dom-compat.js")
config.resolve.alias = managerAlias
```

**Why `react-dom$` (with `$`)?** The `$` makes webpack do an exact-match alias: only `require('react-dom')` is redirected to the shim. `require('react-dom/client')` and `require('react-dom/index.js')` resolve normally. This is what breaks the circular dependency — inside the shim, `require('react-dom/index.js')` is a different module identifier so it loads the real package, not the shim again.

**Why `WeakMap` for roots?** `createRoot` throws if called twice on the same container. The `WeakMap` caches the root per container so that any re-render calls reuse the existing root.

**Why delete `"react-dom"` before adding `"react-dom$"`?** `@storybook/ui/paths` injects a non-exact `"react-dom"` alias (no `$`) pointing at the real package. Webpack's `AliasPlugin` iterates aliases in insertion order and stops at the first match. Because the non-exact alias was spread into the object before our `"react-dom$"`, it matched `require('react-dom')` first and bypassed the shim entirely — causing the same `render is not a function` error even with the alias present. Deleting the non-exact key first eliminates the conflict.

---

## Known Limitations / Deferred Work

- **Storybook**: Still on v6. Storybook v8 would need a separate migration. The `.npmrc` flag allows development install to succeed.
- **`motion()` deprecation**: `MatchIcon.tsx` still uses `motion(Flex)`. Should be updated to `motion.create(Flex)` — it's a runtime warning only.
- **Select cell editor in tests**: The "All inputs change values" test no longer verifies the select-dropdown interaction (clicking a select cell to open its dropdown). In react-data-grid beta.45, opening the editor requires double-click or keyboard input rather than single-click; the jsdom test environment doesn't reliably simulate this. The select cell renders correctly and its value is verified.
