import type { StepName, Translations } from "../types";

interface StepperProps {
  current: StepName;
  translations: Translations["stepper"];
}

// Always 4 segments. SelectSheet (only relevant for multi-sheet xlsx) is hidden from the bar
// and rolls under "Upload Roster" visually.
const ORDER: StepName[] = ["upload", "selectSheet", "selectHeader", "matchColumns", "validate"];

const POSITIONS: Array<{ stepNames: StepName[]; key: keyof Translations["stepper"] }> = [
  { stepNames: ["upload", "selectSheet"], key: "upload" },
  { stepNames: ["selectHeader"], key: "selectHeader" },
  { stepNames: ["matchColumns"], key: "matchColumns" },
  { stepNames: ["validate"], key: "submit" },
];

export function Stepper({ current, translations }: StepperProps) {
  const currentOrder = ORDER.indexOf(current);

  return (
    <nav aria-label="Import progress" className="rsi-stepper">
      <div className="rsi-stepper-row d-flex">
        {POSITIONS.map((pos, idx) => {
          const positionMaxOrder = Math.max(...pos.stepNames.map((s) => ORDER.indexOf(s)));
          const positionMinOrder = Math.min(...pos.stepNames.map((s) => ORDER.indexOf(s)));
          const status: "done" | "active" | "todo" =
            currentOrder > positionMaxOrder
              ? "done"
              : currentOrder >= positionMinOrder
              ? "active"
              : "todo";
          return (
            <div key={pos.key} className={`rsi-stepper-item flex-fill rsi-stepper-${status}`}>
              <div className="rsi-stepper-bar" aria-hidden="true" />
              <div className="rsi-stepper-label small">
                <span className="rsi-stepper-num">{idx + 1}.</span> {translations[pos.key]}
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
