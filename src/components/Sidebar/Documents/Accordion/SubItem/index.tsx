import Link from "next/link";

import { BsDot } from "react-icons/bs";

import { IGenericItem } from "../Item";

import { usePathname } from "next/navigation";

interface ISubItemInterface extends IGenericItem {
  linkValue: string;
}

function SubItem({ linkValue, document }: ISubItemInterface) {
  const pathName = usePathname();

  const { icon, label } = document;

  return (
    <div
      className={`flex w-full rounded-sm hover:cursor-pointer hover:bg-zinc-800 ${
        pathName === linkValue ? "bg-zinc-800" : ""
      }`}
    >
      <div className="ml-6 flex">
        <div className="flex items-center">
          <div className="rounded-sm mr-1 flex h-full items-center">
            <BsDot />
          </div>
        </div>
        <Link href={linkValue}>
          <div className="flex font-semibold text-gray-300 items-center flex-1">
            <div className="flex text-[15px]">{icon}</div>
            <div className="text-[13px] pl-0.5 pr-1 py-0.5 my-1 rounded">
              {label}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export { SubItem };
