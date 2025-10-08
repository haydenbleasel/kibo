import type { ReactNode } from "react";
import { Navbar } from "../../components/navbar";

type CompsLayoutProps = {
  children: ReactNode;
};

const CompsLayout = ({ children }: CompsLayoutProps) => (
  <div>
    <Navbar />
    <div className="relative mt-[var(--fd-nav-height)] h-[calc(100vh-var(--fd-nav-height))] overflow-hidden">
      {children}
    </div>
  </div>
);

export default CompsLayout;
