import {
  Header,
  Banner,
  Content,
  DocumentTitle,
  DocumentTitleIcon,
} from "@/components/Document";

import { Paragraph } from "@components/Document/Content";

import { Title, Topic } from "@components/Document/Content/Topic";

export default function Page() {
  const document = { icon: "📜", label: "Apresentação" };

  return (
    <div className="w-full h-full">
      <Header document={document} />
      <Banner backgroundColor="bg-amber-500" />
      <Content>
        <DocumentTitleIcon>{document.icon}</DocumentTitleIcon>
        <DocumentTitle>{document.label}</DocumentTitle>
        <Paragraph>
          <Title>Detalhei</Title>
          <Topic>
            Participei do desenvolvimento da plataforma Detalhei, parte do blog
            da empresa Harpyja. O projeto era dividido em 3 partes principais:
            front-end, back-end e CMS.
          </Topic>
          <Topic>
            Atuei em todas as partes do projeto, ajudando no desenvolvimento do
            back-end em Nest, integrando tecnologias como Swagger, no front-end
            criei telas responsivas seguindo guias de estilo pré estabelecidos
            pela empresa, e no CMS criei algumas integrações com a API da
            empresa e algumas parte da interface que utilizada para a
            alimentação do blog.
          </Topic>
        </Paragraph>
        <Paragraph>
          <Title>IAP Cursos Online</Title>
          <Topic>
            Tive dois momentos dentro do projeto, trabalhando para uma
            tercerizada que prestava serviço para a IAP, e agora, fazendo parte
            da equipe.
          </Topic>
          <Topic>
            Durante a antiga, e negligente, gestão atuei liderando outros dois
            profissionais, cuidando de todo o front-end e suas integrações com a
            API da empresa.
          </Topic>
          <Topic>
            Ocorreram alguns problemas com a antiga gestão e faltando 10% para o
            projeto ser entregue a equipe ficou totalmente acomodada, em algumas
            sprints cheguei a fazer o trabalho pelos 3 devs.
          </Topic>
          <Topic>
            Após a entrega do projeto, fui contratado pela IAP para manter e
            fazer os devidos ajustes na plataforma, que, por mais que estivesse
            sido entregue, não estava preparada para ser apresentada para os
            usuários. Hoje trabalho mantendo todo o código fonte do frontend,
            trazendo atualizações e melhorias, bem como administrando a
            infraestrutura do site.
          </Topic>
        </Paragraph>
      </Content>
    </div>
  );
}
