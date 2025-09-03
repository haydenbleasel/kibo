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
  DialogStackTrigger,
} from "@repo/dialog-stack";
import { Button } from "@repo/shadcn-ui/components/ui/button";

const Example = () => (
  <DialogStack>
    <DialogStackTrigger asChild>
      <Button variant="outline">Show me</Button>
    </DialogStackTrigger>
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
          <DialogStackNext asChild>
            <Button variant="outline">Next</Button>
          </DialogStackNext>
        </DialogStackFooter>
      </DialogStackContent>

      <DialogStackContent>
        <DialogStackHeader>
          <DialogStackTitle>I'm the fourth dialog</DialogStackTitle>
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
          <DialogStackTitle>I'm the fifth dialog</DialogStackTitle>
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
          <DialogStackTitle>I'm the sixth dialog</DialogStackTitle>
          <DialogStackDescription>
            With a fancy description
          </DialogStackDescription>
        </DialogStackHeader>
        <DialogStackFooter className="justify-start">
          <DialogStackPrevious asChild>
            <Button variant="outline">Previous</Button>
          </DialogStackPrevious>
        </DialogStackFooter>
      </DialogStackContent>
    </DialogStackBody>
  </DialogStack>
);

export default Example;
