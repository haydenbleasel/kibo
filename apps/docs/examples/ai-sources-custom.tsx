'use client';

import {
  AISource,
  AISources,
  AISourcesContent,
  AISourcesTrigger,
} from '@repo/ai/source';
import { ChevronsUpDownIcon, ExternalLinkIcon } from 'lucide-react';

const sources = [
  { href: 'https://stripe.com/docs/api', title: 'Stripe API Documentation' },
  { href: 'https://docs.github.com/en/rest', title: 'GitHub REST API' },
  {
    href: 'https://docs.aws.amazon.com/sdk-for-javascript/',
    title: 'AWS SDK for JavaScript',
  },
];

const Example = () => (
  <AISources>
    <AISourcesTrigger count={sources.length}>
      <p className="font-medium">Using {sources.length} citations</p>
      <ChevronsUpDownIcon className="h-4 w-4" />
    </AISourcesTrigger>
    <AISourcesContent>
      {sources.map((source) => (
        <AISource href={source.href} key={source.href}>
          {source.title}
          <ExternalLinkIcon className="h-4 w-4" />
        </AISource>
      ))}
    </AISourcesContent>
  </AISources>
);

export default Example;
