"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ResizeHandleProps {
  columnId: string;
  columnWidths: Record<string, number>;
  handleColumnResize: (columnId: string, width: number) => void;
  tableContainerRef: React.RefObject<HTMLDivElement | null>;
  dragLineRef: React.RefObject<HTMLDivElement | null>;
  setDragLineVisible: (visible: boolean) => void;
  className?: string;
}

export const ResizeHandle = React.forwardRef<HTMLDivElement, ResizeHandleProps>(
  (
    {
      columnId,
      columnWidths,
      handleColumnResize,
      tableContainerRef,
      dragLineRef,
      setDragLineVisible,
      className,
    },
    ref
  ) => {
    const [isResizing, setIsResizing] = useState(false);
    const startXRef = useRef(0);
    const startWidthRef = useRef(0);
    const columnStartXRef = useRef(0);
    const currentMouseXRef = useRef(0);

    const handleMouseDown = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsResizing(true);
      setDragLineVisible(true);
      startXRef.current = e.clientX;
      startWidthRef.current = columnWidths[columnId];

      const headerElement = e.currentTarget.closest(
        "[data-column-id]"
      ) as HTMLElement;
      if (headerElement) {
        const rect = headerElement.getBoundingClientRect();
        const tableRect = tableContainerRef.current?.getBoundingClientRect();
        if (tableRect) {
          columnStartXRef.current = rect.left - tableRect.left;
          const initialDragX =
            columnStartXRef.current + startWidthRef.current - 2; // -2px to center on the 4px wide handle
          if (dragLineRef.current) {
            dragLineRef.current.style.left = `${initialDragX}px`;
          }
        }
      }

      const handleMouseMove = (e: MouseEvent) => {
        currentMouseXRef.current = e.clientX;
        const deltaX = e.clientX - startXRef.current;
        const newWidth = Math.max(60, startWidthRef.current + deltaX);
        const dragX = columnStartXRef.current + newWidth - 2; // Keep drag line centered on resize handle position

        if (dragLineRef.current) {
          dragLineRef.current.style.left = `${dragX}px`;
        }
      };

      const handleMouseUp = () => {
        setIsResizing(false);
        setDragLineVisible(false);
        const deltaX = currentMouseXRef.current - startXRef.current;
        const newWidth = Math.max(60, startWidthRef.current + deltaX);
        handleColumnResize(columnId, newWidth);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "hover:bg-primary/50 dark:hover:bg-primary/60 absolute top-0 right-0 h-full w-1 cursor-col-resize transition-colors",
          isResizing && "bg-primary dark:bg-primary/80",
          className
        )}
        onMouseDown={handleMouseDown}
      />
    );
  }
);

ResizeHandle.displayName = "ResizeHandle";
