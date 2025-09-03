"use client";

import {
  Banner,
  BannerAction,
  BannerClose,
  BannerIcon,
  BannerTitle,
} from "@repo/banner";
import { CircleAlert } from "lucide-react";

const Example = () => (
  <Banner>
    <BannerIcon icon={CircleAlert} />
    <BannerTitle>Important message</BannerTitle>
    <BannerAction>Learn more</BannerAction>
    <BannerClose />
  </Banner>
);

export default Example;
