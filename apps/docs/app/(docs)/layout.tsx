import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { ConditionalContainer } from "../../components/conditional-container";
import { Navbar } from "../../components/navbar";
import { source } from "../../lib/source";

type DocsRootLayoutProps = {
  readonly children: ReactNode;
};

const DocsRootLayout = ({ children }: DocsRootLayoutProps) => (
  <ConditionalContainer>
    <DocsLayout
      nav={{
        component: <Navbar />,
      }}
      searchToggle={{
        enabled: false,
      }}
      sidebar={{
        collapsible: false,
        tabs: false,
        className: 'border-none',
      }}
      themeSwitch={{
        enabled: false,
      }}
      tree={source.pageTree}
    >
      {children}
    </DocsLayout>
  </ConditionalContainer>
);

export default DocsRootLayout;
