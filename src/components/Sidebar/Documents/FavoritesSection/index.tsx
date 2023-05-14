"use client";

import { useEffect, useState } from "react";
import { SubItem } from "../Accordion/SubItem";

import { useFavoritesStore } from "@store/favorites";
import { IFavoriteDocument } from "@/types/document";

function FavoritesSection() {
  const [favoritedDocuments, setFavoritedDocuments] = useState<
    IFavoriteDocument[] | never[]
  >([]);

  const favoriteState = useFavoritesStore((state) => state);

  useEffect(() => {
    setFavoritedDocuments(favoriteState.favoritedDocuments);
  }, [favoriteState]);

  return (
    <div
      className={`mx-1 px-3 mt-3 mb-1 ${
        favoritedDocuments.length == 0 ? "hidden" : ""
      }`}
    >
      <h3 className="text-xs font-bold text-zinc-600 hover:cursor-pointer">
        Favorites
      </h3>
      <div className="my-1">
        {favoritedDocuments &&
          favoritedDocuments.map((document, index) => {
            return (
              <SubItem
                document={document}
                linkValue={document.documentURL}
                key={index}
                ml={"ml-1"}
              />
            );
          })}
      </div>
    </div>
  );
}
export { FavoritesSection };
