function TitleIcon({ children }: { children: string | JSX.Element }) {
  return (
    <div className="-mt-10 pb-2 flex items-center justify-right ">
      <div className="text-7xl w-[5rem] flex justify-center h-[5rem] pb-1 rounded hover:backdrop-sepia-0 hover:bg-white/10 hover:cursor-pointer">
        {children}
      </div>
    </div>
  );
}

export { TitleIcon };
