type Repo = {
  id: string;
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  forkCount: number;
  updatedAt: string;
  primaryLanguage: {
    name: string;
  } | null;
};

export type GithubResponse = {
  featured: Repo[];
  others: Repo[];
};

export async function getGithubRepos(): Promise<GithubResponse> {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username || !token) {
    throw new Error("Missing GitHub environment variables");
  }

  const query = `
    query($username: String!) {
      user(login: $username) {

        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id
              name
              description
              url
              stargazerCount
              forkCount
              updatedAt

              primaryLanguage {
                name
              }
            }
          }
        }

        repositories(
          first: 100
          orderBy: {
            field: UPDATED_AT
            direction: DESC
          }
          privacy: PUBLIC
          ownerAffiliations: OWNER
          isFork: false
        ) {
          nodes {
            id
            name
            description
            url
            stargazerCount
            forkCount
            updatedAt

            primaryLanguage {
              name
            }
          }
        }
      }
    }
  `;

  const response = await fetch(
    "https://api.github.com/graphql",
    {
      method: "POST",

      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        query,
        variables: {
          username,
        },
      }),

      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error("GitHub API Error");
  }

  const result = await response.json();

  const featured: Repo[] =
    result.data.user.pinnedItems.nodes;

  const pinnedIds = featured.map(
    (repo) => repo.id
  );

  const others: Repo[] =
    result.data.user.repositories.nodes.filter(
      (repo: Repo) =>
        !pinnedIds.includes(repo.id)
    );

  return {
    featured,
    others,
  };
}