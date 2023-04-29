import { Avatar } from "./Avatar";

import { ChevronsUpDown } from "lucide-react";

export function UserSection() {
  return (
    <div className="px-3 py-1 hover:bg-zinc-800 hover:cursor-pointer">
      <div className="h-10 flex items-center">
        <Avatar imageSrc={"/dunk.jpg"} />
        <h2 className="text-sm font-semibold text-neutral-300">
          Henrique&apos;s Notion
        </h2>
        <div className="px-1 mt-1">
          <ChevronsUpDown className="text-gray-600" size={16} />
        </div>
      </div>
    </div>
  );
}
