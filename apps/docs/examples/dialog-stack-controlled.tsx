"use client";

import {
  DialogStack,
  DialogStackBody,
  DialogStackContent,
  DialogStackDescription,
  DialogStackFooter,
  DialogStackHeader,
  DialogStackNext,
  DialogStackOverlay,
  DialogStackPrevious,
  DialogStackTitle,
} from "@repo/dialog-stack";
import { Button } from "@repo/shadcn-ui/components/ui/button";
import { useState } from "react";

const Example = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(!open)} variant="outline">
        Toggle Dialog
      </Button>

      <DialogStack onOpenChange={setOpen} open={open}>
        <DialogStackOverlay />
        <DialogStackBody>
          <DialogStackContent>
            <DialogStackHeader>
              <DialogStackTitle>I'm the first dialog</DialogStackTitle>
              <DialogStackDescription>
                With a fancy description
              </DialogStackDescription>
            </DialogStackHeader>
            <DialogStackFooter className="justify-end">
              <DialogStackNext asChild>
                <Button variant="outline">Next</Button>
              </DialogStackNext>
            </DialogStackFooter>
          </DialogStackContent>

          <DialogStackContent>
            <DialogStackHeader>
              <DialogStackTitle>I'm the second dialog</DialogStackTitle>
              <DialogStackDescription>
                With a fancy description
              </DialogStackDescription>
            </DialogStackHeader>
            <DialogStackFooter className="justify-between">
              <DialogStackPrevious asChild>
                <Button variant="outline">Previous</Button>
              </DialogStackPrevious>
              <DialogStackNext asChild>
                <Button variant="outline">Next</Button>
              </DialogStackNext>
            </DialogStackFooter>
          </DialogStackContent>

          <DialogStackContent>
            <DialogStackHeader>
              <DialogStackTitle>I'm the third dialog</DialogStackTitle>
              <DialogStackDescription>
                With a fancy description
              </DialogStackDescription>
            </DialogStackHeader>
            <DialogStackFooter className="justify-between">
              <DialogStackPrevious asChild>
                <Button variant="outline">Previous</Button>
              </DialogStackPrevious>
            </DialogStackFooter>
          </DialogStackContent>
        </DialogStackBody>
      </DialogStack>
    </>
  );
};

export default Example;
