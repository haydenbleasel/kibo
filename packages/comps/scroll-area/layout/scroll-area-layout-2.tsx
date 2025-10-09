import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const title = "Scrollable Tags";

const tags = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Radix UI",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "REST API",
  "Docker",
  "Kubernetes",
  "AWS",
  "Vercel",
  "Git",
  "GitHub",
  "CI/CD",
];

const Example = () => (
  <div className="w-full max-w-md space-y-2">
    <h3 className="font-semibold text-sm">Technologies</h3>
    <ScrollArea className="w-full whitespace-nowrap rounded-md border bg-background">
      <div className="flex w-max space-x-2 p-4">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  </div>
);

export default Example;
