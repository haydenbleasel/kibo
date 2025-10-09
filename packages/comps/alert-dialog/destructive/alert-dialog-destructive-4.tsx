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

export const title = "Destructive with Consequence Details";

const Example = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="destructive">Revoke Access</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Revoke API Access?</AlertDialogTitle>
        <AlertDialogDescription>
          Revoking this API key will immediately:
        </AlertDialogDescription>
      </AlertDialogHeader>
      <div className="rounded-md bg-destructive/10 p-4 text-sm">
        <ul className="list-inside list-disc space-y-1 text-destructive dark:text-red-400">
          <li>Disable all API requests using this key</li>
          <li>Break existing integrations</li>
          <li>Require creating a new key to restore access</li>
          <li>Cannot be reversed once confirmed</li>
        </ul>
      </div>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction className="bg-destructive text-white hover:bg-destructive/90">
          Revoke Access
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
