function Title({ children }: { children: string | JSX.Element }) {
  return <div className="text-4xl font-bold my-4 mb-8">{children}</div>;
}

export { Title };

export { TitleIcon } from "./Icon";
