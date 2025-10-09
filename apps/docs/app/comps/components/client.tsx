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
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CompSidebarLink } from "./link";

const SCROLL_DELAY = 100;

type Item = {
  name: string;
  url: string;
};

type Subgroup = {
  name: string;
  items: Item[];
};

type Page = {
  name: string;
  items?: Item[];
  subgroups?: Subgroup[];
};

type CompsSidebarClientProps = {
  pages: Page[];
};

export const CompsSidebarClient = ({ pages }: CompsSidebarClientProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  // Helper function to check if a subgroup contains the active page
  const isSubgroupActive = useCallback(
    (subgroup: Subgroup) => {
      return subgroup.items.some((item) => item.url === pathname);
    },
    [pathname]
  );

  // Track which subgroups should be open based on active page and search
  const [openSubgroups, setOpenSubgroups] = useState<Set<string>>(new Set());

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

  // Update open subgroups when pathname or search changes
  // biome-ignore lint/correctness/useExhaustiveDependencies: "Re-run when pathname changes"
  useEffect(() => {
    const newOpenSubgroups = new Set<string>();

    // If searching, open all subgroups with matches
    if (searchQuery.trim()) {
      for (const page of filteredPages) {
        for (const subgroup of page.subgroups || []) {
          newOpenSubgroups.add(`${page.name}-${subgroup.name}`);
        }
      }
    } else {
      // Otherwise, only open the subgroup containing the active page
      for (const page of pages) {
        for (const subgroup of page.subgroups || []) {
          if (isSubgroupActive(subgroup)) {
            newOpenSubgroups.add(`${page.name}-${subgroup.name}`);
          }
        }
      }
    }

    setOpenSubgroups(newOpenSubgroups);
  }, [pathname, searchQuery, pages, filteredPages, isSubgroupActive]);

  // Get all component URLs in order
  const allUrls = useMemo(() => {
    const urls: string[] = [];
    for (const page of pages) {
      for (const item of page.items || []) {
        urls.push(item.url);
      }
      for (const subgroup of page.subgroups || []) {
        for (const item of subgroup.items) {
          urls.push(item.url);
        }
      }
    }
    return urls;
  }, [pages]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle arrow keys when not typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      const currentIndex = allUrls.indexOf(pathname);
      if (currentIndex === -1) {
        return;
      }

      if (e.key === "ArrowLeft" && currentIndex > 0) {
        e.preventDefault();
        router.push(allUrls[currentIndex - 1], { scroll: false });
      } else if (e.key === "ArrowRight" && currentIndex < allUrls.length - 1) {
        e.preventDefault();
        router.push(allUrls[currentIndex + 1], { scroll: false });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pathname, allUrls, router]);

  // Scroll active link into view
  // biome-ignore lint/correctness/useExhaustiveDependencies: "Re-run when pathname changes"
  useEffect(() => {
    // Small delay to ensure the DOM has updated
    const timer = setTimeout(() => {
      const activeLink = document.querySelector('[data-active="true"]');
      if (activeLink) {
        activeLink.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, SCROLL_DELAY);

    return () => clearTimeout(timer);
  }, [pathname]);

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
                  ? page.items.map((item) => (
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
                  ? page.subgroups.map((subgroup) => {
                      const subgroupKey = `${page.name}-${subgroup.name}`;
                      const isOpen = openSubgroups.has(subgroupKey);

                      return (
                        <Collapsible
                          key={subgroup.name}
                          onOpenChange={(open) => {
                            setOpenSubgroups((prev) => {
                              const next = new Set(prev);
                              if (open) {
                                next.add(subgroupKey);
                              } else {
                                next.delete(subgroupKey);
                              }
                              return next;
                            });
                          }}
                          open={isOpen}
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
                                {subgroup.items.map((item) => (
                                  <CompSidebarLink key={item.name} {...item} />
                                ))}
                              </SidebarMenuSub>
                            </CollapsibleContent>
                          </SidebarMenuItem>
                        </Collapsible>
                      );
                    })
                  : null}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};
