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
import { Textarea } from "@/components/ui/textarea";

export const title = "Multiple Inputs Dialog";

const Example = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Add Feedback</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Send Feedback</AlertDialogTitle>
        <AlertDialogDescription>
          Help us improve by sharing your thoughts.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <div className="space-y-4 py-4">
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" placeholder="Brief description" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            className="min-h-[100px]"
            id="message"
            placeholder="Tell us more..."
          />
        </div>
      </div>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Send</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
