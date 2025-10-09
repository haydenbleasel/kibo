import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const title = "Full Width Tabs";

const Example = () => (
  <Tabs className="w-full max-w-md" defaultValue="all">
    <TabsList className="grid w-full grid-cols-3">
      <TabsTrigger value="all">All</TabsTrigger>
      <TabsTrigger value="active">Active</TabsTrigger>
      <TabsTrigger value="completed">Completed</TabsTrigger>
    </TabsList>
    <TabsContent value="all">
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h3 className="mb-4 font-semibold text-lg">All Tasks</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-md border p-3">
            <div className="size-2 rounded-full bg-blue-500" />
            <span className="text-sm">Review pull request #123</span>
          </div>
          <div className="flex items-center gap-3 rounded-md border p-3">
            <div className="size-2 rounded-full bg-green-500" />
            <span className="text-sm">Update documentation</span>
          </div>
          <div className="flex items-center gap-3 rounded-md border p-3">
            <div className="size-2 rounded-full bg-blue-500" />
            <span className="text-sm">Fix bug in authentication</span>
          </div>
        </div>
      </div>
    </TabsContent>
    <TabsContent value="active">
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h3 className="mb-4 font-semibold text-lg">Active Tasks</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-md border p-3">
            <div className="size-2 rounded-full bg-blue-500" />
            <span className="text-sm">Review pull request #123</span>
          </div>
          <div className="flex items-center gap-3 rounded-md border p-3">
            <div className="size-2 rounded-full bg-blue-500" />
            <span className="text-sm">Fix bug in authentication</span>
          </div>
        </div>
      </div>
    </TabsContent>
    <TabsContent value="completed">
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h3 className="mb-4 font-semibold text-lg">Completed Tasks</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-md border p-3">
            <div className="size-2 rounded-full bg-green-500" />
            <span className="text-sm">Update documentation</span>
          </div>
        </div>
      </div>
    </TabsContent>
  </Tabs>
);

export default Example;
