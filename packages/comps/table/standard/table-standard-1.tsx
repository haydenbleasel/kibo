import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const title = "Basic Table";

const users = [
  {
    name: "John Doe",
    email: "john@example.com",
    location: "New York",
    status: "Active",
    balance: "$1,234.56",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    location: "London",
    status: "Active",
    balance: "$2,345.67",
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    location: "Tokyo",
    status: "Inactive",
    balance: "$567.89",
  },
  {
    name: "Alice Williams",
    email: "alice@example.com",
    location: "Paris",
    status: "Active",
    balance: "$3,456.78",
  },
];

const Example = () => (
  <div className="w-full max-w-4xl rounded-md border bg-background">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Balance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.email}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.location}</TableCell>
            <TableCell>{user.status}</TableCell>
            <TableCell className="text-right">{user.balance}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default Example;
