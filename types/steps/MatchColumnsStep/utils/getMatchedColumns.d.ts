import type { Fields } from "../../../types";
import type { Column, Columns } from "../MatchColumnsStep";
import type { MatchColumnsProps } from "../MatchColumnsStep";
export declare const getMatchedColumns: <T extends string>(columns: Columns<T>, fields: Fields<T>, data: MatchColumnsProps<T>["data"], autoMapDistance: number) => Column<T>[];
