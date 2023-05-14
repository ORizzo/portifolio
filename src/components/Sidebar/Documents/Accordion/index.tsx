"use client";

import { useRef, useState } from "react";

import * as Accordion from "@radix-ui/react-accordion";

import { usePathname } from "next/navigation";

import { Item } from "./Item";

import { SubItem } from "./SubItem";

function DocumentsAccordion() {
  const pathName = usePathname().replace("/", "");

  const TriggerRef = useRef(null);
  const [openedAccordion, setOpenedAccordion] = useState<string[]>([pathName]);

  return (
    <Accordion.Root
      type="multiple"
      defaultValue={[pathName]}
      ref={TriggerRef}
      onValueChange={(openedAccordionValue) => {
        setOpenedAccordion(openedAccordionValue);
      }}
      className={"mx-1"}
      id="radix-accordion"
    >
      <Item
        document={{ icon: "🧪", label: "Esse projeto" }}
        openedAccordion={openedAccordion}
      >
        <SubItem
          linkValue={"/introduction"}
          document={{ icon: "👀", label: "Introdução" }}
        />
        <SubItem
          linkValue={"/description"}
          document={{ icon: "📃", label: "Descrição" }}
        />
      </Item>
      <Item
        document={{ icon: "🖥️", label: "Carreira" }}
        openedAccordion={openedAccordion}
      >
        <SubItem
          linkValue="/presentation"
          document={{ icon: "📜", label: "Apresentação" }}
        />
        <SubItem linkValue="/setup" document={{ icon: "🖱️", label: "Setup" }} />
        <SubItem
          linkValue={"/portfolio"}
          document={{ icon: "📑", label: "Portifólio" }}
        />
      </Item>
    </Accordion.Root>
  );
}

export default DocumentsAccordion;
