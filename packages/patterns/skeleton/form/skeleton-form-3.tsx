import { Skeleton } from "@/components/ui/skeleton";

export const title = "Multi-column Form";

const Example = () => (
  <div className="flex w-full max-w-2xl flex-col gap-6">
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <Skeleton className="h-4 w-16" />
      <Skeleton className="h-10 w-full" />
    </div>
    <Skeleton className="h-10 w-32" />
  </div>
);

export default Example;
