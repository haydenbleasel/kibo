import { Button } from "@repo/shadcn-ui/components/ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { docs, meta } from "@/.source";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export const MobileMenu = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button className="size-8" size="icon" variant="ghost">
        <MenuIcon size={16} />
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader className="sr-only">
        <DrawerTitle>Mobile Menu</DrawerTitle>
      </DrawerHeader>
      <div className="flex flex-col space-y-4 overflow-y-auto px-6 pt-8 pb-12">
        {meta.map((group) => (
          <div className="flex flex-col gap-2" key={group.title}>
            <p className="font-medium">{group.title}</p>
            {group.pages?.map((page) =>
              page.startsWith("---") ? undefined : (
                <DrawerClose asChild key={page}>
                  <Link
                    className="text-muted-foreground"
                    href={`/${group.title?.toLowerCase()}/${page}`}
                    key={page}
                  >
                    {
                      docs.find(
                        (doc) =>
                          doc.info.path ===
                          `${group.title?.toLowerCase()}/${page}.mdx`
                      )?.title
                    }
                  </Link>
                </DrawerClose>
              )
            )}
          </div>
        ))}
      </div>
    </DrawerContent>
  </Drawer>
);
