import * as Accordion from "@radix-ui/react-accordion";

import { usePathname } from "next/navigation";

import { ChevronDown, ChevronRight } from "lucide-react";

import Link from "next/link";

import { IDocument } from "@/types/document";

export interface IGenericItem {
  document: IDocument;
  linkValue?: string;
}

export interface IAccordionItem extends IGenericItem {
  openedAccordion: string;
  children: JSX.Element | JSX.Element[];
}

function Item({
  document,
  openedAccordion,
  linkValue = document.label.toLowerCase(),
  children,
}: IAccordionItem) {
  const { icon, label } = document;

  const name = label.toLowerCase();

  const pathName = usePathname().replace("/", "");

  return (
    <Accordion.Item value={name} className="my-0.5">
      <div
        className={`flex w-full px-2 rounded-sm hover:cursor-pointer hover:bg-zinc-800  ${
          pathName === linkValue.replace("/", "") ? "bg-zinc-800" : ""
        }`}
      >
        <Accordion.Trigger>
          <div className="flex w-full">
            <div className="p-0.5 hover:bg-neutral-700 rounded-sm mr-1 my-1">
              {openedAccordion === name ? (
                <ChevronDown color="gray" size={16} strokeWidth={2.5} />
              ) : (
                <ChevronRight color="gray" size={16} strokeWidth={2.5} />
              )}
            </div>
          </div>
        </Accordion.Trigger>
        <Link href={linkValue}>
          <Accordion.AccordionHeader>
            <div className="flex font-semibold text-gray-300 items-center">
              <div className="flex text-md">{icon}</div>
              <div className="text-sm hover:bg-zinc-700 pl-0.5 pr-1 py-0.5 my-1 rounded">
                {label}
              </div>
            </div>
          </Accordion.AccordionHeader>
        </Link>
      </div>
      <Accordion.Content>
        <div className="text-sm py-1 font-bold text-zinc-600">{children}</div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

export { Item };
