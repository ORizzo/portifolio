interface IContent {
  children: JSX.Element | JSX.Element[];
}

function Content({ children }: IContent) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 text-zinc-300">{children}</div>
    </div>
  );
}

export { Paragraph } from "./Paragraph";

export { Content };
