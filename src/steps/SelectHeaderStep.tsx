import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import type { RawSheet, Translations } from "../types";

interface Props {
  rows: RawSheet;
  translations: Translations["selectHeaderStep"];
  onBack: () => void;
  onNext: (headerIndex: number) => void;
  showTitle?: boolean;
}

export function SelectHeaderStep({ rows, translations, onBack, onNext, showTitle = true }: Props) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="d-flex flex-column gap-3">
      {showTitle && <h5 className="m-0">{translations.title}</h5>}
      <div className="border rounded overflow-auto" style={{ maxHeight: 320 }}>
        <Table hover size="sm" className="m-0 align-middle">
          <tbody>
            {rows.slice(0, 25).map((row, idx) => (
              <tr
                key={idx}
                onClick={() => setSelected(idx)}
                className={selected === idx ? "table-primary" : undefined}
                style={{ cursor: "pointer" }}
              >
                <td style={{ width: 36 }}>
                  <input
                    type="radio"
                    name="rsi-header"
                    aria-label={`Use row ${idx + 1} as header`}
                    checked={selected === idx}
                    onChange={() => setSelected(idx)}
                    onClick={(e) => e.stopPropagation()}
                  />
                </td>
                {row.map((cell, ci) => (
                  <td key={ci} className="small text-nowrap">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="d-flex justify-content-between">
        <Button variant="outline-secondary" onClick={onBack}>{translations.backButtonTitle}</Button>
        <Button variant="primary" onClick={() => onNext(selected)}>{translations.nextButtonTitle}</Button>
      </div>
    </div>
  );
}
