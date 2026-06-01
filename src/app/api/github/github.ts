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
  totalCount: number;
  lastUpdated: string;
};

export async function getGithubRepos(): Promise<GithubResponse> {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username || !token) {
    console.error("Missing GitHub environment variables");
    return {
      featured: [],
      others: [],
      totalCount: 0,
      lastUpdated: new Date().toISOString(),
    };
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
          orderBy: { field: UPDATED_AT, direction: DESC }
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

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "Thiago-Vitor-Portfolio",
      },
      body: JSON.stringify({ query, variables: { username } }),
      next: {
        revalidate: 3600, // 1 hora
        tags: ["github-repos"],
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API Error: ${response.status}`);
    }

    const result = await response.json();

    if (result.errors) {
      throw new Error(result.errors[0].message);
    }

    const featured: Repo[] = result.data.user.pinnedItems.nodes || [];
    const pinnedIds = new Set(featured.map((repo) => repo.id));
    const others: Repo[] = (result.data.user.repositories.nodes || []).filter(
      (repo: Repo) => !pinnedIds.has(repo.id)
    );

    return {
      featured,
      others,
      totalCount: featured.length + others.length,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error);
    return {
      featured: [],
      others: [],
      totalCount: 0,
      lastUpdated: new Date().toISOString(),
    };
  }
}