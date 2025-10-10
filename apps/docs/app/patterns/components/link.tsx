"use client";

import {
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@repo/shadcn-ui/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

type CompSidebarLinkProps = {
  name: string;
  url: string;
};

export const CompSidebarLink = ({ name, url }: CompSidebarLinkProps) => {
  const pathname = usePathname();

  return (
    <SidebarMenuSubItem key={name}>
      <SidebarMenuSubButton
        asChild
        className="data-[active=true]:bg-primary/10 data-[active=true]:text-primary"
        isActive={pathname === url}
      >
        <Link className="truncate" href={url}>
          {name}
        </Link>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  );
};
