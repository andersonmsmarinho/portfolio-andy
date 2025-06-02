import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export interface GitHubRepo {
  id: string;
  name: string;
  description: string | undefined;
  url: string;
  topics: string[];
  language: string | undefined;
  stargazers_count: number | undefined;
  forks_count: number | undefined;
  updated_at: string | undefined;
  homepage: string | undefined;
}

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const { data: repos } = await octokit.repos.listForUser({
      username,
      sort: 'updated',
      direction: 'desc',
      per_page: 100,
    });

    return repos.map(repo => ({
      id: repo.id.toString(),
      name: repo.name,
      description: repo.description ?? undefined,
      url: repo.html_url,
      topics: repo.topics || [],
      language: repo.language ?? undefined,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      updated_at: repo.updated_at ?? undefined,
      homepage: repo.homepage ?? undefined,
    }));
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
}

export async function getRepoDetails(username: string, repoName: string): Promise<GitHubRepo | null> {
  try {
    const { data: repo } = await octokit.repos.get({
      owner: username,
      repo: repoName,
    });

    // Fetch topics using octokit.request
    const { data: topicsData } = await octokit.request('GET /repos/{owner}/{repo}/topics', {
      owner: username,
      repo: repoName,
      headers: {
        accept: 'application/vnd.github.mercy-preview+json',
      },
    });

    return {
      id: repo.id.toString(),
      name: repo.name,
      description: repo.description ?? undefined,
      url: repo.html_url,
      topics: topicsData.names || [],
      language: repo.language ?? undefined,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      updated_at: repo.updated_at ?? undefined,
      homepage: repo.homepage ?? undefined,
    };
  } catch (error) {
    console.error('Error fetching repository details:', error);
    return null;
  }
} 