import { Section, SectionAlignment } from "@/components/section";
import { Paragraph } from "@/components/typography/paragraph";
import { Subheading } from "@/components/typography/subheading";

export const FaqSection = () => (
  <Section
    id="faq"
    className="bg-sg-pink"
    bgClass="bg-faq-img"
    alignment={SectionAlignment.LEFT}
  >
    <Subheading>FAQ</Subheading>
    <Paragraph>Coming soon...</Paragraph>
  </Section>
);
