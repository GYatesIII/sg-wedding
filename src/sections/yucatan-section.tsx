import { Section, SectionAlignment } from "@/components/section";
import { Paragraph } from "@/components/typography/paragraph";
import { Subheading } from "@/components/typography/subheading";

export const YucatanSection = () => (
  <Section
    id="yucatan"
    className="bg-sg-orange"
    // bgClass="bg-faq-img"
    alignment={SectionAlignment.MIDDLE}
  >
    <Subheading>The Yucatan</Subheading>
    <Paragraph>Coming soon...</Paragraph>
  </Section>
);
