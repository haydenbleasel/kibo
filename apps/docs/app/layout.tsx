import './global.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Toaster } from '@repo/shadcn-ui/components/ui/sonner';
import { TooltipProvider } from '@repo/shadcn-ui/components/ui/tooltip';
import { cn } from '@repo/shadcn-ui/lib/utils';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { Banner } from 'fumadocs-ui/components/banner';
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import { ThemeProvider } from '@/providers/theme';
import { env } from '../env';
import { mono, sans } from '../lib/fonts';

type LayoutProps = {
  readonly children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <html
    className={cn(
      'touch-manipulation font-sans antialiased',
      sans.variable,
      mono.variable
    )}
    lang="en"
    suppressHydrationWarning
  >
    <body className="flex min-h-screen flex-col">
      <Banner variant="rainbow">
        <span>Looking for the AI components? They're now</span>
        <a
          className="mx-1 font-semibold underline"
          href="https://ai-sdk.dev/elements?ref=kibo"
          rel="noopener"
          target="_blank"
        >
          AI Elements
        </a>
        <span>by Vercel.</span>
      </Banner>

      <ThemeProvider>
        <RootProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </RootProvider>
        <VercelAnalytics />
        {env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </ThemeProvider>
      <Toaster />
    </body>
  </html>
);

export default Layout;
