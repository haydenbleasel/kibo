import { AlertTriangle } from "lucide-react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const title = "Destructive with Checkbox Confirmation";

const Example = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="destructive">Delete Account</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader className="items-center">
        <div className="flex size-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
          <AlertTriangle className="size-6 text-red-600 dark:text-red-400" />
        </div>
        <AlertDialogTitle>Delete Account Permanently</AlertDialogTitle>
        <AlertDialogDescription className="text-center">
          This is a permanent action. All your data, projects, and settings will
          be deleted immediately and cannot be recovered.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <div className="flex items-center space-x-2 rounded-md border p-4">
        <Checkbox id="confirm" />
        <Label className="font-normal text-sm" htmlFor="confirm">
          I understand this action is permanent and irreversible
        </Label>
      </div>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction className="bg-destructive text-white hover:bg-destructive/90">
          Delete Account
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
