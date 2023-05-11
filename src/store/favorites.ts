import { create } from "zustand";

import { persist } from "zustand/middleware";

import type { IFavoriteDocument, IDocument } from "@/types/document";

export interface IFavoriteState {
  favoritedDocuments: Array<IFavoriteDocument>;
  favoriteADocument: (
    documentToFavorite: IDocument,
    documentURL: string
  ) => void;
  removeADocument: (label: string) => void;
}

const useFavoritesStore = create<IFavoriteState>()(
  persist<IFavoriteState>(
    (set, get) => ({
      favoritedDocuments: [],
      favoriteADocument: (documentToFavorite, documentURL) =>
        set(() => {
          const newFavoriteDocuments = get().favoritedDocuments;

          newFavoriteDocuments.push({ ...documentToFavorite, documentURL });

          return {
            favoritedDocuments: newFavoriteDocuments,
          };
        }),
      removeADocument: (label) =>
        set(() => {
          const filteredDocuments = get().favoritedDocuments.filter(
            (document) => document.label !== label
          );
          return {
            favoritedDocuments: filteredDocuments,
          };
        }),
    }),
    { name: "document-storage" }
  )
);

export { useFavoritesStore };
