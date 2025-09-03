"use client";

import {
  Banner,
  BannerAction,
  BannerClose,
  BannerIcon,
  BannerTitle,
} from "@repo/banner";
import { CircleAlert } from "lucide-react";
import type { CSSProperties } from "react";

const Example = () => (
  <>
    <div
      className="w-full"
      style={
        {
          "--primary": "oklch(0.637 0.237 25.331)",
          "--primary-foreground": "oklch(0.971 0.013 17.38)",
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
          "--primary": "oklch(0.705 0.213 47.604)",
          "--primary-foreground": "oklch(0.98 0.016 73.684)",
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
          "--primary": "oklch(0.723 0.219 149.579)",
          "--primary-foreground": "oklch(0.982 0.018 155.826)",
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
