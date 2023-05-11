"use client";

import { MessageSquare, Clock9, Star, MoreHorizontal } from "lucide-react";

import { IDocument } from "@/types/document";

import { useGithubStore } from "@/store/github";

import { useFavoritesStore } from "@/store/favorites";

import { usePathname } from "next/navigation";

interface IHeader {
  document: IDocument;
}

function Header({ document }: IHeader) {
  const { icon, label } = document;

  const pathname = usePathname();

  console.log(pathname);

  const lastEditAt = useGithubStore((state) => state.editedAt);

  const favoriteState = useFavoritesStore((state) => state);

  const thatDocument = favoriteState.favoritedDocuments.filter(
    (document) => document.label === label
  );

  const isThatDocumentFavorited = thatDocument.length > 0;

  return (
    <div className="w-full h-11">
      <div className="w-full h-full flex justify-between px-4 items-center">
        <div className="pl-1 pr-2 py-1 hover:bg-zinc-800 rounded hover:cursor-pointer">
          <h2 className="text-sm">
            {icon} {label}
          </h2>
        </div>
        <div className="flex h-full items-center">
          <span className="text-sm text-zinc-600 mx-1 hover:cursor-default">
            Edited {lastEditAt}
          </span>
          <span className="text-sm text-zinc-300 mx-[2px] px-2 py-1 hover:bg-zinc-800 rounded hover:cursor-pointer">
            Share
          </span>
          <span className="text-sm text-zinc-300 mx-[2px] px-2 py-1.5 hover:bg-zinc-800 rounded hover:cursor-pointer">
            <MessageSquare size={18} />
          </span>
          <span className="text-sm text-zinc-300 mx-[2px] px-2 py-1.5 hover:bg-zinc-800 rounded hover:cursor-pointer">
            <Clock9 size={18} />
          </span>
          <span
            className="text-sm mx-[2px] px-2 py-1.5 hover:bg-zinc-800 rounded hover:cursor-pointer"
            onClick={() => {
              if (isThatDocumentFavorited) {
                return favoriteState.removeADocument(label);
              }

              return favoriteState.favoriteADocument(document, pathname);
            }}
          >
            <Star
              size={18}
              color={isThatDocumentFavorited ? "rgb(246, 192, 80)" : "#fff"}
              fill={isThatDocumentFavorited ? "rgb(246, 192, 80)" : "#27272a"}
            />
          </span>
          <span className="text-sm mx-[2px] px-1 py-0.5 hover:bg-zinc-800 rounded hover:cursor-pointer">
            <MoreHorizontal size={26} strokeWidth={2} />
          </span>
        </div>
      </div>
    </div>
  );
}
export { Header };
