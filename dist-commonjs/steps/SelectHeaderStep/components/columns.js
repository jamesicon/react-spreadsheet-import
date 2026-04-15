'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var DataGrid = require('react-data-grid');
var react = require('@chakra-ui/react');

const SELECT_COLUMN_KEY = "select-row";
function SelectCell(props) {
    const [isRowSelected, onRowSelectionChange] = DataGrid.useRowSelection();
    return (jsxRuntime.jsx(react.Radio, { bg: "white", "aria-label": "Select", isChecked: isRowSelected, onChange: (event) => {
            onRowSelectionChange({
                type: "ROW",
                row: props.row,
                checked: Boolean(event.target.checked),
                isShiftClick: event.nativeEvent.shiftKey,
            });
        } }));
}
const SelectColumn = {
    key: SELECT_COLUMN_KEY,
    name: "",
    width: 35,
    maxWidth: 35,
    resizable: false,
    sortable: false,
    frozen: true,
    cellClass: "rdg-radio",
    renderCell: SelectCell,
};
const generateSelectionColumns = (data) => {
    const longestRowLength = data.reduce((acc, curr) => (acc > curr.length ? acc : curr.length), 0);
    return [
        SelectColumn,
        ...Array.from(Array(longestRowLength), (_, index) => ({
            key: index.toString(),
            name: "",
        })),
    ];
};

exports.SelectColumn = SelectColumn;
exports.generateSelectionColumns = generateSelectionColumns;
