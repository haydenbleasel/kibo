import { faker } from "@faker-js/faker";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const title = "Tabs";

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
    className="flex w-full max-w-md flex-col gap-2"
    collapsible
    defaultValue={data[0].value}
    type="single"
  >
    {data.map((item) => (
      <AccordionItem
        className="overflow-hidden rounded-lg border bg-background px-4 last:border-b"
        key={item.value}
        value={item.value}
      >
        <AccordionTrigger>{item.title}</AccordionTrigger>
        <AccordionContent>
          <p className="text-muted-foreground">{item.content}</p>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default Example;
