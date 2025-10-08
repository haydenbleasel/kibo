import { User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const title = "Avatar with Placeholder Icon";

const Example = () => (
  <Avatar className="rounded-lg">
    <AvatarFallback className="rounded-lg">
      <User className="size-4" />
    </AvatarFallback>
  </Avatar>
);

export default Example;
