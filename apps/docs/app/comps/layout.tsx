import {
  SidebarInset,
  SidebarProvider,
} from "@repo/shadcn-ui/components/ui/sidebar";
import type { CSSProperties, ReactNode } from "react";
import { Navbar } from "../../components/navbar";
import { CompsSidebar } from "./components/sidebar";

type CompsLayoutProps = {
  children: ReactNode;
};

const CompsLayout = ({ children }: CompsLayoutProps) => (
  <div>
    <Navbar />
    <div className="relative mt-[var(--fd-nav-height)] h-[calc(100vh-var(--fd-nav-height))] overflow-hidden">
      <div
        className="h-full"
        style={
          {
            "--sidebar": "transparent",
          } as CSSProperties
        }
      >
        <SidebarProvider className="h-full">
          <CompsSidebar />
          <SidebarInset className="h-full overflow-hidden">{children}</SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  </div>
);

export default CompsLayout;
