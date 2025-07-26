import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { ConditionalContainer } from '../../components/conditional-container';
import { baseOptions } from '../../lib/layout.config';
import { source } from '../../lib/source';

export default function DocsRootLayout({ children }: { children: ReactNode }) {
  return (
    <ConditionalContainer>
      <DocsLayout
        {...baseOptions}
        nav={{
          ...baseOptions.nav,
          mode: 'top',
        }}
        sidebar={{
          collapsible: false,
          tabs: [
            {
              title: 'Docs',
              url: '/docs',
            },
            {
              title: 'Components',
              url: '/components',
            },
            {
              title: 'Blocks',
              url: '/blocks',
            },
          ],
        }}
        tree={source.pageTree}
      >
        {children}
      </DocsLayout>
    </ConditionalContainer>
  );
} 