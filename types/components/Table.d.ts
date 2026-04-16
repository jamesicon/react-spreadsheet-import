import { type DataGridProps } from "react-data-grid";
import "react-data-grid/lib/styles.css";
interface Props<Data> extends DataGridProps<Data> {
    rowHeight?: number;
    hiddenHeader?: boolean;
}
export declare const Table: <Data>({ className, ...props }: Props<Data>) => import("react/jsx-runtime").JSX.Element;
export {};
