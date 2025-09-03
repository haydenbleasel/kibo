import { Octokit } from "@octokit/rest";

export const octokit: Octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});
