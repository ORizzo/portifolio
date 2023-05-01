import { Commit } from "@/types/commit";

async function GetLastEditDate(): Promise<string> {
  const repositoriesCommits: Commit[] = await fetch(
    "https://api.github.com/repos/ORizzo/portifolio/commits",
    {
      next: {
        revalidate: 60,
      },
      cache: "force-cache",
    }
  ).then((res) => res.json());

  const lastCommit = repositoriesCommits[0];

  const lastEditDate = lastCommit.commit.author.date;

  return lastEditDate;
}

export { GetLastEditDate };
