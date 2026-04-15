import { type MatchedSelectColumn, type MatchedSelectOptionsColumn } from "../MatchColumnsStep";
export declare const setSubColumn: <T>(oldColumn: MatchedSelectColumn<T> | MatchedSelectOptionsColumn<T>, entry: string, value: string) => MatchedSelectColumn<T> | MatchedSelectOptionsColumn<T>;
