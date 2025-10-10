import { VerifiedIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const title = "Avatar with Verification Check";

const Example = () => (
  <div className="relative w-fit">
    <Avatar className="rounded-lg">
      <AvatarImage
        alt="@haydenbleasel"
        src="https://github.com/haydenbleasel.png"
      />
      <AvatarFallback className="rounded-lg">HB</AvatarFallback>
    </Avatar>
    <span className="-bottom-1 -right-1 absolute flex size-4 items-center justify-center rounded-full bg-background">
      <VerifiedIcon className="size-full fill-blue-500 text-white" />
    </span>
  </div>
);

export default Example;
