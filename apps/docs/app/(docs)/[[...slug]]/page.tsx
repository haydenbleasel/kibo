import { createGenerator } from 'fumadocs-typescript';
import { AutoTypeTable } from 'fumadocs-typescript/ui';
// import { Banner } from 'fumadocs-ui/components/banner';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '../../../components/header';
import { Installer } from '../../../components/installer';
import { PoweredBy } from '../../../components/powered-by';
import { Preview } from '../../../components/preview';
import { baseOptions } from '../../../lib/layout.config';
import { source } from '../../../lib/source';
import Home from './(home)';

type PageProps = {
  params: Promise<{ slug?: string[] }>;
};

const generator = createGenerator();

const Page = async (props: PageProps) => {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!params.slug) {
    return (
      <>
        {/* <Banner
          variant="rainbow"
          className="container mx-auto border-x border-b border-dotted"
        >
          <p>
            We're live on Product Hunt!{' '}
            <a
              className="underline"
              href="https://www.producthunt.com/posts/kibo-ui"
              target="_blank"
              rel="noreferrer noopener"
            >
              Come say hello 😻
            </a>
          </p>
        </Banner> */}
        <DocsLayout
          {...baseOptions}
          tree={source.pageTree}
          sidebar={{ hidden: true, collapsible: false }}
          nav={{ ...baseOptions.nav, mode: 'top' }}
        >
          <Home />
        </DocsLayout>
      </>
    );
  }

  if (!page) {
    notFound();
  }

  const MDX = page.data.body;

  return (
    <DocsLayout
      {...baseOptions}
      tree={source.pageTree}
      sidebar={{ collapsible: false, tabs: false }}
      nav={{
        ...baseOptions.nav,
        mode: 'top',
      }}
    >
      <Header />
      <DocsPage
        toc={page.data.toc}
        full={page.data.full}
        tableOfContent={{ style: 'clerk' }}
      >
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody>
          <MDX
            components={{
              ...defaultMdxComponents,
              Installer,
              Preview,
              PoweredBy,
              AutoTypeTable: (props) => (
                <AutoTypeTable {...props} generator={generator} />
              ),
            }}
          />
        </DocsBody>
      </DocsPage>
    </DocsLayout>
  );
};

export const generateStaticParams = async () => source.generateParams();

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!params.slug) {
    return {
      title: 'Kibo UI',
      description:
        'Kibo UI is a custom registry of composable, accessible and open source components designed for use with shadcn/ui.',
    };
  }

  if (!page) {
    notFound();
  }

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      type: 'website',
      images: [
        {
          url: `/og?slug=${params.slug?.join('/') ?? ''}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default Page;
