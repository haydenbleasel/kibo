"use client";

import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import type {
  Cell,
  Column,
  Row,
  Table,
  TableMeta,
} from "@tanstack/react-table";

import { useSpreadsheet } from "./spreadsheet-provider";

interface SpreadsheetRow {
  id: string;
  [key: string]: unknown;
}

interface SpreadsheetTableMeta<TData extends SpreadsheetRow>
  extends TableMeta<TData> {
  updateData?: (rowIndex: number, columnId: string, value: unknown) => void;
}

interface EditableCellProps<TData extends SpreadsheetRow = SpreadsheetRow> {
  getValue: () => unknown;
  row: Row<TData>;
  column: Column<TData, unknown>;
  table: Table<TData>;
}

export const EditableCell = <TData extends SpreadsheetRow = SpreadsheetRow>({
  getValue,
  row,
  column,
  table,
}: EditableCellProps<TData>) => {
  const initialValue = getValue();
  const [value, setValue] = useState<string>(String(initialValue ?? ""));
  const inputRef = useRef<HTMLInputElement>(null);
  const { editingCell, setEditingCell } = useSpreadsheet();
  const isEditing =
    editingCell?.rowId === row.original.id &&
    editingCell?.columnId === column.id;

  useEffect(() => {
    setValue(String(initialValue ?? ""));
  }, [initialValue]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const onBlur = () => {
    (table.options.meta as SpreadsheetTableMeta<TData>)?.updateData?.(
      row.index,
      column.id,
      value
    );
    setEditingCell(null);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      (table.options.meta as SpreadsheetTableMeta<TData>)?.updateData?.(
        row.index,
        column.id,
        value
      );
      setEditingCell(null);
    } else if (e.key === "Escape") {
      setValue(String(initialValue ?? ""));
      setEditingCell(null);
    }
    e.stopPropagation();
  };

  if (isEditing) {
    return (
      <Input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        className="h-8 w-full rounded-none border-0 bg-transparent p-1 text-sm focus-visible:ring-blue-600/20 dark:focus-visible:ring-blue-400/30"
        style={{ minWidth: "120px" }}
      />
    );
  }

  return (
    <div className="h-8 w-full p-1">
      <span className="text-foreground block truncate text-sm" title={value}>
        {value}
      </span>
    </div>
  );
};
