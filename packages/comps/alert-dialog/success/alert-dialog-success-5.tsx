import { CheckCircle2 } from "lucide-react";
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

export const title = "Success with Summary Details";

const Example = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Complete Action</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="size-5 text-green-500" />
          <AlertDialogTitle>Files Uploaded Successfully</AlertDialogTitle>
        </div>
        <AlertDialogDescription>
          All files have been uploaded and processed.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <div className="rounded-lg border bg-green-50 p-4 dark:bg-green-950">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="text-muted-foreground">Total Files:</div>
          <div className="font-medium">24</div>
          <div className="text-muted-foreground">Total Size:</div>
          <div className="font-medium">12.5 MB</div>
          <div className="text-muted-foreground">Status:</div>
          <div className="font-medium text-green-600 dark:text-green-400">
            Completed
          </div>
        </div>
      </div>
      <AlertDialogFooter>
        <AlertDialogAction>Done</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
