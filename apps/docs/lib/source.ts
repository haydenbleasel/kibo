import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { icons } from "lucide-react";
import { createElement } from "react";
import { docs, meta } from "@/.source";

export const source = loader({
  baseUrl: "/",
  source: createMDXSource(docs, meta),
  icon(icon) {
    if (!icon) {
      return;
    }

    if (icon in icons) {
      return createElement(icons[icon as keyof typeof icons]);
    }
  },
});
