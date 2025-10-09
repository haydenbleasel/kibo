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
import { useEffect, useMemo, useState } from "react";
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
  const pathname = usePathname();
  const router = useRouter();

  // Helper function to check if a subgroup contains the active page
  const isSubgroupActive = (subgroup: Page["subgroups"][0]) => {
    return subgroup.items.some((item) => item.url === pathname);
  };

  // Track which subgroups should be open based on active page and search
  const [openSubgroups, setOpenSubgroups] = useState<Set<string>>(new Set());

  // Update open subgroups when pathname or search changes
  useEffect(() => {
    const newOpenSubgroups = new Set<string>();

    // If searching, open all subgroups with matches
    if (searchQuery.trim()) {
      filteredPages.forEach((page) => {
        page.subgroups?.forEach((subgroup) => {
          newOpenSubgroups.add(`${page.name}-${subgroup.name}`);
        });
      });
    } else {
      // Otherwise, only open the subgroup containing the active page
      pages.forEach((page) => {
        page.subgroups?.forEach((subgroup) => {
          if (isSubgroupActive(subgroup)) {
            newOpenSubgroups.add(`${page.name}-${subgroup.name}`);
          }
        });
      });
    }

    setOpenSubgroups(newOpenSubgroups);
  }, [pathname, searchQuery, pages]);

  // Get all component URLs in order
  const allUrls = useMemo(() => {
    const urls: string[] = [];
    pages.forEach((page) => {
      page.items?.forEach((item) => urls.push(item.url));
      page.subgroups?.forEach((subgroup) => {
        subgroup.items.forEach((item) => urls.push(item.url));
      });
    });
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
      if (currentIndex === -1) return;

      if (e.key === "ArrowLeft" && currentIndex > 0) {
        e.preventDefault();
        router.push(allUrls[currentIndex - 1]);
      } else if (e.key === "ArrowRight" && currentIndex < allUrls.length - 1) {
        e.preventDefault();
        router.push(allUrls[currentIndex + 1]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pathname, allUrls, router]);

  // Scroll active link into view
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
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

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
                                {subgroup.items
                                  .sort((a, b) => a.name.localeCompare(b.name))
                                  .map((item) => (
                                    <CompSidebarLink
                                      key={item.name}
                                      {...item}
                                    />
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
