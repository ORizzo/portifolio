import { Github } from "lucide-react";

import Link from "next/link";

function GithubRepositoryLink() {
  return (
    <div className="mx-1">
      <Link href="https://github.com/ORizzo/portifolio">
        <div className="hover:bg-zinc-800 hover:cursor-pointer rounded-sm flex items-center text-zinc-500 hover:text-zinc-400">
          <div className="flex items-center mx-1 ">
            <div className="px-3 py-2 w-9">
              <Github size={16} strokeWidth={2} />
            </div>
            <h3 className="font-semibold text-sm">Github</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}

export { GithubRepositoryLink };
