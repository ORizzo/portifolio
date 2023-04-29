import { Item } from "./Item";

import { SearchIcon, Clock9, Cog } from "lucide-react";

export function FunctionalSection() {
  return (
    <div className="flex flex-col my-1 mx-1">
      <Item label="Search" icon={SearchIcon} />
      <Item label="Updates" icon={Clock9} strokeWidth={3} />
      <Item label="Settings & members" icon={Cog} strokeWidth={2} size={15} />
    </div>
  );
}
