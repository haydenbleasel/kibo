"use client";

import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";

import { useSpreadsheet } from "./spreadsheet-provider";

interface EditableCellProps {
  getValue: () => any;
  row: any;
  column: any;
  table: any;
}

export const EditableCell = ({
  getValue,
  row,
  column,
  table,
}: EditableCellProps) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement>(null);
  const { editingCell, setEditingCell } = useSpreadsheet();
  const isEditing =
    editingCell?.rowId === row.original.id &&
    editingCell?.columnId === column.id;

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
    setEditingCell(null);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      table.options.meta?.updateData(row.index, column.id, value);
      setEditingCell(null);
    } else if (e.key === "Escape") {
      setValue(initialValue);
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
