import moment from "moment";

import { GetLastEditDate } from "@/services/api/getLastEditDate";

import Tooltip from "@/components/Tooltip";

async function EditedAt() {
  const lastCommitDate = await GetLastEditDate();

  const formatedDate = moment(lastCommitDate).format("MMM Do");

  const dateSinceLastCommitDate = moment(lastCommitDate).fromNow();

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

export { EditedAt };
