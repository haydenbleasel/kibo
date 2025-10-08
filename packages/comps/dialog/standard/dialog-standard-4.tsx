"use client";

import { useRef, useState } from "react";
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

export const title = "Terms and Conditions";

const Example = () => {
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const isAtBottom =
      Math.abs(target.scrollHeight - target.scrollTop - target.clientHeight) <
      10;
    if (isAtBottom && !hasScrolledToBottom) {
      setHasScrolledToBottom(true);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Accept Terms</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Terms and Conditions</DialogTitle>
          <DialogDescription>
            Please read and scroll to the bottom to accept.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea
          className="h-[300px] pr-4"
          onScrollCapture={handleScroll}
          ref={scrollAreaRef}
        >
          <div className="space-y-4 text-sm">
            <h4 className="font-semibold">1. Agreement to Terms</h4>
            <p>
              By accessing and using this service, you accept and agree to be
              bound by the terms and provision of this agreement.
            </p>
            <h4 className="font-semibold">2. Use License</h4>
            <p>
              Permission is granted to temporarily download one copy of the
              materials on our service for personal, non-commercial transitory
              viewing only.
            </p>
            <h4 className="font-semibold">3. Disclaimer</h4>
            <p>
              The materials on our service are provided on an 'as is' basis. We
              make no warranties, expressed or implied, and hereby disclaim and
              negate all other warranties.
            </p>
            <h4 className="font-semibold">4. Limitations</h4>
            <p>
              In no event shall we or our suppliers be liable for any damages
              (including, without limitation, damages for loss of data or
              profit, or due to business interruption) arising out of the use or
              inability to use our service.
            </p>
            <h4 className="font-semibold">5. Revisions</h4>
            <p>
              We may revise these terms of service at any time without notice.
              By using this service you are agreeing to be bound by the then
              current version of these terms of service.
            </p>
            <h4 className="font-semibold">6. Governing Law</h4>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws and you irrevocably submit to the
              exclusive jurisdiction of the courts in that location.
            </p>
          </div>
        </ScrollArea>
        <DialogFooter>
          <Button disabled={!hasScrolledToBottom} type="button">
            I Agree
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Example;
