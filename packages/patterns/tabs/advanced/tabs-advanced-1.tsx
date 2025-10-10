import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const title = "Tabs with Badge Counts";

const Example = () => (
  <Tabs className="w-full max-w-2xl" defaultValue="inbox">
    <TabsList>
      <TabsTrigger value="inbox">
        Inbox
        <Badge className="ml-2" variant="secondary">
          12
        </Badge>
      </TabsTrigger>
      <TabsTrigger value="unread">
        Unread
        <Badge className="ml-2">5</Badge>
      </TabsTrigger>
      <TabsTrigger value="archived">
        Archived
        <Badge className="ml-2" variant="secondary">
          48
        </Badge>
      </TabsTrigger>
      <TabsTrigger value="spam">
        Spam
        <Badge className="ml-2" variant="secondary">
          3
        </Badge>
      </TabsTrigger>
    </TabsList>
    <TabsContent value="inbox">
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h3 className="mb-4 font-semibold text-lg">Inbox (12)</h3>
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div className="rounded-md border p-4" key={i}>
              <div className="mb-2 flex items-start justify-between">
                <div>
                  <p className="font-medium text-sm">Message {i + 1}</p>
                  <p className="text-muted-foreground text-xs">
                    sender{i + 1}@example.com
                  </p>
                </div>
                <Badge variant={i === 0 ? "default" : "secondary"}>
                  {i === 0 ? "Unread" : "Read"}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm">
                This is a preview of message {i + 1} in your inbox...
              </p>
            </div>
          ))}
        </div>
      </div>
    </TabsContent>
    <TabsContent value="unread">
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h3 className="mb-4 font-semibold text-lg">Unread Messages (5)</h3>
        <div className="space-y-3">
          {Array.from({ length: 2 }).map((_, i) => (
            <div className="rounded-md border p-4" key={i}>
              <div className="mb-2 flex items-start justify-between">
                <div>
                  <p className="font-medium text-sm">Unread Message {i + 1}</p>
                  <p className="text-muted-foreground text-xs">
                    sender{i + 1}@example.com
                  </p>
                </div>
                <Badge>Unread</Badge>
              </div>
              <p className="text-muted-foreground text-sm">
                This is an unread message preview...
              </p>
            </div>
          ))}
        </div>
      </div>
    </TabsContent>
    <TabsContent value="archived">
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h3 className="mb-4 font-semibold text-lg">Archived Messages (48)</h3>
        <p className="text-muted-foreground text-sm">
          View all your archived messages here. These messages have been moved
          out of your inbox for safekeeping.
        </p>
      </div>
    </TabsContent>
    <TabsContent value="spam">
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h3 className="mb-4 font-semibold text-lg">Spam Messages (3)</h3>
        <p className="text-muted-foreground text-sm">
          Messages identified as spam are automatically moved here. Review them
          to ensure nothing was incorrectly filtered.
        </p>
      </div>
    </TabsContent>
  </Tabs>
);

export default Example;
