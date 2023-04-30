import { EditedAt } from "./EditedAt";
import { GithubRepositoryLink } from "./Link";

function GithubSection() {
  return (
    <>
      <GithubRepositoryLink />
      {/*@ts-expect-error */}
      <EditedAt />
    </>
  );
}

export { GithubSection };
