import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const title = "Both Orientations";

const Example = () => (
  <ScrollArea className="h-[400px] w-full max-w-md rounded-md border bg-background">
    <div className="w-max p-4">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left font-medium">Name</th>
            <th className="px-4 py-2 text-left font-medium">Email</th>
            <th className="px-4 py-2 text-left font-medium">Role</th>
            <th className="px-4 py-2 text-left font-medium">Department</th>
            <th className="px-4 py-2 text-left font-medium">Location</th>
            <th className="px-4 py-2 text-left font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 20 }).map((_, i) => (
            <tr className="border-b" key={i}>
              <td className="px-4 py-2 text-sm">User {i + 1}</td>
              <td className="px-4 py-2 text-muted-foreground text-sm">
                user{i + 1}@example.com
              </td>
              <td className="px-4 py-2 text-sm">
                {i % 3 === 0 ? "Admin" : i % 2 === 0 ? "Editor" : "Viewer"}
              </td>
              <td className="px-4 py-2 text-sm">
                {i % 4 === 0
                  ? "Engineering"
                  : i % 3 === 0
                    ? "Design"
                    : i % 2 === 0
                      ? "Marketing"
                      : "Sales"}
              </td>
              <td className="px-4 py-2 text-sm">
                {i % 2 === 0 ? "San Francisco" : "New York"}
              </td>
              <td className="px-4 py-2 text-sm">
                {i % 2 === 0 ? "Active" : "Inactive"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <ScrollBar orientation="horizontal" />
    <ScrollBar orientation="vertical" />
  </ScrollArea>
);

export default Example;
