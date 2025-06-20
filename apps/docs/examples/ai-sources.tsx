'use client';

import {
  AISource,
  AISources,
  AISourcesContent,
  AISourcesTrigger,
} from '@repo/ai/source';

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
    <AISourcesTrigger count={sources.length} />
    <AISourcesContent>
      {sources.map((source) => (
        <AISource key={source.href} href={source.href} title={source.title} />
      ))}
    </AISourcesContent>
  </AISources>
);

export default Example;
