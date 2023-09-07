"use client";

import { useGithubStore } from "@/store/github";

export function EditedAt() {
  const state = useGithubStore((state) => state);

  const lastEditAt = state.editedAt;

  return (
    <span className="text-sm text-zinc-500 mx-[2px] px-2 py-1 hover:bg-zinc-800 rounded hover:cursor-pointer">
      Edited {lastEditAt}
    </span>
  );
}
