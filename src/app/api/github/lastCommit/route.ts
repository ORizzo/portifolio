import { NextResponse } from "next/server";

export const revalidate = true;

export async function GET() {
  try {
    const repositoriesCommits = await fetch(
      "https://api.github.com/repos/ORizzo/portifolio/commits",
      {
        next: {
          revalidate: 60,
        },
        cache: "force-cache",
      }
    ).then((res) => res.json());

    const lastCommit = repositoriesCommits[0];

    return NextResponse.json(lastCommit);
  } catch (error) {
    return NextResponse.json("Error:" + (error as Error).message);
  }
}
