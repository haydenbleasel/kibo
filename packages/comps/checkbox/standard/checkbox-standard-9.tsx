import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const title = "Right-Aligned Checkbox";

const items = [
  { id: "email", label: "Email notifications" },
  { id: "push", label: "Push notifications" },
  { id: "sms", label: "SMS notifications" },
];

const Example = () => (
  <div className="space-y-3">
    {items.map((item) => (
      <div className="flex items-center justify-between" key={item.id}>
        <Label htmlFor={item.id}>{item.label}</Label>
        <Checkbox id={item.id} />
      </div>
    ))}
  </div>
);

export default Example;
