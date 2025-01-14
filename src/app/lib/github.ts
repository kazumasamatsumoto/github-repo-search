import { SearchResponse, Repository } from "@/app/types/github";

export async function searchRepositories(
  query: string,
  page: number = 1
): Promise<SearchResponse> {
  const res = await fetch(
    `https://api.github.com/search/repositories?q=${encodeURIComponent(
      query
    )}&page=${page}&per_page=10`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch repositories");
  }

  return res.json();
}

export async function getRepository(
  owner: string,
  name: string
): Promise<Repository> {
  const res = await fetch(`https://api.github.com/repos/${owner}/${name}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch repository");
  }

  return res.json();
}
