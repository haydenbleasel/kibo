import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const title = "Tabs with Tables";

const users = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: i % 3 === 0 ? "Admin" : i % 2 === 0 ? "Editor" : "Viewer",
  status: i % 2 === 0 ? "Active" : "Inactive",
}));

const Example = () => (
  <Tabs className="w-full max-w-2xl" defaultValue="all">
    <TabsList>
      <TabsTrigger value="all">All Users</TabsTrigger>
      <TabsTrigger value="active">Active</TabsTrigger>
      <TabsTrigger value="inactive">Inactive</TabsTrigger>
    </TabsList>
    <TabsContent value="all">
      <div className="rounded-lg border bg-card shadow-sm">
        <ScrollArea className="h-[400px]">
          <table className="w-full">
            <thead className="border-b">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-sm">
                  Name
                </th>
                <th className="px-4 py-3 text-left font-medium text-sm">
                  Email
                </th>
                <th className="px-4 py-3 text-left font-medium text-sm">
                  Role
                </th>
                <th className="px-4 py-3 text-left font-medium text-sm">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr className="border-b" key={user.id}>
                  <td className="px-4 py-3 text-sm">{user.name}</td>
                  <td className="px-4 py-3 text-muted-foreground text-sm">
                    {user.email}
                  </td>
                  <td className="px-4 py-3 text-sm">{user.role}</td>
                  <td className="px-4 py-3">
                    <Badge
                      variant={
                        user.status === "Active" ? "default" : "secondary"
                      }
                    >
                      {user.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollArea>
      </div>
    </TabsContent>
    <TabsContent value="active">
      <div className="rounded-lg border bg-card shadow-sm">
        <ScrollArea className="h-[400px]">
          <table className="w-full">
            <thead className="border-b">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-sm">
                  Name
                </th>
                <th className="px-4 py-3 text-left font-medium text-sm">
                  Email
                </th>
                <th className="px-4 py-3 text-left font-medium text-sm">
                  Role
                </th>
                <th className="px-4 py-3 text-left font-medium text-sm">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {users
                .filter((user) => user.status === "Active")
                .map((user) => (
                  <tr className="border-b" key={user.id}>
                    <td className="px-4 py-3 text-sm">{user.name}</td>
                    <td className="px-4 py-3 text-muted-foreground text-sm">
                      {user.email}
                    </td>
                    <td className="px-4 py-3 text-sm">{user.role}</td>
                    <td className="px-4 py-3">
                      <Badge>Active</Badge>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </ScrollArea>
      </div>
    </TabsContent>
    <TabsContent value="inactive">
      <div className="rounded-lg border bg-card shadow-sm">
        <ScrollArea className="h-[400px]">
          <table className="w-full">
            <thead className="border-b">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-sm">
                  Name
                </th>
                <th className="px-4 py-3 text-left font-medium text-sm">
                  Email
                </th>
                <th className="px-4 py-3 text-left font-medium text-sm">
                  Role
                </th>
                <th className="px-4 py-3 text-left font-medium text-sm">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {users
                .filter((user) => user.status === "Inactive")
                .map((user) => (
                  <tr className="border-b" key={user.id}>
                    <td className="px-4 py-3 text-sm">{user.name}</td>
                    <td className="px-4 py-3 text-muted-foreground text-sm">
                      {user.email}
                    </td>
                    <td className="px-4 py-3 text-sm">{user.role}</td>
                    <td className="px-4 py-3">
                      <Badge variant="secondary">Inactive</Badge>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </ScrollArea>
      </div>
    </TabsContent>
  </Tabs>
);

export default Example;
