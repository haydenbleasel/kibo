import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const title = "Information with Highlighted Content";

const Example = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">
        <Sparkles className="size-4" />
        What's New
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>New in Version 2.0</AlertDialogTitle>
        <AlertDialogDescription>
          Check out the latest features and improvements:
        </AlertDialogDescription>
      </AlertDialogHeader>
      <div className="space-y-2">
        <div className="rounded-lg border bg-muted/50 p-3">
          <div className="font-medium text-sm">Dark Mode</div>
          <p className="text-muted-foreground text-xs">
            Toggle between light and dark themes
          </p>
        </div>
        <div className="rounded-lg border bg-muted/50 p-3">
          <div className="font-medium text-sm">Improved Performance</div>
          <p className="text-muted-foreground text-xs">
            Up to 50% faster load times
          </p>
        </div>
        <div className="rounded-lg border bg-muted/50 p-3">
          <div className="font-medium text-sm">New Integrations</div>
          <p className="text-muted-foreground text-xs">
            Connect with your favorite tools
          </p>
        </div>
      </div>
      <AlertDialogFooter>
        <AlertDialogAction>Awesome!</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
