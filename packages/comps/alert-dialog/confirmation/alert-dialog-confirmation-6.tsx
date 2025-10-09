import { HelpCircle } from "lucide-react";
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

export const title = "Confirmation with Centered Icon";

const Example = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Open Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader className="items-center">
        <div className="flex size-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
          <HelpCircle className="size-6 text-blue-600 dark:text-blue-400" />
        </div>
        <AlertDialogTitle>Enable Notifications?</AlertDialogTitle>
        <AlertDialogDescription className="text-center">
          Stay up to date with important updates and messages from your team.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Not Now</AlertDialogCancel>
        <AlertDialogAction>Enable</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
