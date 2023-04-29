import { Header, Banner, Content } from "@/components/Document";

import { Paragraph } from "@components/Document/Content";

import { Title, Topic } from "@components/Document/Content/Topic";

export default function Page() {
  return (
    <div className="w-full h-full">
      <Header document={{ icon: "👀", label: "Introdução" }} />
      <Banner backgroundColor="zinc-700" />
      <Content>
        <div className="-mt-10 pb-2 flex items-center justify-right ">
          <div className="text-7xl w-[5rem] flex justify-center h-[5rem] pb-1 rounded hover:backdrop-sepia-0 hover:bg-white/10 hover:cursor-pointer">
            📝
          </div>
        </div>
        <div className="text-4xl font-bold my-4 mb-8">Portfolio</div>
        <Paragraph>
          <Title>Quem somos?</Title>
          <Topic>
            Somos uma empresa que tem como objetivo principal elevar o nível de
            visibilidade do seu evento/estabelecimento, levando o mesmo a mais
            pessoas causando uma grande difusão em midias digitais.
          </Topic>
        </Paragraph>
        <Paragraph>
          <Title>Teste</Title>
          <Topic>asdasda</Topic>
        </Paragraph>
      </Content>
    </div>
  );
}
