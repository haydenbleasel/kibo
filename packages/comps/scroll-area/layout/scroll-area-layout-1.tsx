import { ScrollArea } from "@/components/ui/scroll-area";

export const title = "Fixed Height ScrollArea";

const Example = () => (
  <div className="w-full max-w-md space-y-4">
    <div>
      <h3 className="mb-2 font-semibold text-sm">Notifications</h3>
      <ScrollArea className="h-[200px] rounded-md border bg-background">
        <div className="space-y-4 p-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div className="flex items-start gap-3" key={i}>
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <span className="font-medium text-primary text-xs">
                  {i + 1}
                </span>
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-medium text-sm leading-none">
                  Notification {i + 1}
                </p>
                <p className="text-muted-foreground text-sm">
                  This is a notification message for item {i + 1}
                </p>
                <p className="text-muted-foreground text-xs">
                  {i + 1} minutes ago
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  </div>
);

export default Example;
