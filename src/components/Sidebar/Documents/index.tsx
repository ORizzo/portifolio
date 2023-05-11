"use client";

import Accordion from "./Accordion";

import { FavoritesSection } from "./FavoritesSection";

export function DocumentsSection() {
  return (
    <div>
      <FavoritesSection />
      <div className="mx-1 px-3 mt-3 mb-1">
        <h3 className="text-xs font-bold text-zinc-600">Documents</h3>
      </div>
      <Accordion />
    </div>
  );
}
