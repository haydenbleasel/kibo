"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";

import type { ColumnInfo, NavigationMap } from "../lib/spreadsheet-utils";
import type { ColumnDef, Table } from "@tanstack/react-table";
import { createNavigationMap } from "../lib/spreadsheet-utils";

type SpreadsheetRow = Record<string, any>;

interface SpreadsheetContextType<TData extends SpreadsheetRow> {
  data: TData[];
  setData: React.Dispatch<React.SetStateAction<TData[]>>;
  table: Table<TData>;
  columnMeta: ColumnInfo[];
  selectedCells: Set<string>;
  setSelectedCells: React.Dispatch<React.SetStateAction<Set<string>>>;
  editingCell: { rowId: string; columnId: string } | null;
  setEditingCell: React.Dispatch<
    React.SetStateAction<{ rowId: string; columnId: string } | null>
  >;
  isDragging: boolean;
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
  dragStartCell: { rowId: string; columnId: string } | null;
  setDragStartCell: React.Dispatch<
    React.SetStateAction<{ rowId: string; columnId: string } | null>
  >;
  columnWidths: Record<string, number>;
  setColumnWidths: React.Dispatch<React.SetStateAction<Record<string, number>>>;
  addRow: () => void;
  deleteRow: (rowId: string) => void;
  updateData: (rowId: string, columnId: string, value: any) => void;
  clearSelectedCells: () => void;
  tableContainerRef: React.RefObject<HTMLDivElement | null>;
  dragLineRef: React.RefObject<HTMLDivElement | null>;
  dragLineVisible: boolean;
  setDragLineVisible: React.Dispatch<React.SetStateAction<boolean>>;
  navigationMap: Map<string, NavigationMap>;
}

const SpreadsheetContext = createContext<
  SpreadsheetContextType<SpreadsheetRow> | undefined
>(undefined);

const getColumnId = <TData extends SpreadsheetRow>(
  column: ColumnDef<TData, any>
) => {
  if (typeof column.id === "string" && column.id) {
    return column.id;
  }
  if (
    typeof (column as any).accessorKey === "string" &&
    (column as any).accessorKey
  ) {
    return (column as any).accessorKey;
  }
  return "";
};

interface SpreadsheetProviderProps<TData extends SpreadsheetRow> {
  children: React.ReactNode;
  columns: ColumnDef<TData, any>[];
  initialData?: TData[];
  initialColumnWidths?: Record<string, number>;
  createRow?: (rowIndex: number) => TData;
  clearCellValue?: (options: {
    row: TData;
    columnId: string;
    value: any;
  }) => any;
}

export function SpreadsheetProvider<TData extends SpreadsheetRow>({
  children,
  columns,
  initialData,
  initialColumnWidths,
  createRow,
  clearCellValue,
}: SpreadsheetProviderProps<TData>) {
  const [data, setData] = useState<TData[]>(() => initialData ?? []);
  const [selectedCells, setSelectedCells] = useState<Set<string>>(new Set());
  const [editingCell, setEditingCell] = useState<{
    rowId: string;
    columnId: string;
  } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartCell, setDragStartCell] = useState<{
    rowId: string;
    columnId: string;
  } | null>(null);
  const [columnWidths, setColumnWidths] = useState<Record<string, number>>(
    () => {
      const initialWidths: Record<string, number> = {};
      columns.forEach((column) => {
        const id = getColumnId(column);
        if (id) {
          initialWidths[id] = initialColumnWidths?.[id] ?? 150;
        }
      });
      return initialWidths;
    }
  );
  const [dragLineVisible, setDragLineVisible] = useState(false);
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const dragLineRef = useRef<HTMLDivElement>(null);

  const updateData = useCallback(
    (rowId: string, columnId: string, value: any) => {
      setData((old) =>
        old.map((row) => {
          if (row.id === rowId) {
            return {
              ...row,
              [columnId]: value,
            };
          }
          return row;
        })
      );
    },
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      updateData: (rowIndex: number, columnId: string, value: any) => {
        const row = data[rowIndex];
        if (row) {
          updateData(row.id, columnId, value);
        }
      },
    },
  });

  const columnMeta = useMemo<ColumnInfo[]>(() => {
    return table.getAllLeafColumns().map((column) => ({
      id: column.id,
      accessorKey:
        typeof (column.columnDef as any).accessorKey === "string"
          ? (column.columnDef as any).accessorKey
          : column.id,
    }));
  }, [table]);

  const navigationMap = useMemo(() => {
    return createNavigationMap(data, columnMeta);
  }, [data, columnMeta]);

  useEffect(() => {
    setColumnWidths((prev) => {
      const next: Record<string, number> = {};
      columnMeta.forEach(({ id }) => {
        if (id) {
          next[id] = prev[id] ?? initialColumnWidths?.[id] ?? 150;
        }
      });
      return next;
    });
  }, [columnMeta, initialColumnWidths]);

  const addRow = useCallback(() => {
    setData((old) => {
      const nextRow = createRow?.(old.length) ?? ({} as TData);
      return [...old, nextRow];
    });
  }, [createRow]);

  const deleteRow = useCallback((rowId: string) => {
    setData((old) => old.filter((row) => row.id !== rowId));
  }, []);

  const clearSelectedCells = useCallback(() => {
    if (selectedCells.size === 0) return;

    setData((old) => {
      const newData = [...old];
      selectedCells.forEach((cellKey) => {
        const [rowId, columnId] = cellKey.split(":");
        const rowIndex = newData.findIndex((row) => row.id === rowId);

        if (rowIndex >= 0 && rowIndex < newData.length) {
          const currentRow = newData[rowIndex];
          newData[rowIndex] = {
            ...currentRow,
            [columnId]: clearCellValue
              ? clearCellValue({
                  row: currentRow,
                  columnId,
                  value: currentRow?.[columnId],
                })
              : "",
          };
        }
      });
      return newData;
    });
  }, [clearCellValue, selectedCells]);

  const value: SpreadsheetContextType<TData> = {
    data,
    setData,
    table,
    columnMeta,
    selectedCells,
    setSelectedCells,
    editingCell,
    setEditingCell,
    isDragging,
    setIsDragging,
    dragStartCell,
    setDragStartCell,
    columnWidths,
    setColumnWidths,
    addRow,
    deleteRow,
    updateData,
    clearSelectedCells,
    tableContainerRef,
    dragLineRef,
    dragLineVisible,
    setDragLineVisible,
    navigationMap,
  };

  return (
    <SpreadsheetContext.Provider value={value as any}>
      {children}
    </SpreadsheetContext.Provider>
  );
}

export const useSpreadsheet = <TData extends SpreadsheetRow>() => {
  const context = useContext(SpreadsheetContext);
  if (context === undefined) {
    throw new Error("useSpreadsheet must be used within a SpreadsheetProvider");
  }
  return context as SpreadsheetContextType<TData>;
};
export type { SpreadsheetRow, SpreadsheetProviderProps };
