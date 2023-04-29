"use client";

import { useRef, useState } from "react";

import * as Accordion from "@radix-ui/react-accordion";

import { usePathname } from "next/navigation";

import { Item } from "./Item";

import { SubItem } from "./SubItem";

function DocumentsAccordion() {
  const pathName = usePathname().replace("/", "");

  const TriggerRef = useRef(null);
  const [openedAccordion, setOpenedAccordion] = useState(pathName);

  return (
    <Accordion.Root
      type="single"
      defaultValue={pathName}
      collapsible
      ref={TriggerRef}
      onValueChange={(openedAccordionValue) => {
        setOpenedAccordion(openedAccordionValue);
      }}
      className={"mx-1"}
    >
      <Item
        document={{ icon: "🧪", label: "Esse projeto" }}
        openedAccordion={openedAccordion}
        linkValue="/"
      >
        <SubItem
          linkValue={"/introduction"}
          document={{ icon: "👀", label: "Introdução" }}
        />
      </Item>
      <Item
        document={{ icon: "🖥️", label: "Carreira" }}
        openedAccordion={openedAccordion}
        linkValue="portfolio"
      >
        <SubItem
          linkValue={"/teste"}
          document={{ icon: "📜", label: "Apresentação" }}
        />
        <SubItem
          linkValue={"/teste"}
          document={{ icon: "🖱️", label: "Setup" }}
        />
        <SubItem
          linkValue={"/teste"}
          document={{ icon: "💡", label: "Outros projetos" }}
        />
      </Item>
    </Accordion.Root>
  );
}

export default DocumentsAccordion;
