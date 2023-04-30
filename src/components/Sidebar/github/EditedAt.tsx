import moment from "moment";

async function EditedAt() {
  const repositoriesCommits = await fetch(
    "https://api.github.com/repos/ORizzo/portifolio/commits"
  ).then((res) => res.json());

  const lastCommit = repositoriesCommits[0];

  const formatedDate = moment(lastCommit.commit.author.date).format("MMM Do");

  return (
    <div className="py-3 px-1">
      <span className="text-sm font-semibold text-zinc-500 mx-1 hover:cursor-default">
        Last edit at {formatedDate}
      </span>
    </div>
  );
}

export { EditedAt };
