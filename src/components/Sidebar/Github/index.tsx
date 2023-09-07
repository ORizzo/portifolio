import { Suspense } from "react";
import { EditedAt } from "./EditedAt";
import { GithubRepositoryLink } from "./Link";

function GithubSection() {
  return (
    <>
      <GithubRepositoryLink />
      <Suspense>
        <EditedAt />
      </Suspense>
    </>
  );
}

export { GithubSection };
