import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const title = "Horizontal List Checkbox";

const items = [
  { id: "monday", label: "Monday" },
  { id: "tuesday", label: "Tuesday" },
  { id: "wednesday", label: "Wednesday" },
  { id: "thursday", label: "Thursday" },
  { id: "friday", label: "Friday" },
];

const Example = () => (
  <div className="flex flex-wrap gap-4">
    {items.map((item) => (
      <div className="flex items-center space-x-2" key={item.id}>
        <Checkbox id={item.id} />
        <Label htmlFor={item.id}>{item.label}</Label>
      </div>
    ))}
  </div>
);

export default Example;
