"use client";

import { SidebarTrigger } from "@repo/shadcn-ui/components/ui/sidebar";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { type ReactNode, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { processFolderName } from "../../../../../../lib/patterns";

type ComponentPreviewProps = {
  component: string;
  collection: string;
  code: string;
  title: string;
  children: ReactNode;
};

export const ComponentPreview = ({
  code,
  collection,
  title,
  component,
  children,
}: ComponentPreviewProps) => {
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <Tabs
      className="mt-2 mb-4 flex h-[calc(100%-4.5rem)] flex-col gap-0"
      onValueChange={setActiveTab}
      value={activeTab}
    >
      <header className="flex shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-3">
          <SidebarTrigger className="md:hidden" />
          <Separator className="mr-2 h-4" orientation="vertical" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbPage className="capitalize">
                  {processFolderName(component)}
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbPage className="capitalize">
                  {processFolderName(collection)}
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage className="capitalize">{title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <TabsList className="mr-6 ml-auto">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
      </header>
      <TabsContent className="flex-1 px-6 py-4" value="preview">
        <div className="flex size-full items-center justify-center rounded-lg bg-secondary/50 p-8">
          {children}
        </div>
      </TabsContent>
      <TabsContent className="flex-1 overflow-hidden px-6 py-4" value="code">
        <div className="size-full overflow-hidden [&_.fd-scroll-container]:h-full [&_.fd-scroll-container]:max-h-none [&_figure]:h-full [&_figure]:overflow-hidden [&_figure]:border-none [&_figure]:bg-secondary/50">
          <DynamicCodeBlock code={code} lang="tsx" />
        </div>
      </TabsContent>
    </Tabs>
  );
};
