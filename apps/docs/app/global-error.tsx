"use client";

import { Button } from "@repo/shadcn-ui/components/ui/button";
import { cn } from "@repo/shadcn-ui/lib/utils";
// biome-ignore lint/performance/noNamespaceImport: "Required for Sentry"
import * as Sentry from "@sentry/nextjs";
import type NextError from "next/error";
import { useEffect } from "react";
import { mono, sans } from "../lib/fonts";

type GlobalErrorProperties = {
  readonly error: NextError & { digest?: string };
  readonly reset: () => void;
};

const GlobalError = ({ error, reset }: GlobalErrorProperties) => {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html
      className={cn(
        "touch-manipulation font-sans antialiased",
        sans.variable,
        mono.variable
      )}
      lang="en"
    >
      <body>
        <h1>Oops, something went wrong</h1>
        <Button onClick={() => reset()}>Try again</Button>
      </body>
    </html>
  );
};

export default GlobalError;
