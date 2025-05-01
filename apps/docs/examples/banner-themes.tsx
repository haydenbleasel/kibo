'use client';

import {
  Banner,
  BannerAction,
  BannerClose,
  BannerIcon,
  BannerTitle,
} from '@repo/banner';
import { CircleAlert } from 'lucide-react';
import type { CSSProperties } from 'react';

const Example = () => (
  <>
    <div
      className="w-full"
      style={
        {
          '--primary': '0 72.2% 50.6%',
          '--primary-foreground': '0 85.7% 97.3%',
        } as CSSProperties
      }
    >
      <Banner>
        <BannerIcon icon={CircleAlert} />
        <BannerTitle>
          Something's gone <strong>horribly</strong> wrong.
        </BannerTitle>
        <BannerAction>Restart</BannerAction>
        <BannerClose />
      </Banner>
    </div>
    <div
      className="w-full"
      style={
        {
          '--primary': '24.6 95% 53.1%',
          '--primary-foreground': '60 9.1% 97.8%',
        } as CSSProperties
      }
    >
      <Banner>
        <BannerIcon icon={CircleAlert} />
        <BannerTitle>You're almost out of disk space.</BannerTitle>
        <BannerAction>Upgrade</BannerAction>
        <BannerClose />
      </Banner>
    </div>
    <div
      className="w-full"
      style={
        {
          '--primary': '142.1 76.2% 36.3%',
          '--primary-foreground': '355.7 100% 97.3%',
        } as CSSProperties
      }
    >
      <Banner>
        <BannerIcon icon={CircleAlert} />
        <BannerTitle>You've been selected for a secret mission.</BannerTitle>
        <BannerAction>Accept</BannerAction>
        <BannerClose />
      </Banner>
    </div>
  </>
);

export default Example;
