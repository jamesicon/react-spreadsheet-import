import { ValidationError, type ObjectSchema } from "yup";
import type { Field, FieldError, ImportedRow, RowErrors, RowHook } from "../types";

interface ValidateOpts<Key extends string> {
  rows: Array<Partial<Record<Key, string>>>;
  fields: ReadonlyArray<Field<Key>>;
  schema?: ObjectSchema<Partial<Record<Key, string>>>;
  rowHook?: RowHook<Key>;
}

export async function validateRows<Key extends string>(opts: ValidateOpts<Key>): Promise<Array<ImportedRow<Key>>> {
  const { rows, fields, schema, rowHook } = opts;

  const uniqueFields = fields.filter((f) => f.unique);

  // First pass: validate against Yup + run row hooks. Collect errors per row.
  const out: Array<ImportedRow<Key>> = [];
  for (let i = 0; i < rows.length; i++) {
    let values = { ...rows[i]! } as Partial<Record<Key, string>>;
    const errors: RowErrors<Key> = {};

    if (schema) {
      try {
        await schema.validate(values, { abortEarly: false });
      } catch (e) {
        if (e instanceof ValidationError) {
          for (const inner of e.inner.length ? e.inner : [e]) {
            const path = inner.path as Key | undefined;
            if (!path) continue;
            if (errors[path]) continue;
            errors[path] = { message: inner.message, level: "error" };
          }
        } else {
          throw e;
        }
      }
    }

    if (rowHook) {
      const addError = (k: Key, err: FieldError) => {
        errors[k] = err;
      };
      values = rowHook(values, addError, rows) ?? values;
    }

    out.push({
      ...values,
      __index: String(i),
      __errors: Object.keys(errors).length ? errors : undefined,
    });
  }

  // Second pass: cross-row uniqueness checks.
  if (uniqueFields.length) {
    for (const f of uniqueFields) {
      const seen = new Map<string, number>();
      out.forEach((r, idx) => {
        const v = (r as any)[f.key] as string | undefined;
        if (v === undefined || v === "") return;
        const prev = seen.get(v);
        if (prev !== undefined) {
          const msg = f.uniqueErrorMessage ?? `${f.label} must be unique`;
          markError(out[prev]!, f.key, msg);
          markError(out[idx]!, f.key, msg);
        } else {
          seen.set(v, idx);
        }
      });
    }
  }

  return out;
}

function markError<Key extends string>(row: ImportedRow<Key>, key: Key, message: string) {
  const existing = (row.__errors ?? {}) as RowErrors<Key>;
  existing[key] = { message, level: "error" };
  row.__errors = existing;
}

export function rowHasErrors<Key extends string>(row: ImportedRow<Key>): boolean {
  if (!row.__errors) return false;
  for (const k in row.__errors) {
    if (row.__errors[k]?.level === "error") return true;
  }
  return false;
}
