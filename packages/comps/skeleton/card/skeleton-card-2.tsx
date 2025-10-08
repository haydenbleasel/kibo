import { Skeleton } from "@/components/ui/skeleton";

export const title = "Card with Avatar and Content";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-3 rounded-md border p-4">
    <div className="flex items-center gap-3">
      <Skeleton className="size-12 rounded-full" />
      <div className="flex flex-1 flex-col gap-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-3 w-32" />
      </div>
    </div>
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-5/6" />
    <Skeleton className="h-4 w-4/6" />
  </div>
);

export default Example;
