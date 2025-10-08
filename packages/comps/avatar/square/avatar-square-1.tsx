import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const title = "Avatar";

const Example = () => (
  <Avatar className="rounded-lg">
    <AvatarImage
      alt="@haydenbleasel"
      src="https://github.com/haydenbleasel.png"
    />
    <AvatarFallback className="rounded-lg">HB</AvatarFallback>
  </Avatar>
);

export default Example;
