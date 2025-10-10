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

export const title = "Success with Next Steps";

const Example = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Complete Action</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="size-5 text-green-500" />
          <AlertDialogTitle>Project Created Successfully</AlertDialogTitle>
        </div>
        <AlertDialogDescription>
          Your project has been created. Here's what you can do next:
        </AlertDialogDescription>
      </AlertDialogHeader>
      <div className="space-y-2 text-sm">
        <div className="flex items-start gap-2">
          <span className="text-muted-foreground">1.</span>
          <span>Invite team members to collaborate</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-muted-foreground">2.</span>
          <span>Set up your project configuration</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-muted-foreground">3.</span>
          <span>Create your first task</span>
        </div>
      </div>
      <AlertDialogFooter>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
