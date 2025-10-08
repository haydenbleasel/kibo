import { faker } from "@faker-js/faker";
import { Mail, MapPin, MinusIcon, PlusIcon, User } from "lucide-react";
import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

export const title = "Form with Plus Trigger";

type FormSection = {
  id: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
  isComplete?: boolean;
};

const sections: FormSection[] = [
  {
    id: faker.string.uuid(),
    icon: <User className="size-4 stroke-2 text-muted-foreground" />,
    title: "Personal Information",
    children: (
      <div className="flex flex-col gap-2">
        <Input placeholder="First Name" type="text" />
        <Input placeholder="Last Name" type="text" />
      </div>
    ),
  },
  {
    id: faker.string.uuid(),
    icon: <Mail className="size-4 stroke-2 text-muted-foreground" />,
    title: "Contact Information",
    children: (
      <div className="flex flex-col gap-2">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Phone" type="tel" />
      </div>
    ),
  },
  {
    id: faker.string.uuid(),
    icon: <MapPin className="size-4 stroke-2 text-muted-foreground" />,
    title: "Address Information",
    children: (
      <div className="flex flex-col gap-2">
        <Input placeholder="Street" type="text" />
        <Input placeholder="City" type="text" />
        <Input placeholder="State" type="text" />
        <Input placeholder="Zip" type="text" />
      </div>
    ),
  },
];

const Example = () => (
  <Accordion className="-space-y-px w-full max-w-md" collapsible type="single">
    {sections.map((section) => (
      <AccordionItem
        className="overflow-hidden border bg-background px-4 first:rounded-t-lg last:rounded-b-lg last:border-b"
        key={section.id}
        value={section.id}
      >
        <AccordionTrigger className="group hover:no-underline [&>svg]:hidden">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              {section.icon}
              <span>{section.title}</span>
              {section.isComplete && (
                <span className="ml-2 text-green-500 text-sm">✓</span>
              )}
            </div>
            <div className="relative size-4 shrink-0">
              <PlusIcon className="absolute inset-0 size-4 text-muted-foreground transition-opacity duration-200 group-data-[state=open]:opacity-0" />
              <MinusIcon className="absolute inset-0 size-4 text-muted-foreground opacity-0 transition-opacity duration-200 group-data-[state=open]:opacity-100" />
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>{section.children}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default Example;
