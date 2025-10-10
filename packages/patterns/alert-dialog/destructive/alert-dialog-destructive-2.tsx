import { Trash2 } from "lucide-react";
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

export const title = "Delete Confirmation with Icon";

const Example = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="destructive">Delete</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <div className="flex items-center gap-2">
          <Trash2 className="size-5 text-destructive" />
          <AlertDialogTitle>Delete Project</AlertDialogTitle>
        </div>
        <AlertDialogDescription>
          This will permanently delete the project and all of its contents. This
          action cannot be undone.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction className="bg-destructive text-white hover:bg-destructive/90">
          Delete Project
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
