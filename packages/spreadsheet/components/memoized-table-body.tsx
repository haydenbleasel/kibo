"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { flexRender } from "@tanstack/react-table";
import { MoreVerticalIcon } from "lucide-react";

interface MemoizedTableBodyProps {
  virtualItems: any[];
  table: any;
  data: any[];
  selectedCells: Set<string>;
  getRowCells: (rowId: string) => string[];
  handleMouseDown: (
    e: React.MouseEvent,
    rowId: string,
    columnId: string
  ) => void;
  handleMouseMove: (
    e: React.MouseEvent,
    rowId: string,
    columnId: string
  ) => void;
  deleteRow: (rowId: string) => void;
}

export const MemoizedTableBody = React.memo(
  ({
    virtualItems,
    table,
    data,
    selectedCells,
    getRowCells,
    handleMouseDown,
    handleMouseMove,
    deleteRow,
  }: MemoizedTableBodyProps) => (
    <>
      {virtualItems.map((virtualRow) => {
        const row = table.getRowModel().rows[virtualRow.index];
        const rowIndex = virtualRow.index;
        const rowId = data[rowIndex]?.id;
        if (!rowId) return null;

        const rowCells = getRowCells(rowId);
        const isRowSelected = rowCells.every((cell) => selectedCells.has(cell));

        return (
          <div
            key={row.id}
            className={cn(
              "hover:bg-muted/30 dark:hover:bg-muted/20 absolute top-0 left-0 w-full transition-colors",
              isRowSelected && "bg-muted/50 dark:bg-muted/40"
            )}
            style={{
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            <div className="flex h-full">
              {/* Row number */}
              <div
                data-row-number
                className={cn(
                  "border-border bg-muted/30 text-muted-foreground hover:bg-muted/50 dark:hover:bg-muted/40 flex h-9 w-12 cursor-default items-center justify-center border-r border-b font-mono text-xs transition-colors",
                  isRowSelected && "bg-muted dark:bg-muted/80"
                )}
                onMouseDown={(e) => handleMouseDown(e, rowId, "")}
                onMouseMove={(e) => handleMouseMove(e, rowId, "")}
              >
                {rowIndex + 1}
              </div>
              {row.getVisibleCells().map((cell: any) => {
                const cellKey = `${rowId}:${cell.column.id}`;
                const isCellSelected = selectedCells.has(cellKey);

                return (
                  <div
                    key={cell.id}
                    className={cn(
                      "border-border relative flex h-9 cursor-default items-center border-r border-b transition-colors",
                      isCellSelected && "bg-blue-50 dark:bg-blue-950/50"
                    )}
                    style={{
                      width: `calc(var(--col-${cell.column.id}-size) * 1px)`,
                    }}
                    onMouseDown={(e) =>
                      handleMouseDown(e, rowId, cell.column.id)
                    }
                    onMouseMove={(e) =>
                      handleMouseMove(e, rowId, cell.column.id)
                    }
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                );
              })}
              {/* Delete button */}
              <div className="border-border flex h-9 w-12 items-center justify-center border-b">
                <Button size="icon" variant="ghost">
                  <MoreVerticalIcon className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  ),
  (prevProps, nextProps) => {
    return (
      prevProps.virtualItems === nextProps.virtualItems &&
      prevProps.data === nextProps.data &&
      prevProps.selectedCells === nextProps.selectedCells &&
      prevProps.getRowCells === nextProps.getRowCells &&
      prevProps.handleMouseDown === nextProps.handleMouseDown &&
      prevProps.handleMouseMove === nextProps.handleMouseMove
    );
  }
);
