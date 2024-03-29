import { Suspense } from "react";

import { MessageSquare, Clock9, MoreHorizontal, Star } from "lucide-react";

import { IDocument } from "@/types/document";

import { EditedAt } from "./EditedAt";
import { FavoriteButton } from "./FavoriteButton";

interface IHeader {
  document: IDocument;
}

function Header({ document }: IHeader) {
  const { icon, label } = document;

  return (
    <div className="w-full h-11">
      <div className="w-full h-full flex justify-between px-4 items-center">
        <div className="pl-1 pr-2 py-1 hover:bg-zinc-800 rounded hover:cursor-pointer">
          <h2 className="text-sm">
            {icon} {label}
          </h2>
        </div>
        <div className="flex h-full items-center">
          <Suspense>
            <EditedAt />
          </Suspense>
          <span className="text-sm text-zinc-300 mx-[2px] px-2 py-1 hover:bg-zinc-800 rounded hover:cursor-pointer">
            Share
          </span>
          <span className="text-sm text-zinc-300 mx-[2px] px-2 py-1.5 hover:bg-zinc-800 rounded hover:cursor-pointer">
            <MessageSquare size={18} />
          </span>
          <span className="text-sm text-zinc-300 mx-[2px] px-2 py-1.5 hover:bg-zinc-800 rounded hover:cursor-pointer">
            <Clock9 size={18} />
          </span>
          <Suspense fallback={<Star size={18} />}>
            <FavoriteButton document={document} />
          </Suspense>
          <span className="text-sm mx-[2px] px-1 py-0.5 hover:bg-zinc-800 rounded hover:cursor-pointer">
            <MoreHorizontal size={26} strokeWidth={2} />
          </span>
        </div>
      </div>
    </div>
  );
}
export { Header };
