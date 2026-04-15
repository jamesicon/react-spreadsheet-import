import type { Data } from "../../types";
type Props<T extends string> = {
    initialData: Data<T>[];
};
export declare const ValidationStep: <T extends string>({ initialData }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
