import { Separator } from "@/components/ui/separator";

export const title = "In Navigation";

const Example = () => (
  <div className="flex items-center space-x-2 text-sm">
    <a href="#" className="hover:underline">
      Home
    </a>
    <Separator orientation="vertical" className="h-4" />
    <a href="#" className="hover:underline">
      Products
    </a>
    <Separator orientation="vertical" className="h-4" />
    <a href="#" className="hover:underline">
      About
    </a>
  </div>
);

export default Example;
