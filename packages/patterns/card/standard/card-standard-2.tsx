"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Login Card";

const Example = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="m@example.com"
            type="email"
            value={email}
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <a className="text-sm hover:underline" href="#">
              Forgot your password?
            </a>
          </div>
          <Input
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
          />
        </div>
        <Button className="w-full">Login</Button>
        <Button className="w-full" variant="outline">
          Login with Google
        </Button>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-muted-foreground text-sm">
          Don't have an account?{" "}
          <a className="underline" href="#">
            Sign up
          </a>
        </p>
      </CardFooter>
    </Card>
  );
};

export default Example;
