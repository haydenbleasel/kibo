import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const title = "Avatar";

const Example = () => (
  <Avatar>
    <AvatarImage
      alt="@haydenbleasel"
      src="https://github.com/haydenbleasel.png"
    />
    <AvatarFallback>HB</AvatarFallback>
  </Avatar>
);

export default Example;
