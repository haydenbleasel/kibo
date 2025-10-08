"use client";

import {
  type ColumnDef,
  type ColumnResizeMode,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const title = "Resizable Columns";

type Employee = {
  id: string;
  name: string;
  department: string;
  position: string;
  email: string;
  salary: number;
};

const data: Employee[] = [
  {
    id: "1",
    name: "John Doe",
    department: "Engineering",
    position: "Senior Developer",
    email: "john.doe@example.com",
    salary: 120_000,
  },
  {
    id: "2",
    name: "Jane Smith",
    department: "Design",
    position: "Product Designer",
    email: "jane.smith@example.com",
    salary: 95_000,
  },
  {
    id: "3",
    name: "Bob Johnson",
    department: "Marketing",
    position: "Marketing Manager",
    email: "bob.johnson@example.com",
    salary: 85_000,
  },
  {
    id: "4",
    name: "Alice Williams",
    department: "Engineering",
    position: "Tech Lead",
    email: "alice.williams@example.com",
    salary: 145_000,
  },
];

const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("name")}</div>
    ),
    size: 150,
  },
  {
    accessorKey: "department",
    header: "Department",
    cell: ({ row }) => <div>{row.getValue("department")}</div>,
    size: 120,
  },
  {
    accessorKey: "position",
    header: "Position",
    cell: ({ row }) => <div>{row.getValue("position")}</div>,
    size: 180,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div>{row.getValue("email")}</div>,
    size: 220,
  },
  {
    accessorKey: "salary",
    header: () => <div className="text-right">Salary</div>,
    cell: ({ row }) => {
      const salary = Number.parseFloat(row.getValue("salary"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(salary);
      return <div className="text-right font-medium">{formatted}</div>;
    },
    size: 120,
  },
];

const Example = () => {
  const [columnResizeMode] = React.useState<ColumnResizeMode>("onChange");

  const table = useReactTable({
    data,
    columns,
    columnResizeMode,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full max-w-4xl">
      <div className="overflow-hidden rounded-md border bg-background">
        <div className="overflow-x-auto">
          <Table style={{ width: table.getTotalSize() }}>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      className="relative"
                      key={header.id}
                      style={{ width: header.getSize() }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      <div
                        className={`absolute top-0 right-0 h-full w-1 cursor-col-resize touch-none select-none bg-border opacity-0 hover:opacity-100 ${
                          header.column.getIsResizing()
                            ? "bg-primary opacity-100"
                            : ""
                        }`}
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                      />
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        style={{ width: cell.column.getSize() }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
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
      <p className="mt-4 text-muted-foreground text-sm">
        Drag column edges to resize
      </p>
    </div>
  );
};

export default Example;
