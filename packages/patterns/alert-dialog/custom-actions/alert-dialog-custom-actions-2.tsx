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

export const title = "Vertical Button Stack";

const Example = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Choose Action</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Select an Option</AlertDialogTitle>
        <AlertDialogDescription>
          Choose how you want to proceed with this item.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter className="flex-col gap-2 sm:flex-col">
        <AlertDialogAction className="m-0">Edit Item</AlertDialogAction>
        <Button className="m-0" variant="outline">
          Duplicate Item
        </Button>
        <Button className="m-0" variant="outline">
          Share Item
        </Button>
        <AlertDialogCancel className="m-0">Cancel</AlertDialogCancel>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
