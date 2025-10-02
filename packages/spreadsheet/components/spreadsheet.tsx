"use client";

import React, { useCallback, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { flexRender } from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";

import { getColumnSizeVars, getRowCells } from "../lib/spreadsheet-utils";
import { useSpreadsheetHandlers } from "../lib/use-spreadsheet-handlers";
import { MemoizedTableBody } from "./memoized-table-body";
import { ResizeHandle } from "./resize-handle";
import { useSpreadsheet } from "./spreadsheet-provider";

interface SpreadsheetProps extends React.HTMLAttributes<HTMLDivElement> {
  showRowNumbers?: boolean;
  renderRowNumber?: (rowIndex: number) => React.ReactNode;
  renderRowActions?: (row: any, rowIndex: number) => React.ReactNode;
}

export const Spreadsheet = React.forwardRef<HTMLDivElement, SpreadsheetProps>(
  (
    {
      className,
      style,
      showRowNumbers = true,
      renderRowNumber,
      renderRowActions,
      ...props
    },
    ref
  ) => {
    const {
      data,
      selectedCells,
      isDragging,
      columnWidths,
      setColumnWidths,
      deleteRow,
      tableContainerRef,
      dragLineRef,
      dragLineVisible,
      setDragLineVisible,
      table,
      columnMeta,
    } = useSpreadsheet();

    const columnSizeVars = useMemo(
      () => getColumnSizeVars(columnWidths),
      [columnWidths]
    );

    const { handleMouseDown, handleMouseMove, handleMouseUp, handleKeyDown } =
      useSpreadsheetHandlers({
        columns: columnMeta,
      });

    const handleColumnResize = useCallback(
      (columnId: string, width: number) => {
        setColumnWidths((prev) => ({
          ...prev,
          [columnId]: Math.max(60, width),
        }));
      },
      [setColumnWidths]
    );

    const getRowCellsHelper = useCallback(
      (rowId: string) => {
        return getRowCells(rowId, columnMeta);
      },
      [columnMeta]
    );

    // Mouseup should be global to handle drag ending outside the spreadsheet
    useEffect(() => {
      const handleGlobalMouseUp = () => {
        handleMouseUp();
      };

      document.addEventListener("mouseup", handleGlobalMouseUp);
      return () => {
        document.removeEventListener("mouseup", handleGlobalMouseUp);
      };
    }, [handleMouseUp]);

    const rowVirtualizer = useVirtualizer({
      count: table.getRowModel().rows.length,
      getScrollElement: () => tableContainerRef.current,
      estimateSize: () => 36,
      overscan: 10,
    });

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex flex-col",
          isDragging && "select-none",
          className
        )}
        style={{ ...columnSizeVars, ...style }}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <div
          ref={dragLineRef}
          className={cn(
            "bg-primary pointer-events-none absolute top-0 bottom-0 z-50 w-0.5 transition-opacity",
            dragLineVisible ? "opacity-100" : "opacity-0"
          )}
        />

        <div className="bg-muted border-border sticky top-0 z-1 flex border-y">
          {showRowNumbers && (
            <div className="border-border bg-muted text-muted-foreground flex h-10 w-12 items-center justify-center border-r text-xs font-medium shrink-0">
              #
            </div>
          )}
          {table.getHeaderGroups()[0].headers.map((header) => (
            <div
              key={header.id}
              data-column-id={header.column.id}
              data-column-header
              className="border-border bg-muted text-muted-foreground relative flex h-10 cursor-default items-center border-r pl-1 text-left text-xs font-medium transition-colors shrink-0"
              style={{
                width: `calc(var(--col-${header.column.id}-size) * 1px)`,
              }}
              onMouseDown={(e) => handleMouseDown(e, "", header.column.id)}
              onMouseMove={(e) => handleMouseMove(e, "", header.column.id)}
            >
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              <ResizeHandle
                columnId={header.column.id}
                columnWidths={columnWidths}
                handleColumnResize={handleColumnResize}
                tableContainerRef={tableContainerRef}
                dragLineRef={dragLineRef}
                setDragLineVisible={setDragLineVisible}
              />
            </div>
          ))}
          {showRowNumbers && (
            <div className="border-border bg-muted text-muted-foreground flex h-10 w-12 items-center justify-center border-r text-xs font-medium shrink-0" />
          )}
        </div>

        <div ref={tableContainerRef} className="flex-1">
          <div
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              position: "relative",
            }}
          >
            <MemoizedTableBody
              virtualItems={rowVirtualizer.getVirtualItems()}
              table={table}
              data={data}
              selectedCells={selectedCells}
              getRowCells={getRowCellsHelper}
              handleMouseDown={handleMouseDown}
              handleMouseMove={handleMouseMove}
              deleteRow={deleteRow}
              showRowNumbers={showRowNumbers}
              renderRowNumber={renderRowNumber}
              renderRowActions={renderRowActions}
            />
          </div>
        </div>
      </div>
    );
  }
);

Spreadsheet.displayName = "Spreadsheet";
