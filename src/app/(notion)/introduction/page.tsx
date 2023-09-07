import {
  Header,
  Banner,
  Content,
  DocumentTitle,
  DocumentTitleIcon,
} from "@/components/Document";

import { Paragraph } from "@components/Document/Content";

import { Topic } from "@components/Document/Content/Topic";

import Link from "next/link";

import { RxNotionLogo } from "react-icons/rx";

export default function Page() {
  const document = { icon: "👀", label: "Introdução" };

  return (
    <div className="w-full h-full">
      <Header document={document} />
      <Banner backgroundColor="bg-zinc-700" />
      <Content>
        <DocumentTitleIcon>{document.icon}</DocumentTitleIcon>
        <DocumentTitle>{document.label}</DocumentTitle>
        <Paragraph>
          <Topic>
            Esse site é um projeto pessoal, tendo como foco exercitar minhas
            habilidades no desenvolvimento frontend. O projeto ficará disponível
            no Github sob licença MIT, permitindo que pessoas interessadas
            utilizem esse site como material de estudo.
          </Topic>
          <Topic>
            <div className="flex">
              O projeto é simples, e tem a interface inspirada no software de
              organização:
              <Link href="https://www.notion.so/product" target="_blank">
                <div className="flex items-center hover:underline hover:cursor-pointer">
                  <RxNotionLogo className="mx-1" />
                  Notion.
                </div>
              </Link>
            </div>
          </Topic>
          <Topic>
            O site ainda está em desenvolvimento. Sugestões serão aceitas caso
            sejam pertinentes, e expressadas com educação.
          </Topic>
        </Paragraph>
      </Content>
    </div>
  );
}
