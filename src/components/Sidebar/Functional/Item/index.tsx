import type { Icon } from "lucide-react";

import Link from "next/link";

interface IItemProps {
  label: string;
  icon: Icon;
  strokeWidth?: number;
  size?: number;
  path?: string;
}

export function Item({
  label,
  icon,
  strokeWidth = 3,
  size = 13,
  path = "/",
}: IItemProps) {
  const Icon = icon;

  return (
    <Link href={path}>
      <div className="hover:bg-zinc-800 hover:cursor-pointer rounded-sm flex items-center">
        <div className="flex items-center mx-1">
          <div className="px-3 py-2 w-9">
            <Icon
              className="text-zinc-500"
              size={size}
              strokeWidth={strokeWidth}
            />
          </div>
          <h3 className="text-zinc-500 font-semibold text-sm">{label}</h3>
        </div>
      </div>
    </Link>
  );
}
