import { faker } from "@faker-js/faker";
import { MinusIcon, PlusIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const title = "Subtitle with Plus Trigger";

const data: {
  value: string;
  title: string;
  subtitle: string;
  content: string;
}[] = [];

for (const _ of new Array(4).fill(0)) {
  data.push({
    value: faker.string.uuid(),
    title: faker.company.catchPhrase(),
    subtitle: faker.company.buzzPhrase(),
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
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col items-start text-left">
              <span>{item.title}</span>
              <span className="text-muted-foreground text-sm">
                {item.subtitle}
              </span>
            </div>
            <div className="relative size-4 shrink-0">
              <PlusIcon className="absolute inset-0 size-4 text-muted-foreground transition-opacity duration-200 group-data-[state=open]:opacity-0" />
              <MinusIcon className="absolute inset-0 size-4 text-muted-foreground opacity-0 transition-opacity duration-200 group-data-[state=open]:opacity-100" />
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-muted-foreground">{item.content}</p>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default Example;
