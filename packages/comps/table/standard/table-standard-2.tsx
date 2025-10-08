import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const title = "Table with Avatar";

const users = [
  {
    name: "Hayden Bleasel",
    email: "h****n@vercel.com",
    role: "Product Designer",
    avatar: "https://github.com/haydenbleasel.png",
    initials: "HB",
  },
  {
    name: "shadcn",
    email: "s****n@vercel.com",
    role: "Developer",
    avatar: "https://github.com/shadcn.png",
    initials: "SH",
  },
  {
    name: "Lee Robinson",
    email: "l****b@vercel.com",
    role: "VP of Product",
    avatar: "https://github.com/leerob.png",
    initials: "LR",
  },
  {
    name: "Guillermo Rauch",
    email: "r****g@vercel.com",
    role: "CEO",
    avatar: "https://github.com/rauchg.png",
    initials: "GR",
  },
];

const Example = () => (
  <div className="w-full max-w-4xl rounded-md border bg-background">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.email}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage alt={user.name} src={user.avatar} />
                  <AvatarFallback>{user.initials}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{user.name}</span>
              </div>
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default Example;
