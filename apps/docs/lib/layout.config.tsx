import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export const baseOptions: BaseLayoutProps = {
  links: [
    {
      text: 'Docs',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: 'Components',
      url: '/components',
      active: 'nested-url',
    },
    {
      text: 'Blocks',
      url: '/blocks',
      active: 'nested-url',
    },
  ],
  githubUrl: 'https://github.com/haydenbleasel/kibo',
  nav: {
    title: (
      <Image
        src="/logo.svg"
        alt="Kibo UI"
        width={611}
        height={116}
        className="h-[18px] w-auto dark:invert"
      />
    ),
  },
};
