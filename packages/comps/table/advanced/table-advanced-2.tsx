import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const title = "Dense Table";

const logs = [
  {
    id: "1",
    event: "User login",
    user: "john@example.com",
    ip: "192.168.1.1",
    time: "10:23 AM",
  },
  {
    id: "2",
    event: "File uploaded",
    user: "jane@example.com",
    ip: "192.168.1.2",
    time: "10:25 AM",
  },
  {
    id: "3",
    event: "Settings changed",
    user: "bob@example.com",
    ip: "192.168.1.3",
    time: "10:28 AM",
  },
  {
    id: "4",
    event: "User logout",
    user: "alice@example.com",
    ip: "192.168.1.4",
    time: "10:30 AM",
  },
  {
    id: "5",
    event: "API request",
    user: "system",
    ip: "192.168.1.5",
    time: "10:31 AM",
  },
  {
    id: "6",
    event: "Database backup",
    user: "system",
    ip: "192.168.1.6",
    time: "10:32 AM",
  },
];

const Example = () => (
  <div className="w-full max-w-4xl rounded-md border bg-background">
    <Table>
      <TableHeader>
        <TableRow className="h-8">
          <TableHead className="py-2">ID</TableHead>
          <TableHead className="py-2">Event</TableHead>
          <TableHead className="py-2">User</TableHead>
          <TableHead className="py-2">IP Address</TableHead>
          <TableHead className="py-2 text-right">Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {logs.map((log) => (
          <TableRow className="h-8" key={log.id}>
            <TableCell className="py-1 text-sm">{log.id}</TableCell>
            <TableCell className="py-1 text-sm">{log.event}</TableCell>
            <TableCell className="py-1 text-sm">{log.user}</TableCell>
            <TableCell className="py-1 text-sm">{log.ip}</TableCell>
            <TableCell className="py-1 text-right text-sm">
              {log.time}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default Example;
