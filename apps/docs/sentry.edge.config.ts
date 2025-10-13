// biome-ignore lint/performance/noNamespaceImport: "Required for Sentry"
import * as Sentry from "@sentry/nextjs";
import { env } from "./env";

Sentry.init({
  dsn: env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1,
  enableLogs: true,
  debug: false,
});
