import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';
import { ObjectSchema } from 'yup';

type RawData = string[];
type RawSheet = RawData[];
type FieldInputType = {
    type: "input";
} | {
    type: "checkbox";
} | {
    type: "select";
    options: SelectOption[];
};
interface SelectOption {
    label: string;
    value: string;
}
interface Field<Key extends string = string> {
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
type ErrorLevel = "error" | "warning" | "info";
interface FieldError {
    message: string;
    level: ErrorLevel;
}
type RowErrors<Key extends string = string> = Partial<Record<Key, FieldError>>;
type ImportedRow<Key extends string = string> = Partial<Record<Key, string>> & {
    __index: string;
    __errors?: RowErrors<Key>;
};
interface ImportResult<Key extends string = string> {
    validData: Array<Partial<Record<Key, string>>>;
    invalidData: Array<ImportedRow<Key>>;
    all: Array<ImportedRow<Key>>;
}
type RowHook<Key extends string = string> = (row: Partial<Record<Key, string>>, addError: (fieldKey: Key, error: FieldError) => void, table: Array<Partial<Record<Key, string>>>) => Partial<Record<Key, string>>;
interface Translations {
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
        confirmClose: {
            headerTitle: string;
            bodyText: string;
            cancelButtonTitle: string;
            exitButtonTitle: string;
        };
        submitIncomplete: {
            headerTitle: string;
            bodyText: string;
            bodyTextSubmitForbidden: string;
            cancelButtonTitle: string;
            finishButtonTitle: string;
        };
        unmatchedRequiredFields: {
            headerTitle: string;
            bodyText: string;
            cancelButtonTitle: string;
            continueButtonTitle: string;
        };
        toast: {
            error: string;
        };
    };
}
type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
interface ReactSpreadsheetImportProps<Key extends string = string> {
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
    selectHeaderStepHook?: (headerValues: RawData, data: RawSheet) => {
        headerValues: RawData;
        data: RawSheet;
    } | Promise<{
        headerValues: RawData;
        data: RawSheet;
    }>;
    matchColumnsStepHook?: (rows: Array<Partial<Record<Key, string>>>) => Array<Partial<Record<Key, string>>> | Promise<Array<Partial<Record<Key, string>>>>;
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
type StepName = "upload" | "selectSheet" | "selectHeader" | "matchColumns" | "validate";
interface UploadedWorkbook {
    file: File;
    sheets: {
        name: string;
        rows: RawSheet;
    }[];
}

declare function ReactSpreadsheetImport<Key extends string = string>(props: ReactSpreadsheetImportProps<Key>): react_jsx_runtime.JSX.Element;

declare const defaultTranslations: Translations;

/**
 * Auto-match incoming spreadsheet headers to field keys using Fuse fuzzy search.
 * Returns a map: headerIndex -> matched field key (or undefined when no good match).
 *
 * `distance` is fuse.js threshold; lower = stricter. Default 0.25 is fairly strict.
 */
declare function autoMatchColumns(headers: ReadonlyArray<string>, fields: ReadonlyArray<Field>, distance?: number): Array<string | undefined>;

interface ValidateOpts<Key extends string> {
    rows: Array<Partial<Record<Key, string>>>;
    fields: ReadonlyArray<Field<Key>>;
    schema?: ObjectSchema<Partial<Record<Key, string>>>;
    rowHook?: RowHook<Key>;
}
declare function validateRows<Key extends string>(opts: ValidateOpts<Key>): Promise<Array<ImportedRow<Key>>>;
declare function rowHasErrors<Key extends string>(row: ImportedRow<Key>): boolean;

export { type DeepPartial, type ErrorLevel, type Field, type FieldError, type FieldInputType, type ImportResult, type ImportedRow, type RawData, type RawSheet, ReactSpreadsheetImport, type ReactSpreadsheetImportProps, type RowErrors, type RowHook, type SelectOption, type StepName, type Translations, type UploadedWorkbook, autoMatchColumns, defaultTranslations, rowHasErrors, validateRows };
