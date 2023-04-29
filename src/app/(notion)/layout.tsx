import { Sidebar } from "@components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-neutral-900 flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
      <footer>teste</footer>
    </div>
  );
}
