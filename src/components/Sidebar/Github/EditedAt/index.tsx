import moment from "moment";

import { GetLastEditDate } from "@/services/api/getLastEditDate";

import { EditedAtLabel } from "./label";

async function EditedAt() {
  const lastCommitDate = await GetLastEditDate();

  const formatedDate = moment(lastCommitDate).format("MMM Do");

  const dateSinceLastCommitDate = moment(lastCommitDate).fromNow();

  return (
    <EditedAtLabel
      dateSinceLastCommitDate={dateSinceLastCommitDate}
      formatedDate={formatedDate}
    />
  );
}

export { EditedAt };
