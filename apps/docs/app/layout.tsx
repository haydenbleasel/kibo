import './global.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Toaster } from '@repo/shadcn-ui/components/ui/sonner';
import { TooltipProvider } from '@repo/shadcn-ui/components/ui/tooltip';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import { ThemeProvider } from '@/providers/theme';
import { SidebarScrollPreserver } from '@/components/sidebar-scroll-preserver';
import { env } from '../env';
import { fonts } from '../lib/fonts';

type LayoutProps = {
  readonly children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <html lang="en" className={fonts} suppressHydrationWarning>
    <body className="flex min-h-screen flex-col">
      <ThemeProvider>
        <RootProvider>
          <TooltipProvider>{children}</TooltipProvider>
          <SidebarScrollPreserver />
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
