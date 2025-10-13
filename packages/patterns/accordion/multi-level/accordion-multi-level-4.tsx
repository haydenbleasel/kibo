import { faker } from "@faker-js/faker";
import { ChevronDown, MinusIcon, PlusIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const title = "Multi-level with Left Plus Trigger";

const items: {
  id: string;
  title: string;
  collapsibles: {
    id: string;
    title: string;
    content: string;
    open?: boolean;
  }[];
}[] = [];

for (const _ of new Array(4).fill(0)) {
  items.push({
    id: faker.string.uuid(),
    title: faker.company.catchPhrase(),
    collapsibles: new Array(2).fill(0).map(() => ({
      id: faker.string.uuid(),
      title: faker.company.catchPhrase(),
      content: faker.lorem.paragraph(),
    })),
  });
}

const Example = () => (
  <Accordion
    className="-space-y-1 w-full max-w-md"
    collapsible
    defaultValue={items[0].id}
    type="single"
  >
    {items.map((item) => (
      <AccordionItem
        className="overflow-hidden border bg-background first:rounded-t-lg last:rounded-b-lg last:border-b"
        key={item.id}
        value={item.id}
      >
        <AccordionTrigger className="group px-4 py-3 hover:no-underline [&>svg]:hidden">
          <div className="flex w-full items-center gap-3">
            <div className="relative size-4 shrink-0">
              <PlusIcon className="absolute inset-0 size-4 text-muted-foreground transition-opacity duration-200 group-data-[state=open]:opacity-0" />
              <MinusIcon className="absolute inset-0 size-4 text-muted-foreground opacity-0 transition-opacity duration-200 group-data-[state=open]:opacity-100" />
            </div>
            <span className="flex-1 text-left">{item.title}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-0">
          {item.collapsibles.map((collapsible) => (
            <Collapsible
              className="space-y-1 border-border border-t bg-accent px-4 py-3"
              defaultOpen={collapsible.open}
              key={collapsible.id}
            >
              <CollapsibleTrigger className="flex gap-2 font-medium tracking-tight [&[data-state=open]>svg]:rotate-180">
                <ChevronDown
                  aria-hidden="true"
                  className="mt-1 shrink-0 opacity-60 transition-transform duration-200"
                  size={16}
                  strokeWidth={2}
                />
                {collapsible.title}
              </CollapsibleTrigger>
              <CollapsibleContent className="overflow-hidden ps-6 text-muted-foreground text-sm transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                {collapsible.content}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default Example;
