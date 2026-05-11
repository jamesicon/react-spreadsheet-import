import type { ReactNode } from "react";
import type { ObjectSchema } from "yup";

export type RawData = string[];
export type RawSheet = RawData[];

export type FieldInputType = { type: "input" } | { type: "checkbox" } | { type: "select"; options: SelectOption[] };

export interface SelectOption {
  label: string;
  value: string;
}

export interface Field<Key extends string = string> {
  /** The object key produced for this field. */
  key: Key;
  /** Human label shown in column-match dropdowns and grid headers. */
  label: string;
  /** Cell editor type. Defaults to a text input. */
  fieldType?: FieldInputType;
  /** Example value used as placeholder. */
  example?: string;
  /** Strings to fuzzy-match against incoming spreadsheet headers. */
  alternateMatches?: string[];
  /** Show as required in the match-columns step. Combined with `unique` for cross-row checks. The Yup schema is the source of truth for value validation. */
  required?: boolean;
  /** Cross-row uniqueness check (Yup cannot express this). */
  unique?: boolean;
  /** Override the message shown for unique violations on this field. */
  uniqueErrorMessage?: string;
}

export type ErrorLevel = "error" | "warning" | "info";

export interface FieldError {
  message: string;
  level: ErrorLevel;
}

export type RowErrors<Key extends string = string> = Partial<Record<Key, FieldError>>;

export type ImportedRow<Key extends string = string> = Partial<Record<Key, string>> & {
  __index: string;
  __errors?: RowErrors<Key>;
};

export interface ImportResult<Key extends string = string> {
  validData: Array<Partial<Record<Key, string>>>;
  invalidData: Array<ImportedRow<Key>>;
  all: Array<ImportedRow<Key>>;
}

export interface RowHookResult<Key extends string = string> {
  values: Partial<Record<Key, string>>;
  errors?: RowErrors<Key>;
}

export type RowHook<Key extends string = string> = (
  row: Partial<Record<Key, string>>,
  addError: (fieldKey: Key, error: FieldError) => void,
  table: Array<Partial<Record<Key, string>>>,
) => Partial<Record<Key, string>>;

export interface Translations {
  stepper: {
    upload: string;
    selectHeader: string;
    matchColumns: string;
    submit: string;
  };
  uploadStep: {
    title: string;
    manifestTitle: string;
    manifestDescription: string;
    maxRecordsExceeded: (max: number) => string;
    dropzone: {
      title: string;
      errorToastDescription: string;
      activeDropzoneTitle: string;
      buttonTitle: string;
      loadingTitle: string;
    };
  };
  selectSheetStep: {
    title: string;
    nextButtonTitle: string;
    backButtonTitle: string;
  };
  selectHeaderStep: {
    title: string;
    nextButtonTitle: string;
    backButtonTitle: string;
  };
  matchColumnsStep: {
    title: string;
    nextButtonTitle: string;
    backButtonTitle: string;
    userTableTitle: string;
    templateTitle: string;
    selectPlaceholder: string;
    ignoredColumnText: string;
    subSelectPlaceholder: string;
    matchDropdownTitle: string;
    unmatched: string;
    duplicateColumnWarningTitle: string;
    duplicateColumnWarningDescription: string;
  };
  validationStep: {
    title: string;
    nextButtonTitle: string;
    backButtonTitle: string;
    noRowsMessage: string;
    noRowsMessageWhenFiltered: string;
    discardButtonTitle: string;
    filterSwitchTitle: string;
    submitButtonTitle: string;
  };
  alerts: {
    confirmClose: { headerTitle: string; bodyText: string; cancelButtonTitle: string; exitButtonTitle: string };
    submitIncomplete: { headerTitle: string; bodyText: string; bodyTextSubmitForbidden: string; cancelButtonTitle: string; finishButtonTitle: string };
    unmatchedRequiredFields: { headerTitle: string; bodyText: string; cancelButtonTitle: string; continueButtonTitle: string };
    toast: { error: string };
  };
}

export type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] };

export interface ReactSpreadsheetImportProps<Key extends string = string> {
  /** Required when `inline` is false (the default). Ignored when inline. */
  isOpen?: boolean;
  /** Required when `inline` is false. In inline mode, optional cancel callback. */
  onClose?: () => void;
  onSubmit: (data: ImportResult<Key>, file: File) => void | Promise<void>;
  /** Render the importer inline (no Modal wrapper). Use when embedding inside a host card or page. */
  inline?: boolean;
  /** Hide the built-in horizontal step indicator (use when the host renders its own progress chrome). */
  hideStepper?: boolean;
  /** Hide the built-in per-step h5 title (use when the host renders its own page heading). */
  hideStepTitles?: boolean;
  fields: ReadonlyArray<Field<Key>>;
  /** Yup schema for per-row validation. Keys must match `fields[].key`. */
  schema?: ObjectSchema<Partial<Record<Key, string>>>;
  /** Optional row hook to run after Yup validation; can mutate values and add additional errors. */
  rowHook?: RowHook<Key>;
  uploadStepHook?: (data: RawSheet) => RawSheet | Promise<RawSheet>;
  selectHeaderStepHook?: (
    headerValues: RawData,
    data: RawSheet,
  ) => { headerValues: RawData; data: RawSheet } | Promise<{ headerValues: RawData; data: RawSheet }>;
  matchColumnsStepHook?: (
    rows: Array<Partial<Record<Key, string>>>,
  ) => Array<Partial<Record<Key, string>>> | Promise<Array<Partial<Record<Key, string>>>>;
  maxRecords?: number;
  maxFileSize?: number;
  /** When false, prevents submission when validation errors remain. */
  allowInvalidSubmit?: boolean;
  /** When true, automatically advance through MatchColumns if all required columns are auto-matched. */
  autoMapHeaders?: boolean;
  /** Minimum fuzzy match score (0–1) to consider an auto-match. Higher = stricter. */
  autoMapDistance?: number;
  translations?: DeepPartial<Translations>;
  dateFormat?: string;
  /** Custom modal title bar content. */
  title?: ReactNode;
}

export type StepName = "upload" | "selectSheet" | "selectHeader" | "matchColumns" | "validate";

export interface UploadedWorkbook {
  file: File;
  sheets: { name: string; rows: RawSheet }[];
}
