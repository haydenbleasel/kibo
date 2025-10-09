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

export const title = "Destructive with Item Count";

const Example = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="destructive">Delete Selected</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Delete 24 Items?</AlertDialogTitle>
        <AlertDialogDescription>
          You are about to permanently delete 24 selected items. This action
          cannot be undone and all associated data will be lost.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <div className="rounded-md border border-destructive/20 bg-destructive/5 p-3 text-sm">
        <span className="font-medium text-destructive">Warning:</span> Some of
        these items may be referenced by other resources.
      </div>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction className="bg-destructive text-white hover:bg-destructive/90">
          Delete 24 Items
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
