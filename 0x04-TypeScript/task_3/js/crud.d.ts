import { RowId, RowElement } from './interface';

export declare function insertRow(row: RowElement): RowId;
export declare function deleteRow(rowId: RowId): void;
export declare function updateRow(rowId: RowId, row: RowElement): RowId;
