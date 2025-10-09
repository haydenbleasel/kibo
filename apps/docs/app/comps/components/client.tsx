"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@repo/shadcn-ui/components/ui/collapsible";
import { Input } from "@repo/shadcn-ui/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@repo/shadcn-ui/components/ui/sidebar";
import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CompSidebarLink } from "./link";

type Page = {
  name: string;
  items?: {
    name: string;
    url: string;
  }[];
  subgroups?: {
    name: string;
    items: {
      name: string;
      url: string;
    }[];
  }[];
};

type CompsSidebarClientProps = {
  pages: Page[];
};

export const CompsSidebarClient = ({ pages }: CompsSidebarClientProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPages = useMemo(() => {
    if (!searchQuery.trim()) {
      return pages;
    }

    const query = searchQuery.toLowerCase();

    return pages
      .map((page) => {
        // Filter flat items
        const filteredItems = page.items?.filter((item) =>
          item.name.toLowerCase().includes(query)
        );

        // Filter subgroups and their items
        const filteredSubgroups = page.subgroups
          ?.map((subgroup) => {
            const matchingItems = subgroup.items.filter(
              (item) =>
                item.name.toLowerCase().includes(query) ||
                subgroup.name.toLowerCase().includes(query)
            );
            return matchingItems.length > 0
              ? { ...subgroup, items: matchingItems }
              : null;
          })
          .filter(
            (subgroup): subgroup is NonNullable<typeof subgroup> =>
              subgroup !== null
          );

        // Only include page if it has matching items or subgroups
        if (
          (filteredItems && filteredItems.length > 0) ||
          (filteredSubgroups && filteredSubgroups.length > 0)
        ) {
          return {
            ...page,
            items: filteredItems,
            subgroups: filteredSubgroups,
          };
        }
        return null;
      })
      .filter((page): page is NonNullable<typeof page> => page !== null);
  }, [pages, searchQuery]);

  return (
    <Sidebar className="absolute h-full border-none">
      <SidebarHeader className="px-4 py-2">
        <div className="relative">
          <Search className="-translate-y-1/2 absolute top-1/2 left-2 h-4 w-4 text-muted-foreground" />
          <Input
            className="pl-8"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search compositions..."
            type="text"
            value={searchQuery}
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        {filteredPages.map((page) => (
          <SidebarGroup key={page.name}>
            <SidebarGroupLabel>{page.name}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {page.items?.length
                  ? page.items
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((item) => (
                        <SidebarMenuItem key={item.name}>
                          <SidebarMenuButton asChild>
                            <Link className="truncate" href={item.url}>
                              {item.name}
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))
                  : null}
                {page.subgroups?.length
                  ? page.subgroups.map((subgroup) => (
                      <Collapsible
                        defaultOpen={searchQuery.trim().length > 0}
                        key={subgroup.name}
                      >
                        <SidebarMenuItem>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton className="capitalize">
                              {subgroup.name}
                              <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              {subgroup.items
                                .sort((a, b) => a.name.localeCompare(b.name))
                                .map((item) => (
                                  <CompSidebarLink key={item.name} {...item} />
                                ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </SidebarMenuItem>
                      </Collapsible>
                    ))
                  : null}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};
