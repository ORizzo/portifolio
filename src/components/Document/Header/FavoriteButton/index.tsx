"use client";

import { usePathname } from "next/navigation";

import { useFavoritesStore } from "@/store/favorites";
import { Star } from "lucide-react";

import type { IDocument } from "@/types/document";

interface FavoriteButtonProps {
  document: IDocument;
}

export function FavoriteButton({ document }: FavoriteButtonProps) {
  const { label } = document;

  const pathname = usePathname();

  const favoriteState = useFavoritesStore((state) => state);

  const thatDocument = favoriteState.favoritedDocuments.filter(
    (document) => document.label === label
  );

  const isThatDocumentFavorited = thatDocument.length > 0;

  return (
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
  );
}
