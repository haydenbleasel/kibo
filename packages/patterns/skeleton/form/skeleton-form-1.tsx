import { Skeleton } from "@/components/ui/skeleton";

export const title = "Input Fields";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-4">
    <div className="flex flex-col gap-2">
      <Skeleton className="h-4 w-16" />
      <Skeleton className="h-10 w-full" />
    </div>
    <div className="flex flex-col gap-2">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-10 w-full" />
    </div>
    <div className="flex flex-col gap-2">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-10 w-full" />
    </div>
  </div>
);

export default Example;
