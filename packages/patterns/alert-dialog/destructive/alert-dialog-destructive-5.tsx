import { X } from "lucide-react";
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

export const title = "Destructive with Custom Styled Buttons";

const Example = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="destructive">Remove Member</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <X className="size-5 text-destructive" />
            <AlertDialogTitle>Remove Team Member</AlertDialogTitle>
          </div>
        </div>
        <AlertDialogDescription>
          Are you sure you want to remove this member from the team? They will
          lose access to all projects and data.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Keep Member</AlertDialogCancel>
        <AlertDialogAction className="bg-destructive text-white hover:bg-destructive/90">
          <X className="size-4" />
          Remove Member
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
