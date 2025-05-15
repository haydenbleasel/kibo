import { SiGithub } from '@icons-pack/react-simple-icons';
import { cn } from '@repo/shadcn-ui/lib/utils';
import type { ReactElement } from 'react';
import { octokit } from '../../../../../lib/octokit';

type GitHubButtonProps = {
  className?: string;
};

export const GitHubButton = async ({
  className,
}: GitHubButtonProps): Promise<ReactElement> => {
  let stars = 0;
  let url = '';

  try {
    const { data } = await octokit.rest.repos.get({
      owner: 'haydenbleasel',
      repo: 'kibo',
    });
    stars = data.stargazers_count;
    url = data.html_url;
  } catch (error) {
    // biome-ignore lint/suspicious/noConsole: "it's fine"
    console.error(error);
  }

  return (
    <a
      target="_blank"
      rel="noreferrer"
      className={cn(
        'group relative inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md border bg-white font-medium text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      href={url}
    >
      <div className="flex h-full items-center">
        <div className="flex items-center gap-2 px-4 py-2">
          <SiGithub size={16} />
          <div className="hidden sm:block">GitHub</div>
        </div>
        <div className="h-full w-px bg-neutral-200" />
        <div className="px-4 py-2">
          <div>{stars}</div>
        </div>
      </div>
    </a>
  );
};
