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

export const title = "Confirmation with Custom Button Labels";

const Example = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Open Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Leave Workspace</AlertDialogTitle>
        <AlertDialogDescription>
          Are you sure you want to leave this workspace? You will need to be
          re-invited to access it again.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Stay in Workspace</AlertDialogCancel>
        <AlertDialogAction>Leave Workspace</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
