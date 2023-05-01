import { Github } from "lucide-react";

import Link from "next/link";

import Tooltip from "@/components/Tooltip";

function GithubRepositoryLink() {
  return (
    <Tooltip label="Go to Github repository">
      <div className="mx-1">
        <Link href="https://github.com/ORizzo/portifolio" target="_blank">
          <div className="hover:bg-zinc-800 hover:cursor-pointer rounded-sm flex items-center text-zinc-500 hover:text-zinc-400">
            <div className="flex items-center">
              <div className="px-2 py-2">
                <Github size={16} strokeWidth={2} />
              </div>
              <h3 className="font-semibold text-sm">Github</h3>
            </div>
          </div>
        </Link>
      </div>
    </Tooltip>
  );
}

export { GithubRepositoryLink };
