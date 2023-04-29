import { BsDot } from "react-icons/bs";

function Topic({
  children,
}: {
  children: JSX.Element | JSX.Element[] | string | (string | JSX.Element)[];
}) {
  return (
    <div className="flex bg-zinc-700 rounded-sm my-1.5">
      <div className="mx-1.5 my-1.5">
        <BsDot size={28} />
      </div>
      <div className="text-md font-normal my-2 text-justify flex-1 mr-6">
        {children}
      </div>
    </div>
  );
}

export { Title } from "./Title";

export { Topic };
