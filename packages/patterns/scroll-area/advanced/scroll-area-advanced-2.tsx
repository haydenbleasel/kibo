"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export const title = "Dynamic Content";

const Example = () => {
  const [items, setItems] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `Item ${i + 1}`,
      description: `This is the description for item ${i + 1}`,
    }))
  );

  const loadMore = () => {
    const newItems = Array.from({ length: 5 }, (_, i) => ({
      id: items.length + i + 1,
      title: `Item ${items.length + i + 1}`,
      description: `This is the description for item ${items.length + i + 1}`,
    }));
    setItems([...items, ...newItems]);
  };

  return (
    <div className="w-full max-w-md space-y-4">
      <ScrollArea className="h-[400px] rounded-md border bg-background">
        <div className="space-y-4 p-4">
          {items.map((item) => (
            <div
              className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm"
              key={item.id}
            >
              <h3 className="font-semibold text-sm">{item.title}</h3>
              <p className="mt-1 text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
          <Button className="w-full" onClick={loadMore} variant="outline">
            Load More
          </Button>
        </div>
      </ScrollArea>
      <p className="text-center text-muted-foreground text-sm">
        Showing {items.length} items
      </p>
    </div>
  );
};

export default Example;
