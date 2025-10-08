"use client";

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const title = "Expandable Sub-Rows";

type Project = {
  id: string;
  name: string;
  status: string;
  tasks?: Task[];
};

type Task = {
  id: string;
  name: string;
  assignee: string;
  status: string;
};

const data: Project[] = [
  {
    id: "1",
    name: "Website Redesign",
    status: "In Progress",
    tasks: [
      { id: "1-1", name: "Design mockups", assignee: "John", status: "Done" },
      {
        id: "1-2",
        name: "Frontend dev",
        assignee: "Jane",
        status: "In Progress",
      },
      { id: "1-3", name: "Review & QA", assignee: "Bob", status: "Pending" },
    ],
  },
  {
    id: "2",
    name: "Mobile App",
    status: "Planning",
    tasks: [
      { id: "2-1", name: "User research", assignee: "Alice", status: "Done" },
      {
        id: "2-2",
        name: "Wireframes",
        assignee: "Charlie",
        status: "In Progress",
      },
    ],
  },
  {
    id: "3",
    name: "API Integration",
    status: "Completed",
    tasks: [
      { id: "3-1", name: "API design", assignee: "Dave", status: "Done" },
      { id: "3-2", name: "Implementation", assignee: "Eve", status: "Done" },
      { id: "3-3", name: "Testing", assignee: "Frank", status: "Done" },
    ],
  },
];

const columns: ColumnDef<Project>[] = [
  {
    id: "expander",
    header: () => null,
    cell: ({ row }) => {
      return row.original.tasks ? (
        <Button
          className="h-8 w-8 p-0"
          onClick={() => row.toggleExpanded()}
          size="sm"
          variant="ghost"
        >
          {row.getIsExpanded() ? (
            <ChevronDownIcon className="size-4" />
          ) : (
            <ChevronRightIcon className="size-4" />
          )}
        </Button>
      ) : null;
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div>{row.getValue("status")}</div>,
  },
];

const Example = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand: (row) => !!row.original.tasks,
  });

  return (
    <div className="w-full max-w-4xl">
      <div className="rounded-md border bg-background">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <React.Fragment key={row.id}>
                  <TableRow>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                  {row.getIsExpanded() && row.original.tasks && (
                    <TableRow>
                      <TableCell colSpan={columns.length}>
                        <div className="rounded-md bg-muted/50 p-4">
                          <div className="space-y-2">
                            {row.original.tasks.map((task) => (
                              <div
                                className="flex items-center gap-4 text-sm"
                                key={task.id}
                              >
                                <div className="flex-1 font-medium">
                                  {task.name}
                                </div>
                                <div className="text-muted-foreground">
                                  {task.assignee}
                                </div>
                                <div>{task.status}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell
                  className="h-24 text-center"
                  colSpan={columns.length}
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Example;
