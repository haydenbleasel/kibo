import { Skeleton } from "@/components/ui/skeleton";

export const title = "Profile Settings Form";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-6">
    <div className="flex flex-col gap-2">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-10 w-full" />
    </div>
    <div className="flex flex-col gap-2">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-10 w-full" />
    </div>
    <div className="flex flex-col gap-2">
      <Skeleton className="h-4 w-16" />
      <Skeleton className="h-10 w-full" />
    </div>
    <div className="flex flex-col gap-2">
      <Skeleton className="h-4 w-28" />
      <Skeleton className="h-24 w-full" />
    </div>
    <Skeleton className="h-10 w-32" />
  </div>
);

export default Example;
