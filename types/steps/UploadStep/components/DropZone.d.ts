import * as XLSX from "xlsx";
type DropZoneProps = {
    onContinue: (data: XLSX.WorkBook) => void;
    isLoading: boolean;
};
export declare const DropZone: ({ onContinue, isLoading }: DropZoneProps) => import("react/jsx-runtime").JSX.Element;
export {};
