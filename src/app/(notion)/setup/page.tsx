import {
  Header,
  Banner,
  Content,
  DocumentTitle,
  DocumentTitleIcon,
} from "@/components/Document";

import { Paragraph } from "@components/Document/Content";

import { Topic, Title } from "@components/Document/Content/Topic";

export default function Page() {
  const document = { icon: "🖱️", label: "Setup" };

  return (
    <div className="w-full h-full">
      <Header document={document} />
      <Banner backgroundColor="bg-neutral-100" />
      <Content>
        <DocumentTitleIcon>{document.icon}</DocumentTitleIcon>
        <DocumentTitle>{document.label}</DocumentTitle>
        <Paragraph>
          <Title>Setup (Acer Nitro 5)</Title>
          <Topic>Monitor Full-HD 144Hz</Topic>
          <Topic>AMD Ryzen 7 4800H</Topic>
          <Topic>GeForce GTX 1650</Topic>
          <Topic>Memória RAM, 12GB 3200MHz DDR4</Topic>
          <Topic>2x 500 Gb SSD NVMe</Topic>
        </Paragraph>
        <Paragraph>
          <Title>Periféricos</Title>
          <Topic>Mouse Wireless Logitech G Pro</Topic>
          <Topic>Headseat Wireless Logitech G733</Topic>
        </Paragraph>
      </Content>
    </div>
  );
}
