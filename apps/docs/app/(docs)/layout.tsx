import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { source } from '../../lib/source';

type LayoutProps = {
  readonly children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <DocsLayout
    tree={source.pageTree}
    tabMode="navbar"
    sidebar={{ collapsible: false }}
    githubUrl="https://github.com/haydenbleasel/kibo"
    nav={{
      title: (
        <Image
          src="/logo.svg"
          alt="Kibo UI"
          width={611}
          height={116}
          className="h-[18px] w-auto dark:invert"
        />
      ),
      mode: 'top',
    }}
  >
    {children}
  </DocsLayout>
);

export default Layout;
