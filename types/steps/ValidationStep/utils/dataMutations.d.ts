import type { Data, Fields, RowHook, TableHook } from "../../../types";
import type { Meta } from "../types";
export declare const addErrorsAndRunHooks: <T extends string>(data: (Data<T> & Partial<Meta>)[], fields: Fields<T>, rowHook?: RowHook<T>, tableHook?: TableHook<T>) => (Data<T> & Meta)[];
