import { useState } from "react";

import * as Accordion from "@radix-ui/react-accordion";

import { usePathname } from "next/navigation";

import { ChevronRight } from "lucide-react";

import { IDocument } from "@/types/document";

import { motion } from "framer-motion";

export interface IGenericItem {
  document: IDocument;
  linkValue?: string;
}

export interface IAccordionItem extends IGenericItem {
  openedAccordion?: string[];
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

  const [iconAngle, updateIconAngle] = useState(0);

  return (
    <Accordion.Item value={name} className="my-0.5" id="accordion-item">
      <Accordion.AccordionHeader className="w-full">
        <Accordion.Trigger className="w-full">
          <motion.div
            onClick={() => {
              if (iconAngle === 90) {
                return updateIconAngle(0);
              }
              return updateIconAngle(90);
            }}
          >
            <div
              className={`flex w-full px-2 rounded-sm hover:cursor-pointer hover:bg-zinc-800  ${
                pathName === linkValue.replace("/", "") ? "bg-zinc-800" : ""
              }`}
            >
              <div className="flex w-full">
                <div className="flex">
                  <div className="p-0.5 hover:bg-neutral-700 rounded-sm mr-1 my-1">
                    <motion.div animate={{ rotate: iconAngle }}>
                      <ChevronRight color="gray" size={16} strokeWidth={2.5} />
                    </motion.div>
                  </div>
                </div>

                <div className="flex font-semibold text-gray-300 items-center w-full">
                  <span className="flex text-md">{icon}</span>
                  <h3 className="text-sm pl-0.5 pr-1 py-0.5 my-1 rounded w-full flex">
                    {label}
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        </Accordion.Trigger>
      </Accordion.AccordionHeader>

      <Accordion.Content>
        <div className="text-sm py-1 font-bold text-zinc-600">{children}</div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

export { Item };
