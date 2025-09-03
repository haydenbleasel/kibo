"use client";

import { ImageZoom } from "@repo/image-zoom";
import Image from "next/image";

const Example = () => (
  <ImageZoom zoomMargin={100}>
    <Image
      alt="Placeholder image"
      className="h-auto w-96"
      height={800}
      src="https://placehold.co/1200x800"
      unoptimized
      width={1200}
    />
  </ImageZoom>
);

export default Example;
