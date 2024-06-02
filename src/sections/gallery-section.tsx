import { Section, SectionAlignment } from "@/components/section";
import { Paragraph } from "@/components/typography/paragraph";
import { Subheading } from "@/components/typography/subheading";

export const GallerySection = () => (
  <Section
    id="gallery"
    className="bg-sg-green"
    alignment={SectionAlignment.MIDDLE}
  >
    <Subheading>Gallery</Subheading>
    <Paragraph>Coming soon...</Paragraph>
  </Section>
);
