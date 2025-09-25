import { useCallback } from "react";

import type { CellPosition, ColumnInfo } from "./spreadsheet-utils";
import { useSpreadsheet } from "../components/spreadsheet-provider";
import {
  getColumnCells,
  getFirstSelectedCell,
  getNextCellPosition,
  getNextCellPositionFromMap,
  getRangeCells,
  getRowCells,
  isWithinDataAttribute,
  shouldAllowEditing,
  toggleCellSelection,
  toggleColumnSelection,
  toggleRowSelection,
} from "./spreadsheet-utils";

interface UseSpreadsheetHandlersProps {
  columns: ColumnInfo[];
}

export const useSpreadsheetHandlers = ({
  columns,
}: UseSpreadsheetHandlersProps) => {
  const {
    data,
    selectedCells,
    setSelectedCells,
    editingCell,
    setEditingCell,
    isDragging,
    setIsDragging,
    dragStartCell,
    setDragStartCell,
    clearSelectedCells,
    navigationMap,
  } = useSpreadsheet();
  // Mouse down handler for all interactions
  const handleMouseDown = useCallback(
    (e: React.MouseEvent, rowId: string, columnId: string) => {
      if (e.button !== 0) return; // Only left mouse button

      const cellKey = `${rowId}:${columnId}`;

      // Handle row selection (click on row number)
      if (isWithinDataAttribute(e.target, "row-number")) {
        const rowCells = getRowCells(rowId, columns);

        if (e.ctrlKey || e.metaKey) {
          // Toggle row selection
          setSelectedCells((currentSelectedCells) => {
            const newSelection = toggleRowSelection(
              rowId,
              currentSelectedCells,
              columns,
            );
            // Exit edit mode if multiple cells are selected
            if (newSelection.size > 1 && editingCell) {
              setEditingCell(null);
            }
            return newSelection;
          });
        } else {
          // Select entire row
          const newSelection = new Set(rowCells);
          setSelectedCells(newSelection);
          // Exit edit mode if multiple cells are selected
          if (newSelection.size > 1 && editingCell) {
            setEditingCell(null);
          }
        }
        return;
      }

      // Handle column selection (click on column header)
      if (isWithinDataAttribute(e.target, "column-header")) {
        const columnCells = getColumnCells(columnId, data);

        if (e.ctrlKey || e.metaKey) {
          // Toggle column selection
          setSelectedCells((currentSelectedCells) => {
            const newSelection = toggleColumnSelection(
              columnId,
              currentSelectedCells,
              data,
            );
            // Exit edit mode if multiple cells are selected
            if (newSelection.size > 1 && editingCell) {
              setEditingCell(null);
            }
            return newSelection;
          });
        } else {
          // Select entire column
          const newSelection = new Set(columnCells);
          setSelectedCells(newSelection);
          // Exit edit mode if multiple cells are selected
          if (newSelection.size > 1 && editingCell) {
            setEditingCell(null);
          }
        }
        return;
      }

      // Handle cell selection
      if (e.ctrlKey || e.metaKey) {
        // Toggle cell selection
        setSelectedCells((currentSelectedCells) => {
          const newSelection = toggleCellSelection(
            cellKey,
            currentSelectedCells,
          );
          // Exit edit mode if multiple cells are selected
          if (newSelection.size > 1 && editingCell) {
            setEditingCell(null);
          }
          return newSelection;
        });
      } else if (e.shiftKey) {
        // Range selection
        setSelectedCells((currentSelectedCells) => {
          if (currentSelectedCells.size === 0) return new Set([cellKey]);

          const firstSelectedCell = Array.from(currentSelectedCells)[0];
          const [firstRowId, firstCol] = firstSelectedCell.split(":");
          const rangeCells = getRangeCells(
            firstRowId,
            firstCol,
            rowId,
            columnId,
            columns,
            data,
          );
          const newSelection = new Set(rangeCells);
          // Exit edit mode if multiple cells are selected
          if (newSelection.size > 1 && editingCell) {
            setEditingCell(null);
          }
          return newSelection;
        });
      } else {
        // Single cell selection
        const isCurrentlyEditing =
          editingCell?.rowId === rowId && editingCell?.columnId === columnId;
        const isCurrentlySelected =
          selectedCells.has(cellKey) && selectedCells.size === 1;

        if (isCurrentlyEditing) {
          // If clicking on the cell that's currently being edited, stop editing
          setTimeout(() => setEditingCell(null), 0);
        } else if (isCurrentlySelected) {
          // If clicking on the cell that's already selected (but not editing), start editing
          setTimeout(() => setEditingCell({ rowId, columnId }), 0);
        } else {
          // Select this cell and enter edit mode
          setSelectedCells(new Set([cellKey]));
        }
      }

      // Start drag selection for potential dragging
      setIsDragging(true);
      setDragStartCell({ rowId, columnId });
    },
    [
      selectedCells,
      columns,
      data,
      editingCell,
      setSelectedCells,
      setEditingCell,
      setIsDragging,
      setDragStartCell,
    ],
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent, rowId: string, columnId: string) => {
      if (!isDragging || !dragStartCell) return;

      // Update selection based on drag range
      const rangeCells = getRangeCells(
        dragStartCell.rowId,
        dragStartCell.columnId,
        rowId,
        columnId,
        columns,
        data,
      );
      const newSelection = new Set(rangeCells);
      setSelectedCells(newSelection);

      // Exit edit mode if multiple cells are selected during drag
      if (newSelection.size > 1 && editingCell) {
        setEditingCell(null);
      }
    },
    [
      isDragging,
      dragStartCell,
      columns,
      data,
      editingCell,
      setSelectedCells,
      setEditingCell,
    ],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setDragStartCell(null);
  }, [setIsDragging, setDragStartCell]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const firstSelectedCell = getFirstSelectedCell(selectedCells);
      if (!firstSelectedCell) return;

      const { rowId, columnId } = firstSelectedCell;

      const activeElement = document.activeElement;
      if (activeElement && activeElement.tagName === "INPUT") {
        return;
      }

      switch (e.key) {
        case "Enter":
          e.preventDefault();
          if (
            editingCell?.rowId === rowId &&
            editingCell?.columnId === columnId
          ) {
            setEditingCell(null);
          } else if (
            shouldAllowEditing(selectedCells, `${rowId}:${columnId}`)
          ) {
            // Only allow editing if exactly one cell is selected
            setEditingCell({ rowId, columnId });
          }
          break;
        case "ArrowUp": {
          e.preventDefault();
          const currentCellKey = `${rowId}:${columnId}`;
          const nextPosition = getNextCellPositionFromMap(
            currentCellKey,
            "up",
            navigationMap,
          );
          if (nextPosition) {
            const newCellKey = `${nextPosition.rowId}:${nextPosition.columnId}`;
            setSelectedCells(new Set([newCellKey]));
          }
          break;
        }
        case "ArrowDown": {
          e.preventDefault();
          const currentCellKey = `${rowId}:${columnId}`;
          const nextPosition = getNextCellPositionFromMap(
            currentCellKey,
            "down",
            navigationMap,
          );
          if (nextPosition) {
            const newCellKey = `${nextPosition.rowId}:${nextPosition.columnId}`;
            setSelectedCells(new Set([newCellKey]));
          }
          break;
        }
        case "ArrowLeft": {
          e.preventDefault();
          const currentCellKey = `${rowId}:${columnId}`;
          const nextPosition = getNextCellPositionFromMap(
            currentCellKey,
            "left",
            navigationMap,
          );
          if (nextPosition) {
            const newCellKey = `${nextPosition.rowId}:${nextPosition.columnId}`;
            setSelectedCells(new Set([newCellKey]));
          }
          break;
        }
        case "ArrowRight": {
          e.preventDefault();
          const currentCellKey = `${rowId}:${columnId}`;
          const nextPosition = getNextCellPositionFromMap(
            currentCellKey,
            "right",
            navigationMap,
          );
          if (nextPosition) {
            const newCellKey = `${nextPosition.rowId}:${nextPosition.columnId}`;
            setSelectedCells(new Set([newCellKey]));
          }
          break;
        }
        case "Tab": {
          e.preventDefault();
          const currentCellKey = `${rowId}:${columnId}`;
          const nextPosition = getNextCellPositionFromMap(
            currentCellKey,
            "tab",
            navigationMap,
          );
          if (nextPosition) {
            const newCellKey = `${nextPosition.rowId}:${nextPosition.columnId}`;
            setSelectedCells(new Set([newCellKey]));
          }
          break;
        }
        case "Escape": {
          e.preventDefault();
          if (editingCell) {
            // If editing, stop editing
            setEditingCell(null);
          } else {
            // If not editing, deselect everything
            setSelectedCells(new Set());
          }
          break;
        }
        case "Delete":
        case "Backspace": {
          e.preventDefault();
          if (selectedCells.size > 0) {
            clearSelectedCells();
          }
          break;
        }
      }
    },
    [
      selectedCells,
      columns,
      data,
      editingCell,
      setEditingCell,
      setSelectedCells,
      clearSelectedCells,
      navigationMap,
    ],
  );

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleKeyDown,
  };
};
