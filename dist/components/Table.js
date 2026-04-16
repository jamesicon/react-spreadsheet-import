import { jsx } from 'react/jsx-runtime';
import DataGrid from 'react-data-grid';
import 'react-data-grid/lib/styles.css';

const Table = ({ className, ...props }) => {
    return jsx(DataGrid, { className: "rdg-light " + className || "", ...props });
};

export { Table };
