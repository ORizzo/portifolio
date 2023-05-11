"use client";

import { SubItem } from "../Accordion/SubItem";

import { useFavoritesStore } from "@store/favorites";

function FavoritesSection() {
  const state = useFavoritesStore((state) => state);

  return (
    <div className="mx-1 px-3 mt-3 mb-1">
      <h3 className="text-xs font-bold text-zinc-600 hover:cursor-pointer">
        Favorites
      </h3>
      <div className="my-1">
        {state.favoritedDocuments &&
          state.favoritedDocuments.map((document, index) => {
            return (
              <SubItem
                document={document}
                linkValue="/"
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