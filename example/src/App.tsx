import { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { ReactSpreadsheetImport, type Field, type ImportResult } from "react-spreadsheet-import";
import { schema, type Key } from "./schema";

const fields: ReadonlyArray<Field<Key>> = [
  { key: "email", label: "Email", required: true, unique: true,
    alternateMatches: ["emailaddress", "personalemail", "homeemail"],
    example: "user@company.com",
    uniqueErrorMessage: "Email must be unique." },
  { key: "ssn", label: "SSN", required: true, unique: true,
    alternateMatches: ["social security number", "social", "socialsecuritynumber", "socialsecurity#"],
    example: "111-11-1111",
    uniqueErrorMessage: "SSN must be unique." },
  { key: "firstName", label: "First Name", required: true, alternateMatches: ["first"], example: "John" },
  { key: "lastName", label: "Last Name", required: true, alternateMatches: ["last"], example: "Doe" },
  { key: "address1", label: "Address 1", required: true,
    alternateMatches: ["street1", "line1", "addressline1", "streetaddress"], example: "123 main st" },
  { key: "address2", label: "Address 2",
    alternateMatches: ["street2", "line2", "addressline2", "streetaddress2"], example: "apt. 1" },
  { key: "city", label: "City", required: true, example: "Portland" },
  { key: "state", label: "State", required: true, example: "OR" },
  { key: "postalCode", label: "Postal Code", required: true,
    alternateMatches: ["zipcode", "zip", "postalcode"], example: "97209" },
  { key: "phoneNumber", label: "Phone Number", required: true,
    alternateMatches: ["phone", "mobile", "personalmobile", "cellphone", "homephone"],
    example: "555-555-5555" },
  { key: "dob", label: "Date of Birth", required: true,
    alternateMatches: ["dateofbirth", "birthdate"], example: "1950-12-31" },
  { key: "location", label: "Location", example: "Denver Region" },
  { key: "department", label: "Department", example: "Engineering" },
];

export function App() {
  const [mode, setMode] = useState<"modal" | "inline">("inline");
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState<ImportResult<Key> | null>(null);

  function handleSubmit(r: ImportResult<Key>) {
    setResult(r);
    // eslint-disable-next-line no-console
    console.log("Import result", r);
  }

  return (
    <Container className="py-5">
      <h1 className="mb-4">Spreadsheet Importer Example</h1>

      <div className="mb-4">
        <Form.Check
          inline
          type="radio"
          id="mode-inline"
          name="mode"
          label="Inline (embedded in card)"
          checked={mode === "inline"}
          onChange={() => setMode("inline")}
        />
        <Form.Check
          inline
          type="radio"
          id="mode-modal"
          name="mode"
          label="Modal"
          checked={mode === "modal"}
          onChange={() => setMode("modal")}
        />
      </div>

      {mode === "modal" && (
        <>
          <p className="text-secondary">Click below to open the importer in a modal.</p>
          <Button onClick={() => setOpen(true)}>Open importer</Button>
          <ReactSpreadsheetImport<Key>
            isOpen={open}
            onClose={() => setOpen(false)}
            fields={fields}
            schema={schema}
            allowInvalidSubmit={false}
            maxRecords={1000}
            onSubmit={handleSubmit}
          />
        </>
      )}

      {mode === "inline" && (
        <Card>
          <Card.Body>
            <h2 className="h4 mb-1">Upload Roster</h2>
            <p className="text-secondary mb-4">
              Let's import your employee roster to a group. Once imported you can send invites.
            </p>
            <ReactSpreadsheetImport<Key>
              inline
              hideStepTitles
              fields={fields}
              schema={schema}
              allowInvalidSubmit={false}
              maxRecords={1000}
              onSubmit={handleSubmit}
            />
          </Card.Body>
        </Card>
      )}

      {result && (
        <div className="mt-4">
          <h5>Last import</h5>
          <div className="row">
            <div className="col">
              <strong>Valid:</strong> {result.validData.length}
            </div>
            <div className="col">
              <strong>Invalid:</strong> {result.invalidData.length}
            </div>
          </div>
          <details className="mt-2">
            <summary>Show valid rows JSON</summary>
            <pre className="bg-body-tertiary p-3 rounded small">{JSON.stringify(result.validData, null, 2)}</pre>
          </details>
        </div>
      )}
    </Container>
  );
}
