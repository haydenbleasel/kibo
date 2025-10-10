import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const title = "Striped Table";

const transactions = [
  {
    id: "TXN-001",
    description: "Payment received",
    amount: "$500.00",
    date: "2024-01-15",
  },
  {
    id: "TXN-002",
    description: "Subscription renewal",
    amount: "$29.00",
    date: "2024-01-16",
  },
  {
    id: "TXN-003",
    description: "Refund processed",
    amount: "-$150.00",
    date: "2024-01-17",
  },
  {
    id: "TXN-004",
    description: "Product purchase",
    amount: "$89.99",
    date: "2024-01-18",
  },
  {
    id: "TXN-005",
    description: "Service fee",
    amount: "$12.00",
    date: "2024-01-19",
  },
];

const Example = () => (
  <div className="w-full max-w-4xl rounded-md border bg-background">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction, index) => (
          <TableRow
            className={index % 2 === 0 ? "bg-muted/50" : ""}
            key={transaction.id}
          >
            <TableCell className="font-medium">{transaction.id}</TableCell>
            <TableCell>{transaction.description}</TableCell>
            <TableCell>{transaction.date}</TableCell>
            <TableCell className="text-right">{transaction.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default Example;
