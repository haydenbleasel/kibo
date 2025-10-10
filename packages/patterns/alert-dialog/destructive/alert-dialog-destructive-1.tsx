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

export const title = "Simple Delete Confirmation";

const Example = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="destructive">Delete</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Delete Item?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete the item
          from your account.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction className="bg-destructive text-white hover:bg-destructive/90">
          Delete
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
