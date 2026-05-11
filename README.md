# @icon/react-spreadsheet-importer

Drop-in spreadsheet (`.xlsx` / `.xls` / `.csv`) importer modal for React 19 + Bootstrap 5 + Yup.

A focused reimplementation of [`react-spreadsheet-import`](https://github.com/UgnisSoftware/react-spreadsheet-import):

- React 19 compatible
- Bootstrap 5 (`react-bootstrap`) instead of Chakra UI
- Yup schema as the validation source of truth
- `exceljs` for parsing
- `react-data-grid` for the editable validation step
- `fuse.js` for auto-mapping spreadsheet headers to template fields

## Install

```bash
npm install @icon/react-spreadsheet-importer
```

Peer deps: `react`, `react-dom`, `react-bootstrap`, `bootstrap`, `yup`.

## Usage

```tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "@icon/react-spreadsheet-importer/styles.css";

import { ReactSpreadsheetImport } from "@icon/react-spreadsheet-importer";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required().max(20),
  lastName: yup.string().required().max(20),
  email: yup.string().email().required(),
});

const fields = [
  { key: "firstName", label: "First Name", required: true, alternateMatches: ["first"], example: "John" },
  { key: "lastName",  label: "Last Name",  required: true, alternateMatches: ["last"],  example: "Doe" },
  { key: "email",     label: "Email",      required: true, unique: true,                example: "user@company.com" },
] as const;

<ReactSpreadsheetImport
  isOpen={open}
  onClose={() => setOpen(false)}
  fields={fields}
  schema={schema}
  allowInvalidSubmit={false}
  maxRecords={1000}
  onSubmit={(result, file) => {
    console.log(result.validData, result.invalidData);
  }}
/>
```

## Field configuration

| Property            | Description                                                                                   |
| ------------------- | --------------------------------------------------------------------------------------------- |
| `key`               | Object key produced for this column.                                                          |
| `label`             | Human label shown in the match step and grid header.                                          |
| `required`          | Marks the field as required to advance past column matching. The Yup schema enforces values.  |
| `unique`            | Cross-row uniqueness check (Yup can't express this).                                          |
| `alternateMatches`  | Strings considered when fuzzy-matching incoming spreadsheet headers.                          |
| `example`           | Sample value shown in the upload-step preview.                                                |

## Validation

Pass a Yup `ObjectSchema` whose keys match `fields[].key`. The validator runs per row with `abortEarly: false`, so all field errors surface at once. Cross-row constraints (`unique`) are handled by the importer outside Yup. An optional `rowHook` can mutate values or add extra errors after Yup runs.

## Step hooks

`uploadStepHook`, `selectHeaderStepHook`, `matchColumnsStepHook` mirror the original API and let host apps observe / transform data between steps (e.g. to drive an external progress indicator).

## What's different from the original

- **No Chakra `customTheme` prop.** Theme via Bootstrap CSS variables / SCSS overrides; `.rsi-*` class hooks are exposed in `styles.css`.
- **No per-field `validations: [...]` array.** Use a Yup schema; use `unique: true` on the field for cross-row checks.
- **Fewer translation keys.** Trimmed to the surface this lib actually renders.
