"use client";

import { ThemeSwitcher } from "@repo/theme-switcher";
import { useTheme } from "next-themes";

type ThemeProps = {
  className?: string;
};

export const Theme = ({ className }: ThemeProps) => {
  const { setTheme, theme } = useTheme();
  const resolvedTheme = typeof theme === "string" ? theme : "system";

  return (
    <ThemeSwitcher
      className={className}
      defaultValue="system"
      onChange={setTheme}
      value={resolvedTheme as "light" | "dark" | "system"}
    />
  );
};
