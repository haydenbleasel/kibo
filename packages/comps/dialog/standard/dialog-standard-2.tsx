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
import { ScrollArea } from "@/components/ui/scroll-area";

export const title = "Scrollable";

const Example = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">View Privacy Policy</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-lg">
      <DialogHeader>
        <DialogTitle>Privacy Policy</DialogTitle>
        <DialogDescription>
          Please review our privacy policy carefully.
        </DialogDescription>
      </DialogHeader>
      <ScrollArea className="h-[300px] pr-4">
        <div className="space-y-4 text-sm">
          <p>
            We respect your privacy and are committed to protecting your
            personal data. This privacy policy will inform you about how we look
            after your personal data when you visit our website.
          </p>
          <h4 className="font-semibold">Information We Collect</h4>
          <p>
            We may collect, use, store and transfer different kinds of personal
            data about you which we have grouped together as follows: Identity
            Data, Contact Data, Technical Data, Profile Data, Usage Data,
            Marketing and Communications Data.
          </p>
          <h4 className="font-semibold">How We Use Your Information</h4>
          <p>
            We will only use your personal data when the law allows us to. Most
            commonly, we will use your personal data in the following
            circumstances: where we need to perform the contract we are about to
            enter into or have entered into with you, where it is necessary for
            our legitimate interests, and where we need to comply with a legal
            obligation.
          </p>
          <h4 className="font-semibold">Data Security</h4>
          <p>
            We have put in place appropriate security measures to prevent your
            personal data from being accidentally lost, used or accessed in an
            unauthorized way, altered or disclosed.
          </p>
          <h4 className="font-semibold">Your Legal Rights</h4>
          <p>
            Under certain circumstances, you have rights under data protection
            laws in relation to your personal data, including the right to
            request access, correction, erasure, restriction, transfer, or to
            object to processing.
          </p>
        </div>
      </ScrollArea>
      <DialogFooter>
        <Button type="button">I Understand</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default Example;
