"use client";

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const title = "Data Table with Column Visibility";

type Order = {
  id: string;
  customer: string;
  product: string;
  quantity: number;
  total: number;
  date: string;
};

const data: Order[] = [
  {
    id: "ORD-001",
    customer: "John Doe",
    product: "Laptop",
    quantity: 1,
    total: 999,
    date: "2024-01-15",
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    product: "Headphones",
    quantity: 2,
    total: 398,
    date: "2024-01-16",
  },
  {
    id: "ORD-003",
    customer: "Bob Johnson",
    product: "Keyboard",
    quantity: 1,
    total: 79,
    date: "2024-01-17",
  },
  {
    id: "ORD-004",
    customer: "Alice Williams",
    product: "Mouse",
    quantity: 3,
    total: 147,
    date: "2024-01-18",
  },
];

const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "Order ID",
    cell: ({ row }) => <div className="font-medium">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "customer",
    header: "Customer",
    cell: ({ row }) => <div>{row.getValue("customer")}</div>,
  },
  {
    accessorKey: "product",
    header: "Product",
    cell: ({ row }) => <div>{row.getValue("product")}</div>,
  },
  {
    accessorKey: "quantity",
    header: () => <div className="text-right">Quantity</div>,
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("quantity")}</div>
    ),
  },
  {
    accessorKey: "total",
    header: () => <div className="text-right">Total</div>,
    cell: ({ row }) => {
      const total = Number.parseFloat(row.getValue("total"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(total);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => <div>{row.getValue("date")}</div>,
  },
];

const Example = () => {
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      columnVisibility,
    },
  });

  return (
    <div className="w-full max-w-4xl">
      <div className="flex items-center justify-end py-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Columns <ChevronDownIcon className="ml-2 size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  checked={column.getIsVisible()}
                  className="capitalize"
                  key={column.id}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
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
