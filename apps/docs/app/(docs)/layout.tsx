import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { baseOptions } from '../../lib/layout.config';
import { source } from '../../lib/source';

type LayoutProps = {
  readonly children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <DocsLayout
    {...baseOptions}
    tree={source.pageTree}
    tabMode="navbar"
    sidebar={{ collapsible: false }}
    nav={{
      ...baseOptions.nav,
      mode: 'top',
    }}
  >
    {children}
  </DocsLayout>
);

export default Layout;
