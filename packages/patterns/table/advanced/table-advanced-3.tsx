import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const title = "Vertical Table";

const userInfo = [
  { label: "Full Name", value: "John Doe" },
  { label: "Email", value: "john.doe@example.com" },
  { label: "Phone", value: "+1 (555) 123-4567" },
  { label: "Location", value: "New York, NY" },
  { label: "Joined", value: "January 15, 2024" },
  { label: "Role", value: "Administrator" },
];

const Example = () => (
  <div className="w-full max-w-md rounded-md border bg-background">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/3">Field</TableHead>
          <TableHead>Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {userInfo.map((info) => (
          <TableRow key={info.label}>
            <TableCell className="font-medium">{info.label}</TableCell>
            <TableCell>{info.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default Example;
