import defaultMdxComponents from 'fumadocs-ui/mdx';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Installer } from '../../../components/installer';
import { PoweredBy } from '../../../components/powered-by';
import { Preview } from '../../../components/preview';
import { source } from '../../../lib/source';
import Home from './(home)';

type PageProps = {
  params: Promise<{ slug?: string[] }>;
};

const Page = async (props: PageProps) => {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!params.slug) {
    return <Home />;
  }

  if (!page) {
    notFound();
  }

  const MDX = page.data.body;

  return (
    <DocsPage
      full={page.data.full}
      tableOfContent={{ style: 'clerk' }}
      toc={page.data.toc}
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
          }}
        />
      </DocsBody>
    </DocsPage>
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
