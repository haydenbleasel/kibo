import { Separator } from "@/components/ui/separator";

export const title = "In Navigation";

const Example = () => (
  <div className="flex items-center space-x-2 text-sm">
    <a className="hover:underline" href="#">
      Home
    </a>
    <Separator className="h-4" orientation="vertical" />
    <a className="hover:underline" href="#">
      Products
    </a>
    <Separator className="h-4" orientation="vertical" />
    <a className="hover:underline" href="#">
      About
    </a>
  </div>
);

export default Example;
