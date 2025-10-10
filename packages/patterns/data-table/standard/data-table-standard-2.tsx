"use client";

import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import * as React from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const title = "Data Table with Filters";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
};

const data: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "Developer",
    status: "Active",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Designer",
    status: "Active",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Manager",
    status: "Inactive",
  },
  {
    id: "4",
    name: "Alice Williams",
    email: "alice@example.com",
    role: "Developer",
    status: "Active",
  },
  {
    id: "5",
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "Designer",
    status: "Active",
  },
];

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => <div>{row.getValue("role")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div>{row.getValue("status")}</div>,
  },
];

const Example = () => {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const table = useReactTable({
    data,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  return (
    <div className="w-full max-w-4xl">
      <div className="flex items-center gap-4 py-4">
        <Input
          className="max-w-xs bg-background"
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          placeholder="Filter by name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
        />
        <Input
          className="max-w-xs bg-background"
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          placeholder="Filter by email..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
        />
      </div>
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
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
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
  );
};

export default Example;
