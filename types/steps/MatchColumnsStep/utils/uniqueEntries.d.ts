import type { MatchColumnsProps, MatchedOptions } from "../MatchColumnsStep";
export declare const uniqueEntries: <T extends string>(data: MatchColumnsProps<T>["data"], index: number) => Partial<MatchedOptions<T>>[];
