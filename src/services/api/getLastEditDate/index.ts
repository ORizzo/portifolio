import { nextApi } from "@/services/api";
import { Commit } from "@/types/Github/commit";

async function GetLastEditDate(): Promise<string> {
  const api = await nextApi<Commit>("/api/github/lastCommit", {
    next: {
      revalidate: 60,
    },
    cache: "force-cache",
  });

  const lastEditDate = api.commit.author.date;

  return lastEditDate;
}

export { GetLastEditDate };
