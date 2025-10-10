import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const title = "Table with Vertical Lines";

const projects = [
  {
    name: "Website Redesign",
    status: "In Progress",
    priority: "High",
    assignee: "John Doe",
  },
  {
    name: "Mobile App",
    status: "Planning",
    priority: "Medium",
    assignee: "Jane Smith",
  },
  {
    name: "API Integration",
    status: "Completed",
    priority: "High",
    assignee: "Bob Johnson",
  },
  {
    name: "Database Migration",
    status: "In Progress",
    priority: "Critical",
    assignee: "Alice Williams",
  },
];

const Example = () => (
  <div className="w-full max-w-4xl rounded-md border bg-background">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="border-r">Project</TableHead>
          <TableHead className="border-r">Status</TableHead>
          <TableHead className="border-r">Priority</TableHead>
          <TableHead>Assignee</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.name}>
            <TableCell className="border-r font-medium">
              {project.name}
            </TableCell>
            <TableCell className="border-r">{project.status}</TableCell>
            <TableCell className="border-r">{project.priority}</TableCell>
            <TableCell>{project.assignee}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default Example;
