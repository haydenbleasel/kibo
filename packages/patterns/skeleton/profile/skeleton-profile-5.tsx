import { Skeleton } from "@/components/ui/skeleton";

export const title = "Team Member Card";

const Example = () => (
  <div className="flex w-full max-w-xs flex-col items-center gap-4 rounded-md border p-6 text-center">
    <Skeleton className="size-20 rounded-full" />
    <div className="flex w-full flex-col items-center gap-2">
      <Skeleton className="h-5 w-32" />
      <Skeleton className="h-4 w-24" />
    </div>
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-5/6" />
    <div className="flex gap-2 pt-2">
      <Skeleton className="size-8 rounded-full" />
      <Skeleton className="size-8 rounded-full" />
      <Skeleton className="size-8 rounded-full" />
    </div>
  </div>
);

export default Example;
