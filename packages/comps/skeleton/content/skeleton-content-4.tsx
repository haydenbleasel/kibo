import { Skeleton } from "@/components/ui/skeleton";

export const title = "Detailed Article";

const Example = () => (
  <div className="flex w-full max-w-3xl flex-col gap-8">
    <div className="flex flex-col gap-4">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
    <Skeleton className="h-96 w-full" />
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      <div className="flex flex-col gap-3">
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/6" />
      </div>
      <Skeleton className="h-48 w-full" />
    </div>
  </div>
);

export default Example;
