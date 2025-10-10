import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const title = "Basic Tabs";

const Example = () => (
  <Tabs className="w-full max-w-md" defaultValue="overview">
    <TabsList>
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="analytics">Analytics</TabsTrigger>
      <TabsTrigger value="reports">Reports</TabsTrigger>
      <TabsTrigger value="notifications">Notifications</TabsTrigger>
    </TabsList>
    <TabsContent value="overview">
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h3 className="mb-2 font-semibold text-lg">Overview</h3>
        <p className="text-muted-foreground text-sm">
          View a comprehensive summary of your account activity, recent updates,
          and key metrics at a glance.
        </p>
      </div>
    </TabsContent>
    <TabsContent value="analytics">
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h3 className="mb-2 font-semibold text-lg">Analytics</h3>
        <p className="text-muted-foreground text-sm">
          Dive deep into your data with detailed analytics, trends, and insights
          to help you make informed decisions.
        </p>
      </div>
    </TabsContent>
    <TabsContent value="reports">
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h3 className="mb-2 font-semibold text-lg">Reports</h3>
        <p className="text-muted-foreground text-sm">
          Generate and view comprehensive reports on various aspects of your
          account performance and activity.
        </p>
      </div>
    </TabsContent>
    <TabsContent value="notifications">
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h3 className="mb-2 font-semibold text-lg">Notifications</h3>
        <p className="text-muted-foreground text-sm">
          Manage your notification preferences and view recent alerts and
          updates from your account.
        </p>
      </div>
    </TabsContent>
  </Tabs>
);

export default Example;
