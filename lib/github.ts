export const FEATURED_REPOS = [
  "incidentiq",
  "ai-based-proctoring-system",
  "NexTalk",
];

const USERNAME = "Tilakrajrawat";

export async function getFeaturedRepos() {
  const repos = await Promise.all(
    FEATURED_REPOS.map(async (repo) => {
      const res = await fetch(
        `https://api.github.com/repos/${USERNAME}/${repo}`,
        {
          cache: "no-store",

          headers: {
            Accept: "application/vnd.github+json",
          },
        }
      );

      if (!res.ok) return null;

      return res.json();
    })
  );

  return repos.filter(Boolean);
}