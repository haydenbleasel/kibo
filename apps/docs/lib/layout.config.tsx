import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export const baseOptions: BaseLayoutProps = {
  links: [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'Docs',
      url: '/docs',
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
