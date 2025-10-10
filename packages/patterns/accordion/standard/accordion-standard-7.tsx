import { faker } from "@faker-js/faker";
import {
  FileText,
  Folder,
  MinusIcon,
  PlusIcon,
  Settings,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const title = "Full Featured";

const icons = [FileText, Folder, Settings, Users];

const data: {
  value: string;
  title: string;
  subtitle: string;
  content: string;
  icon: ReactNode;
}[] = [];

for (let i = 0; i < 4; i++) {
  const Icon = icons[i];
  data.push({
    value: faker.string.uuid(),
    title: faker.company.catchPhrase(),
    subtitle: faker.company.buzzPhrase(),
    content: faker.lorem.paragraph(),
    icon: <Icon className="size-4 text-muted-foreground" />,
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
            <div className="flex items-center gap-3">
              {item.icon}
              <div className="flex flex-col items-start text-left">
                <span>{item.title}</span>
                <span className="text-muted-foreground text-sm">
                  {item.subtitle}
                </span>
              </div>
            </div>
            <div className="relative size-4 shrink-0">
              <PlusIcon className="absolute inset-0 size-4 text-muted-foreground transition-opacity duration-200 group-data-[state=open]:opacity-0" />
              <MinusIcon className="absolute inset-0 size-4 text-muted-foreground opacity-0 transition-opacity duration-200 group-data-[state=open]:opacity-100" />
            </div>
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
