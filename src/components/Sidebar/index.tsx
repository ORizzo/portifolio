import { UserSection } from "./User";

import { FunctionalSection } from "./Functional";

import { DocumentsSection } from "./Documents";

export function Sidebar() {
  return (
    <aside className="w-60 bg-zinc-900 border-r border-r-zinc-800">
      <UserSection />
      <FunctionalSection />
      <DocumentsSection />
    </aside>
  );
}
