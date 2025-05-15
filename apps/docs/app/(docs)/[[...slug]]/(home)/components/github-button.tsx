import { SiGithub } from '@icons-pack/react-simple-icons';
import { Button } from '@repo/shadcn-ui/components/ui/button';
import { unstable_cache } from 'next/cache';
import type { ReactElement } from 'react';
import { octokit } from '../../../../../lib/octokit';

const getGitHubData = unstable_cache(
  async () => {
    try {
      const { data } = await octokit.rest.repos.get({
        owner: 'haydenbleasel',
        repo: 'kibo',
      });
      return {
        stars: data.stargazers_count,
        url: data.html_url,
      };
    } catch (error) {
      // biome-ignore lint/suspicious/noConsole: "it's fine"
      console.error(error);
      return {
        stars: 0,
        url: '',
      };
    }
  },
  ['github-stats'],
  {
    revalidate: 3600, // Cache for 1 hour
  }
);

export const GitHubButton = async (): Promise<ReactElement> => {
  const { stars, url } = await getGitHubData();

  return (
    <Button
      asChild
      variant="outline"
      size="lg"
      className="border-none p-0 ring ring-1 ring-border"
    >
      <a target="_blank" rel="noreferrer" href={url}>
        <div className="flex h-full items-center">
          <div className="flex items-center gap-2 px-4 py-2">
            <SiGithub size={16} />
            <div className="hidden sm:block">GitHub</div>
          </div>
          <div className="h-full w-px bg-border" />
          <div className="px-4 py-2">
            <div>{stars}</div>
          </div>
        </div>
      </a>
    </Button>
  );
};
