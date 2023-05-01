import { UserSection } from "./User";

import { FunctionalSection } from "./Functional";

import { DocumentsSection } from "./Documents";

import { GithubSection } from "./Github/index";

export function Sidebar() {
  return (
    <aside className="w-60 bg-zinc-900 border-r border-r-zinc-800 flex flex-col">
      <div className="flex-1">
        <UserSection />
        <FunctionalSection />
        <DocumentsSection />
      </div>
      <GithubSection />
    </aside>
  );
}
