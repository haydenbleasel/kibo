import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const title = "Feedback";

const Example = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Send Feedback</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-lg">
      <DialogHeader>
        <DialogTitle>Share your feedback</DialogTitle>
        <DialogDescription>
          We'd love to hear your thoughts on how we can improve.
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-2">
        <Label htmlFor="feedback">Your feedback</Label>
        <Textarea
          className="min-h-[120px]"
          id="feedback"
          placeholder="Tell us what you think..."
        />
      </div>
      <DialogFooter>
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="button">Submit Feedback</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default Example;
