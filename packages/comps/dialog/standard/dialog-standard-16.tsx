"use client";

import { CheckIcon, ImageIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const title = "Edit Profile";

const Example = () => {
  const [username, setUsername] = useState("margaret-villard-69");
  const [bio, setBio] = useState(
    "Hey, I am Margaret, a web developer who loves turning ideas into amazing websites!"
  );
  const maxBioLength = 200;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="p-0 sm:max-w-2xl">
        <DialogHeader className="px-6 pt-6 pb-0">
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="relative">
            <div className="h-40 rounded-t-lg bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                  type="button"
                >
                  <ImageIcon className="h-4 w-4" />
                </button>
                <button
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                  type="button"
                >
                  <XIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="-bottom-12 absolute left-6">
              <div className="relative">
                <div className="h-24 w-24 rounded-full border-4 border-background bg-gradient-to-br from-blue-400 to-purple-500" />
                <button
                  className="absolute right-0 bottom-0 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-black/80"
                  type="button"
                >
                  <ImageIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-4 px-6 pt-14">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input defaultValue="Margaret" id="firstName" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input defaultValue="Villard" id="lastName" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <div className="relative">
                <Input
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
                <CheckIcon className="-translate-y-1/2 absolute top-1/2 right-3 h-4 w-4 text-green-600" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <div className="flex">
                <div className="flex items-center rounded-l-md border border-input border-r-0 bg-muted px-3 text-muted-foreground text-sm">
                  https://
                </div>
                <Input
                  className="rounded-l-none"
                  defaultValue="www.margaret.com"
                  id="website"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Biography</Label>
              <Textarea
                className="min-h-[100px] resize-none"
                id="bio"
                maxLength={maxBioLength}
                onChange={(e) => setBio(e.target.value)}
                value={bio}
              />
              <p className="text-right text-muted-foreground text-xs">
                {maxBioLength - bio.length} characters left
              </p>
            </div>
          </div>
        </div>
        <DialogFooter className="px-6 pb-6">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="button">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Example;
