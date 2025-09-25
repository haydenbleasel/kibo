"use client";

import React from "react";
import { cn } from "@/lib/utils";

import { useSpreadsheet } from "./spreadsheet-provider";

export interface StatusBarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const COLUMN_COUNT = 6; // LinkedIn URL, First Name, Last Name, Email, Company, Role

export const StatusBar = React.forwardRef<HTMLDivElement, StatusBarProps>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "text-muted-foreground bg-background dark:bg-background/95 sticky bottom-0 flex items-center justify-between border-t p-2 text-xs",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
StatusBar.displayName = "StatusBar";

interface StatusBarSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const StatusBarSection = React.forwardRef<
  HTMLDivElement,
  StatusBarSectionProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-1 items-center gap-2", className)}
    {...props}
  />
));
StatusBarSection.displayName = "StatusBarSection";

export const StatusBarMessage: React.FC = () => {
  const { editingCell, selectedCells, data } = useSpreadsheet();
  const selectedCellsCount = selectedCells.size;

  if (editingCell) {
    const rowIndex = data.findIndex((row) => row.id === editingCell.rowId);
    const displayRowNumber = rowIndex !== -1 ? rowIndex + 1 : "?";

    return (
      <span>
        Editing row {displayRowNumber}, column {editingCell.columnId}
      </span>
    );
  }

  if (selectedCellsCount > 0) {
    return (
      <span>
        Selected: {selectedCellsCount} cell
        {selectedCellsCount > 1 ? "s" : ""}
      </span>
    );
  }

  return <span>Click a cell to select</span>;
};

export const StatusBarSummary: React.FC = () => {
  const { data } = useSpreadsheet();
  const rowCount = data.length;

  return (
    <span>
      {rowCount} rows × {COLUMN_COUNT} columns
    </span>
  );
};
