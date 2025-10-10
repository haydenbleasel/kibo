import { faker } from "@faker-js/faker";
import { MinusIcon, PlusIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const title = "Standard with Left Plus Trigger";

const data: { value: string; title: string; content: string }[] = [];

for (const _ of new Array(4).fill(0)) {
  data.push({
    value: faker.string.uuid(),
    title: faker.company.catchPhrase(),
    content: faker.lorem.paragraph(),
  });
}

const Example = () => (
  <Accordion
    className="-space-y-px w-full max-w-md"
    collapsible
    defaultValue={data[0].value}
    type="single"
  >
    {data.map((item) => (
      <AccordionItem
        className="overflow-hidden border bg-background px-4 first:rounded-t-lg last:rounded-b-lg last:border-b"
        key={item.value}
        value={item.value}
      >
        <AccordionTrigger className="group hover:no-underline [&>svg]:hidden">
          <div className="flex w-full items-center gap-3">
            <div className="relative size-4 shrink-0">
              <PlusIcon className="absolute inset-0 size-4 text-muted-foreground transition-opacity duration-200 group-data-[state=open]:opacity-0" />
              <MinusIcon className="absolute inset-0 size-4 text-muted-foreground opacity-0 transition-opacity duration-200 group-data-[state=open]:opacity-100" />
            </div>
            <span className="flex-1 text-left">{item.title}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="ps-7">
          <p className="text-muted-foreground">{item.content}</p>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default Example;
