import Accordion from "./Accordion";

export function DocumentsSection() {
  return (
    <div>
      <div className="mx-1 px-3 mt-3 mb-1">
        <h3 className="text-xs font-bold text-zinc-600">Favorites</h3>
      </div>
      <Accordion />
    </div>
  );
}
