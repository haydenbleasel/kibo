import { Lightbulb } from "lucide-react";
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

export const title = "Information with Centered Icon";

const Example = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Show Tip</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader className="items-center">
        <div className="flex size-12 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900">
          <Lightbulb className="size-6 text-yellow-600 dark:text-yellow-400" />
        </div>
        <AlertDialogTitle>Pro Tip</AlertDialogTitle>
        <AlertDialogDescription className="text-center">
          Use keyboard shortcuts to navigate faster. Press{" "}
          <kbd className="rounded bg-muted px-1.5 py-0.5 font-semibold text-xs">
            Cmd+K
          </kbd>{" "}
          to open the command palette.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogAction>Got it</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
