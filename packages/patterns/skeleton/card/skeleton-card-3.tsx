import { Skeleton } from "@/components/ui/skeleton";

export const title = "Card with Badge and Tags";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-3 rounded-md border p-4">
    <div className="flex items-center gap-2">
      <Skeleton className="h-5 w-16 rounded-full" />
      <Skeleton className="h-5 w-20 rounded-full" />
    </div>
    <Skeleton className="h-6 w-3/4" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-5/6" />
    <div className="mt-2 flex gap-2">
      <Skeleton className="h-8 w-20" />
      <Skeleton className="h-8 w-24" />
    </div>
  </div>
);

export default Example;
