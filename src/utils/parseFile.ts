import ExcelJS from "exceljs";
import type { RawSheet, UploadedWorkbook } from "../types";

const CSV_TYPES = ["text/csv", "application/csv"];
const CSV_EXT = /\.csv$/i;

function cellToString(value: unknown): string {
  if (value === null || value === undefined) return "";
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "object") {
    const v = value as { text?: string; result?: unknown; richText?: { text: string }[] };
    if (typeof v.text === "string") return v.text;
    if (Array.isArray(v.richText)) return v.richText.map((r) => r.text).join("");
    if (v.result !== undefined) return cellToString(v.result);
    return "";
  }
  return String(value);
}

function worksheetToRows(ws: ExcelJS.Worksheet): RawSheet {
  const rows: RawSheet = [];
  const lastCol = ws.actualColumnCount || ws.columnCount || 0;
  ws.eachRow({ includeEmpty: true }, (row) => {
    const out: string[] = [];
    for (let i = 1; i <= lastCol; i++) {
      out.push(cellToString(row.getCell(i).value));
    }
    rows.push(out);
  });
  // Trim trailing fully-empty rows.
  while (rows.length && rows[rows.length - 1]!.every((c) => c === "")) {
    rows.pop();
  }
  return rows;
}

export async function parseFile(file: File): Promise<UploadedWorkbook> {
  const isCsv = CSV_TYPES.includes(file.type) || CSV_EXT.test(file.name);
  const buffer = await file.arrayBuffer();

  if (isCsv) {
    const text = new TextDecoder("utf-8").decode(buffer);
    const rows = splitCsv(text);
    // Trim trailing empty rows.
    while (rows.length && rows[rows.length - 1]!.every((c) => c === "")) {
      rows.pop();
    }
    return { file, sheets: [{ name: "Sheet1", rows }] };
  }

  const wb = new ExcelJS.Workbook();
  await wb.xlsx.load(buffer);
  const sheets = wb.worksheets.map((ws) => ({
    name: ws.name,
    rows: worksheetToRows(ws),
  }));
  return { file, sheets };
}

/** Minimal CSV parser handling quoted fields with commas, quotes, and newlines. */
function splitCsv(input: string): string[][] {
  const out: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;
  for (let i = 0; i < input.length; i++) {
    const c = input[i];
    if (inQuotes) {
      if (c === '"') {
        if (input[i + 1] === '"') {
          cell += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        cell += c;
      }
      continue;
    }
    if (c === '"') {
      inQuotes = true;
      continue;
    }
    if (c === ",") {
      row.push(cell);
      cell = "";
      continue;
    }
    if (c === "\n" || c === "\r") {
      if (c === "\r" && input[i + 1] === "\n") i++;
      row.push(cell);
      out.push(row);
      row = [];
      cell = "";
      continue;
    }
    cell += c;
  }
  if (cell.length > 0 || row.length > 0) {
    row.push(cell);
    out.push(row);
  }
  return out;
}
