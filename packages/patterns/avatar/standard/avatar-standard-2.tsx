import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const title = "Avatar with Placeholder Initials";

const Example = () => (
  <Avatar>
    <AvatarFallback>HB</AvatarFallback>
  </Avatar>
);

export default Example;
