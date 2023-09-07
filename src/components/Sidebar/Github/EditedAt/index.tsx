"use client";

import moment from "moment";

import { GetLastEditDate } from "@/services/api/getLastEditDate";

import { EditedAtLabel } from "./label";
import useSWR from "swr";

function EditedAt() {
  const { data } = useSWR("/editedAt", GetLastEditDate, {
    suspense: true,
    fallbackData: "...",
  });

  if (data === "...") {
    return (
      <p className="text-sm font-semibold text-zinc-500 mx-1">loading...</p>
    );
  }

  const formatedDate = moment(data).format("MMM Do");

  const dateSinceLastCommitDate = moment(data).fromNow();

  return (
    <EditedAtLabel
      dateSinceLastCommitDate={dateSinceLastCommitDate}
      formatedDate={formatedDate}
    />
  );
}

export { EditedAt };
