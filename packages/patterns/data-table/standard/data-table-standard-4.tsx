"use client";

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const title = "Paginated Data Table";

type Transaction = {
  id: string;
  description: string;
  amount: number;
  date: string;
  status: string;
};

const data: Transaction[] = [
  {
    id: "TXN-001",
    description: "Payment received",
    amount: 500,
    date: "2024-01-15",
    status: "Completed",
  },
  {
    id: "TXN-002",
    description: "Subscription renewal",
    amount: 29,
    date: "2024-01-16",
    status: "Completed",
  },
  {
    id: "TXN-003",
    description: "Refund processed",
    amount: -150,
    date: "2024-01-17",
    status: "Completed",
  },
  {
    id: "TXN-004",
    description: "Product purchase",
    amount: 89.99,
    date: "2024-01-18",
    status: "Pending",
  },
  {
    id: "TXN-005",
    description: "Service fee",
    amount: 12,
    date: "2024-01-19",
    status: "Completed",
  },
  {
    id: "TXN-006",
    description: "Payment received",
    amount: 750,
    date: "2024-01-20",
    status: "Completed",
  },
  {
    id: "TXN-007",
    description: "Withdrawal",
    amount: -200,
    date: "2024-01-21",
    status: "Pending",
  },
  {
    id: "TXN-008",
    description: "Deposit",
    amount: 1000,
    date: "2024-01-22",
    status: "Completed",
  },
];

const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div className="font-medium">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => <div>{row.getValue("description")}</div>,
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => <div>{row.getValue("date")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div>{row.getValue("status")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];

const Example = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
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
      <div className="flex items-center justify-between py-4">
        <div className="text-muted-foreground text-sm">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center gap-2">
          <Button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            size="sm"
            variant="outline"
          >
            Previous
          </Button>
          <Button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            size="sm"
            variant="outline"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Example;
