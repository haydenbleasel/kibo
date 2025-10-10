"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export const title = "Tabs with Forms";

const Example = () => (
  <Tabs className="w-full max-w-md" defaultValue="login">
    <TabsList className="grid w-full grid-cols-2">
      <TabsTrigger value="login">Login</TabsTrigger>
      <TabsTrigger value="register">Register</TabsTrigger>
    </TabsList>
    <TabsContent value="login">
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <div className="mb-4">
          <h3 className="font-semibold text-lg">Login</h3>
          <p className="text-muted-foreground text-sm">
            Enter your credentials to access your account.
          </p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="login-email">Email</Label>
            <Input
              id="login-email"
              placeholder="name@example.com"
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="login-password">Password</Label>
            <Input id="login-password" type="password" />
          </div>
          <Button className="w-full" type="submit">
            Sign In
          </Button>
        </form>
      </div>
    </TabsContent>
    <TabsContent value="register">
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <div className="mb-4">
          <h3 className="font-semibold text-lg">Create Account</h3>
          <p className="text-muted-foreground text-sm">
            Fill in the details below to create your account.
          </p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="register-name">Full Name</Label>
            <Input id="register-name" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="register-email">Email</Label>
            <Input
              id="register-email"
              placeholder="name@example.com"
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="register-password">Password</Label>
            <Input id="register-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="register-bio">Bio</Label>
            <Textarea
              id="register-bio"
              placeholder="Tell us about yourself..."
            />
          </div>
          <Button className="w-full" type="submit">
            Create Account
          </Button>
        </form>
      </div>
    </TabsContent>
  </Tabs>
);

export default Example;
