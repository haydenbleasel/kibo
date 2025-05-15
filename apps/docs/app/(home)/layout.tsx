import { HomeLayout as FumaDocsHomeLayout } from 'fumadocs-ui/layouts/home';
import type { ReactNode } from 'react';
import { baseOptions } from '../../lib/layout.config';

type HomeLayoutProps = {
  children: ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => (
  <FumaDocsHomeLayout {...baseOptions}>{children}</FumaDocsHomeLayout>
);

export default HomeLayout;
