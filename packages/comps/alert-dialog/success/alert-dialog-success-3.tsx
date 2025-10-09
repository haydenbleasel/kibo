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

export const title = "Success with Centered Icon";

const Example = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Complete Action</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader className="items-center">
        <div className="flex size-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
          <CheckCircle2 className="size-6 text-green-600 dark:text-green-400" />
        </div>
        <AlertDialogTitle>Account Created!</AlertDialogTitle>
        <AlertDialogDescription className="text-center">
          Your account has been created successfully. You can now start using
          all features.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogAction>Get Started</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
