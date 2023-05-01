import moment from "moment";

import { GetLastEditDate } from "@/services/api/getLastEditDate";

import Tooltip from "@/components/Tooltip";

async function EditedAt() {
  const lastCommitDate = await GetLastEditDate();

  const formatedDate = moment(lastCommitDate).format("MMM Do");

  const dateSinceLastCommitDate = moment(lastCommitDate).fromNow();

  return (
    <div className="py-3 px-1 pt-4">
      <Tooltip label={dateSinceLastCommitDate}>
        <span className="text-sm font-semibold text-zinc-500 mx-1 hover:cursor-default">
          Last edit at {formatedDate}
        </span>
      </Tooltip>
    </div>
  );
}

export { EditedAt };
