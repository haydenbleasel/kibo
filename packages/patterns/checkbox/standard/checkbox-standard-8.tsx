import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const title = "Vertical List Checkbox";

const items = [
  { id: "javascript", label: "JavaScript" },
  { id: "typescript", label: "TypeScript" },
  { id: "python", label: "Python" },
  { id: "java", label: "Java" },
  { id: "csharp", label: "C#" },
];

const Example = () => (
  <div className="space-y-3">
    {items.map((item) => (
      <div className="flex items-center space-x-2" key={item.id}>
        <Checkbox id={item.id} />
        <Label htmlFor={item.id}>{item.label}</Label>
      </div>
    ))}
  </div>
);

export default Example;
