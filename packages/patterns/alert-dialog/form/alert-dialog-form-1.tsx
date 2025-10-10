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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Single Input Dialog";

const Example = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Rename</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Rename Project</AlertDialogTitle>
        <AlertDialogDescription>
          Enter a new name for your project.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <div className="py-4">
        <Label htmlFor="name">Project Name</Label>
        <Input
          className="mt-2"
          defaultValue="Untitled Project"
          id="name"
          placeholder="My Project"
        />
      </div>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Save</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
