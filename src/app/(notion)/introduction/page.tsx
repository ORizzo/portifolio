import { Header, Banner, Content } from "@/components/Document";

import { Paragraph } from "@components/Document/Content";

import { Topic } from "@components/Document/Content/Topic";

import Link from "next/link";

import { RxNotionLogo } from "react-icons/rx";

export default function Page() {
  const document = { icon: "👀", label: "Introdução" };

  return (
    <div className="w-full h-full">
      <Header document={document} />
      <Banner backgroundColor="zinc-700" />
      <Content>
        <div className="-mt-10 pb-2 flex items-center justify-right ">
          <div className="text-7xl w-[5rem] flex justify-center h-[5rem] pb-1 rounded hover:backdrop-sepia-0 hover:bg-white/10 hover:cursor-pointer">
            {document.icon}
          </div>
        </div>
        <div className="text-4xl font-bold my-4 mb-8">{document.label}</div>
        <Paragraph>
          <Topic>
            Esse site é um projeto pessoal feito por mim, Henrique Rizzo, tendo
            como foco exercitar habilidades de frontend. O projeto ficará
            disponível no Github sob licença MIT, permitindo que pessoas
            interessadas utilizem esse site como material de estudo.
          </Topic>
          <Topic>
            <div className="flex">
              O projeto é bem simples, e tem a interface inspirada no software
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
            O site ainda está em desenvolvimento. Sujestões serão aceitas caso
            sejam pertinentes, e expressadas com educação.
          </Topic>
        </Paragraph>
      </Content>
    </div>
  );
}
