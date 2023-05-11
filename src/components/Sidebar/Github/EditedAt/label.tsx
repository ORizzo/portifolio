"use client";

import Tooltip from "@/components/Tooltip";

import { useGithubStore } from "@/store/github";

function EditedAtLabel({
  dateSinceLastCommitDate,
  formatedDate,
}: {
  dateSinceLastCommitDate: string;
  formatedDate: string;
}) {
  const setEditedAt = useGithubStore((state) => state.setEditedAt);
  setEditedAt(formatedDate);
  return (
    <Tooltip label={dateSinceLastCommitDate}>
      <div className="px-1 mb-4">
        <span className="text-sm font-semibold text-zinc-500 mx-1 hover:cursor-default flex">
          Last edit at {formatedDate}
        </span>
      </div>
    </Tooltip>
  );
}

export { EditedAtLabel };
