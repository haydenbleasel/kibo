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

export const title = "Mixed Button Styles";

const Example = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Update Status</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Update Project Status</AlertDialogTitle>
        <AlertDialogDescription>
          Choose the new status for this project.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter className="gap-2 sm:justify-between">
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <div className="flex gap-2">
          <Button variant="outline">Mark as On Hold</Button>
          <AlertDialogAction className="bg-green-600 hover:bg-green-700">
            Mark as Complete
          </AlertDialogAction>
        </div>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
