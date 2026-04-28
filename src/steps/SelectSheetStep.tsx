import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import type { Translations, UploadedWorkbook } from "../types";

interface Props {
  workbook: UploadedWorkbook;
  translations: Translations["selectSheetStep"];
  onBack: () => void;
  onNext: (sheetIndex: number) => void;
  showTitle?: boolean;
}

export function SelectSheetStep({ workbook, translations, onBack, onNext, showTitle = true }: Props) {
  const [selected, setSelected] = useState(0);
  return (
    <div className="d-flex flex-column gap-3">
      {showTitle && <h5 className="m-0">{translations.title}</h5>}
      <Form>
        {workbook.sheets.map((s, i) => (
          <Form.Check
            key={s.name + i}
            type="radio"
            id={`rsi-sheet-${i}`}
            name="rsi-sheet"
            label={`${s.name} (${s.rows.length} rows)`}
            checked={selected === i}
            onChange={() => setSelected(i)}
          />
        ))}
      </Form>
      <div className="d-flex justify-content-between mt-2">
        <Button variant="outline-secondary" onClick={onBack}>{translations.backButtonTitle}</Button>
        <Button variant="primary" onClick={() => onNext(selected)}>{translations.nextButtonTitle}</Button>
      </div>
    </div>
  );
}
