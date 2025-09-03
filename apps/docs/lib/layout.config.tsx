import { Button } from "@repo/shadcn-ui/components/ui/button";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const baseOptions: BaseLayoutProps = {
  links: [
    {
      text: "Docs",
      url: "/docs",
      active: "nested-url",
    },
    {
      text: "Components",
      url: "/components",
      active: "nested-url",
    },
    {
      text: "Blocks",
      url: "/blocks",
      active: "nested-url",
    },
  ],
  githubUrl: "https://github.com/haydenbleasel/kibo",
  nav: {
    title: (
      <div className="flex items-center gap-2">
        <svg
          className="h-[18px] w-auto"
          fill="none"
          viewBox="0 0 116 116"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Kibo UI</title>
          <g fill="currentColor">
            <path
              clipRule="evenodd"
              d="m29.3378 0h87.0002v87l-29.0002 29v-87h-87.000031zm-29.000031 95.7389v-37.7389h37.738831zm58.000031 20.2611h-37.249l37.249-37.2488z"
              fillRule="evenodd"
            />
          </g>
        </svg>
        <span className="font-semibold text-lg">Kibo UI</span>
      </div>
    ),
  },
};
