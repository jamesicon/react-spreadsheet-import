import type { Field } from "../../../types";
import { type Column, type MatchColumnsProps } from "../MatchColumnsStep";
export declare const setColumn: <T extends string>(oldColumn: Column<T>, field?: Field<T>, data?: MatchColumnsProps<T>["data"]) => Column<T>;
