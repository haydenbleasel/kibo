import {
  SidebarInset,
  SidebarProvider,
} from "@repo/shadcn-ui/components/ui/sidebar";
import type { CSSProperties, ReactNode } from "react";
import { CompsSidebar } from "./components/sidebar";

type CompsLayoutProps = {
  children: ReactNode;
};

const CompsAuthenticatedLayout = ({ children }: CompsLayoutProps) => (
  <div
    style={
      {
        "--sidebar": "transparent",
      } as CSSProperties
    }
  >
    <SidebarProvider className="min-h-full">
      <CompsSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  </div>
);

export default CompsAuthenticatedLayout;
