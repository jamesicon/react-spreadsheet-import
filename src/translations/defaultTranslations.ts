import type { Translations } from "../types";

export const defaultTranslations: Translations = {
  stepper: {
    upload: "Upload Roster",
    selectHeader: "Select Header Row",
    matchColumns: "Map Columns",
    submit: "Submit",
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
      loadingTitle: "Processing...",
    },
  },
  selectSheetStep: {
    title: "Select the sheet to use",
    nextButtonTitle: "Next",
    backButtonTitle: "Back",
  },
  selectHeaderStep: {
    title: "Select header row",
    nextButtonTitle: "Next",
    backButtonTitle: "Back",
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
    duplicateColumnWarningDescription: "Columns cannot duplicate",
  },
  validationStep: {
    title: "Validate data",
    nextButtonTitle: "Confirm",
    backButtonTitle: "Back",
    noRowsMessage: "No data found",
    noRowsMessageWhenFiltered: "No data containing errors",
    discardButtonTitle: "Discard selected rows",
    filterSwitchTitle: "Show only rows with errors",
    submitButtonTitle: "Confirm",
  },
  alerts: {
    confirmClose: {
      headerTitle: "Exit import flow",
      bodyText: "Are you sure? Your current information will not be saved.",
      cancelButtonTitle: "Cancel",
      exitButtonTitle: "Exit flow",
    },
    submitIncomplete: {
      headerTitle: "Errors detected",
      bodyText: "There are still some rows that contain errors. Rows with errors will be ignored when submitting.",
      bodyTextSubmitForbidden: "There are still some rows containing errors.",
      cancelButtonTitle: "Cancel",
      finishButtonTitle: "Submit",
    },
    unmatchedRequiredFields: {
      headerTitle: "Not all columns matched",
      bodyText: "There are required columns that are not matched or ignored. Do you want to continue?",
      cancelButtonTitle: "Cancel",
      continueButtonTitle: "Continue",
    },
    toast: { error: "Error" },
  },
};

export function mergeTranslations(
  base: Translations,
  override?: Partial<Translations> | undefined,
): Translations {
  if (!override) return base;
  const out: any = Array.isArray(base) ? [...(base as any)] : { ...base };
  for (const k of Object.keys(override) as Array<keyof Translations>) {
    const ov = (override as any)[k];
    const bv = (base as any)[k];
    if (ov && typeof ov === "object" && !Array.isArray(ov) && bv && typeof bv === "object") {
      out[k] = mergeTranslations(bv, ov);
    } else if (ov !== undefined) {
      out[k] = ov;
    }
  }
  return out as Translations;
}
