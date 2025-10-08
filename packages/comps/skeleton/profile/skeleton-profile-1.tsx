import { Skeleton } from "@/components/ui/skeleton";

export const title = "User Profile Header";

const Example = () => (
  <div className="flex w-full max-w-md flex-col items-center gap-4 rounded-md border p-6">
    <Skeleton className="size-24 rounded-full" />
    <div className="flex w-full flex-col items-center gap-2">
      <Skeleton className="h-6 w-40" />
      <Skeleton className="h-4 w-32" />
    </div>
    <div className="flex w-full justify-center gap-2">
      <Skeleton className="h-9 w-24" />
      <Skeleton className="h-9 w-24" />
    </div>
  </div>
);

export default Example;
