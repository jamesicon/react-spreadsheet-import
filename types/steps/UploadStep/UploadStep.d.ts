import type XLSX from "xlsx";
type UploadProps = {
    onContinue: (data: XLSX.WorkBook) => Promise<void>;
};
export declare const UploadStep: ({ onContinue }: UploadProps) => import("react/jsx-runtime").JSX.Element;
export {};
