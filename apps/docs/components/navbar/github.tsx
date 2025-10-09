import { SiGithub } from "@icons-pack/react-simple-icons";
import { Button } from "@repo/shadcn-ui/components/ui/button";
import { cn } from "@repo/shadcn-ui/lib/utils";

const DAY = 86_400;

type GitHubProps = {
  className?: string;
};

export const GitHub = async ({ className }: GitHubProps) => {
  const data = await fetch("https://api.github.com/repos/haydenbleasel/kibo", {
    // Cache for 1 day (86400 seconds)
    next: { revalidate: DAY },
  });
  const json = await data.json();

  return (
    <Button
      asChild
      className={cn("h-8 shadow-none", className)}
      size="sm"
      variant="outline"
    >
      <a
        href="https://github.com/haydenbleasel/kibo"
        rel="noreferrer"
        target="_blank"
      >
        <SiGithub />
        <span className="text-muted-foreground text-xs tabular-nums">
          {new Intl.NumberFormat("en-US", {
            notation: "compact",
          }).format(json.stargazers_count)}
        </span>
      </a>
    </Button>
  );
};
