import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Alert, Button, Spinner, Table } from "react-bootstrap";
import type { Field, RawSheet, Translations, UploadedWorkbook } from "../types";
import { parseFile } from "../utils/parseFile";

interface UploadStepProps {
  fields: ReadonlyArray<Field>;
  maxFileSize?: number;
  translations: Translations["uploadStep"];
  onLoaded: (wb: UploadedWorkbook) => void;
  uploadStepHook?: (data: RawSheet) => RawSheet | Promise<RawSheet>;
  showTitle?: boolean;
}

const ACCEPT = {
  "text/csv": [".csv"],
  "application/vnd.ms-excel": [".xls"],
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
};

export function UploadStep({ fields, maxFileSize, translations, onLoaded, uploadStepHook, showTitle = true }: UploadStepProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(
    async (accepted: File[]) => {
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
        setError((err as Error).message || translations.dropzone.errorToastDescription);
      } finally {
        setLoading(false);
      }
    },
    [onLoaded, uploadStepHook, translations.dropzone.errorToastDescription],
  );

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: ACCEPT,
    maxSize: maxFileSize,
    multiple: false,
    noClick: true,
    noKeyboard: true,
  });

  return (
    <div className="rsi-upload-step d-flex flex-column gap-3">
      {showTitle && <h5 className="m-0">{translations.title}</h5>}
      <div>
        <div className="text-secondary small mb-1">{translations.manifestTitle}</div>
        <div className="text-secondary small mb-2">{translations.manifestDescription}</div>
        <div className="border rounded overflow-auto" style={{ maxHeight: 160 }}>
          <Table size="sm" className="m-0">
            <thead>
              <tr>
                {fields.map((f) => (
                  <th key={f.key} className="text-nowrap small">
                    {f.label}
                    {f.required && <span className="text-danger ms-1">*</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {fields.map((f) => (
                  <td key={f.key} className="text-nowrap small text-muted">
                    {f.example ?? ""}
                  </td>
                ))}
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      <div
        {...getRootProps()}
        className={`rsi-dropzone d-flex flex-column align-items-center justify-content-center text-center p-5 border border-2 border-dashed rounded ${
          isDragActive ? "bg-primary-subtle border-primary" : "bg-body-tertiary"
        }`}
        style={{ minHeight: 180, cursor: "pointer" }}
        onClick={open}
      >
        <input {...getInputProps()} />
        {loading ? (
          <>
            <Spinner animation="border" className="mb-2" />
            <div>{translations.dropzone.loadingTitle}</div>
          </>
        ) : isDragActive ? (
          <div>{translations.dropzone.activeDropzoneTitle}</div>
        ) : (
          <>
            <div className="mb-2">{translations.dropzone.title}</div>
            <Button
              type="button"
              variant="primary"
              onClick={(e) => {
                e.stopPropagation();
                open();
              }}
            >
              {translations.dropzone.buttonTitle}
            </Button>
          </>
        )}
      </div>

      {error && <Alert variant="danger" className="m-0">{error}</Alert>}
    </div>
  );
}
