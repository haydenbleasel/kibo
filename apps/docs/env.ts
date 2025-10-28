import { vercel } from "@t3-oss/env-core/presets-zod";
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  extends: [vercel()],
  server: {
    ANALYZE: z.string().optional(),
    BETTERSTACK_API_KEY: z.string().min(1).optional(),
    BETTERSTACK_URL: z.string().min(1).url().optional(),

    // Added by Vercel
    NEXT_RUNTIME: z.enum(["nodejs", "edge"]).optional(),
  },
  client: {
    NEXT_PUBLIC_GA_MEASUREMENT_ID: z
      .string()
      .min(1)
      .startsWith("G-")
      .optional(),
    NEXT_PUBLIC_LOGO_DEV_TOKEN: z.string().min(1).optional(),
  },
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    NEXT_RUNTIME: process.env.NEXT_RUNTIME,
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    BETTERSTACK_API_KEY: process.env.BETTERSTACK_API_KEY,
    BETTERSTACK_URL: process.env.BETTERSTACK_URL,
    NEXT_PUBLIC_LOGO_DEV_TOKEN: process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN,
  },
});
