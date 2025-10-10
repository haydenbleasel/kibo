import { AlertCircle } from "lucide-react";
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

export const title = "Confirmation with Icon";

const Example = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Open Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <div className="flex items-center gap-2">
          <AlertCircle className="size-5 text-amber-500" />
          <AlertDialogTitle>Confirm Changes</AlertDialogTitle>
        </div>
        <AlertDialogDescription>
          You have unsaved changes. Are you sure you want to continue? Your
          changes will be lost.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Go Back</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
