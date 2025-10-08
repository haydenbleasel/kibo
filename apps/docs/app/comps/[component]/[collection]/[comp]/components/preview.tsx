"use client";

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
      className="mt-2 h-full gap-0"
      onValueChange={setActiveTab}
      value={activeTab}
    >
      <header className="flex shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-3">
          <Separator className="mr-2 h-4" orientation="vertical" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbPage className="capitalize">
                  {component}
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbPage className="capitalize">
                  {collection}
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
      <TabsContent className="px-6 py-4" value="preview">
        <div className="flex size-full items-center justify-center rounded-lg bg-secondary/50 p-8">
          {children}
        </div>
      </TabsContent>
      <TabsContent className="px-6 py-4" value="code">
        <div className="size-full [&_figure]:border-none [&_figure]:bg-secondary/50">
          <DynamicCodeBlock code={code} lang="tsx" />
        </div>
      </TabsContent>
    </Tabs>
  );
};
