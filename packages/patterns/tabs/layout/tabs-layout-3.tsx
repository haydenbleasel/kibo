import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const title = "Scrollable Tabs";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Example = () => (
  <Tabs className="w-full max-w-md" defaultValue="january">
    <ScrollArea className="w-full whitespace-nowrap rounded-md">
      <TabsList>
        {months.map((month) => (
          <TabsTrigger key={month} value={month.toLowerCase()}>
            {month}
          </TabsTrigger>
        ))}
      </TabsList>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
    {months.map((month) => (
      <TabsContent key={month} value={month.toLowerCase()}>
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h3 className="mb-2 font-semibold text-lg">{month} 2024</h3>
          <p className="text-muted-foreground text-sm">
            View statistics and activity for {month}. Track your progress,
            goals, and achievements throughout the month.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="rounded-md border p-3">
              <p className="text-muted-foreground text-xs">Total Tasks</p>
              <p className="mt-1 font-semibold text-2xl">
                {Math.floor(Math.random() * 50) + 10}
              </p>
            </div>
            <div className="rounded-md border p-3">
              <p className="text-muted-foreground text-xs">Completed</p>
              <p className="mt-1 font-semibold text-2xl">
                {Math.floor(Math.random() * 40) + 5}
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
    ))}
  </Tabs>
);

export default Example;
