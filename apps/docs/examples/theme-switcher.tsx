"use client";

import { ThemeSwitcher } from "@repo/theme-switcher";
import { useState } from "react";

const Example = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  return (
    <ThemeSwitcher defaultValue="system" onChange={setTheme} value={theme} />
  );
};

export default Example;
