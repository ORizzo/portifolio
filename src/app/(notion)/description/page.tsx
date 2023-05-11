"use client";

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

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiFoodpanda,
} from "react-icons/si";

import { TbBrandRadixUi } from "react-icons/tb";

export default function Page() {
  const document = { icon: "📃", label: "Descrição" };

  return (
    <div className="w-full h-full">
      <Header document={document} />
      <Banner backgroundColor="bg-zinc-700" />
      <Content>
        <DocumentTitleIcon>{document.icon}</DocumentTitleIcon>
        <DocumentTitle>{document.label}</DocumentTitle>
        <Paragraph>
          <Topic>
            Construi esse projeto utilizando o framework, de React, Next.Js, em
            sua nova versão 13, explorando o que essa nova atualização pode
            oferecer.
          </Topic>
          <Topic>
            Para estilizar utilizei a biblioteca Tailwind, por sua flexibilidade
            e eficiência. Para os ícones usei 2 bibliotecas, react-icons e
            lucide-react, pois em alguns casos os ícones de uma biblioteca se
            encaixam melhor do que a da outra.
          </Topic>
          <Topic>
            Para facilitar o desenvolvimento de alguns componenents fiz o uso do
            Radix, uma biblioteca de componenents acessíveis e sem estilização.
          </Topic>
          <Topic>
            Como linguagem utilizei o Typescript, para poder contar com tipagem
            e dar mais segurança e confiabilidade ao código.
          </Topic>
          <Topic>
            Para fazer a globalização de alguns estados da aplicação, utilizei o
            Zustand, uma alternativa ao Redux, devido a sua facilidade de
            utilizar, pois se baseia em hooks, e não há necessidade de utilizar
            providers, e a configuração necessária para iniciar a utilizar é
            zero, é só importar o zustand, criar os stores e exportar o hook.
          </Topic>
          <Topic>
            <div className="flex items-center">
              Stack utilizada no projeto:
              <div className="flex text-xl text-center mx-2">
                <Link href="https://nextjs.org/" target="_blank">
                  <SiNextdotjs className="text-white mx-1" />
                </Link>
                <Link href="https://react.dev/" target="_blank">
                  <SiReact className="text-cyan-500 mx-1" />
                </Link>
                <Link href="https://tailwindcss.com/" target="_blank">
                  <SiTailwindcss className="text-cyan-400 mx-1" />
                </Link>
                <Link href="https://www.radix-ui.com/" target="_blank">
                  <TbBrandRadixUi className="text-white mx-1" />
                </Link>
                <Link href="https://www.typescriptlang.org/" target="_blank">
                  <SiTypescript className="text-blue-400 mx-1" />
                </Link>
                <Link
                  href="https://docs.pmnd.rs/zustand/getting-started/introduction"
                  target="_blank"
                >
                  <SiFoodpanda className="text-zinc-950 mx-1" />
                </Link>
              </div>
            </div>
          </Topic>
        </Paragraph>
      </Content>
    </div>
  );
}
