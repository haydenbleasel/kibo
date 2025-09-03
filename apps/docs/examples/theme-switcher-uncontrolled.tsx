"use client";

import { ThemeSwitcher } from "@repo/theme-switcher";

const Example = () => (
  <ThemeSwitcher defaultValue="system" onChange={console.log} />
);

export default Example;
