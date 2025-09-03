import {
  Geist_Mono as createMono,
  Geist as createSans,
} from "next/font/google";

export const sans = createSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const mono = createMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
});
