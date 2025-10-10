import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const title = "Avatar with Placeholder Initials";

const Example = () => (
  <Avatar className="rounded-lg">
    <AvatarFallback className="rounded-lg">HB</AvatarFallback>
  </Avatar>
);

export default Example;
