import { Database } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export const title = "Destructive with Warning Badge";

const Example = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="destructive">Clear Data</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle className="flex items-center gap-2">
          <Database className="size-5" />
          Clear All Data
        </AlertDialogTitle>
        <div className="inline-flex w-fit items-center rounded-full bg-destructive/10 px-2.5 py-0.5 font-semibold text-destructive text-xs">
          Permanent Action
        </div>
        <AlertDialogDescription>
          This will permanently delete all stored data including user
          preferences, cache, and local storage. This cannot be undone.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction className="bg-destructive text-white hover:bg-destructive/90">
          Clear All Data
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
