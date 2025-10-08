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
    className="h-full"
    style={
      {
        "--sidebar": "transparent",
      } as CSSProperties
    }
  >
    <SidebarProvider className="h-full">
      <CompsSidebar />
      <SidebarInset className="h-full">{children}</SidebarInset>
    </SidebarProvider>
  </div>
);

export default CompsAuthenticatedLayout;
