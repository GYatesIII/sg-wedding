import { Section, SectionAlignment } from "@/components/section";
import { Subheading } from "@/components/typography/subheading";
import { Gallery } from "next-gallery";

function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const images: {
  src: string;
  aspect_ratio: number;
  alt?: string;
}[] = shuffle([
  { src: "/gallery/paris-1.jpg", aspect_ratio: 2 / 3 },
  { src: "/gallery/paris-2.jpg", aspect_ratio: 2 / 3 },
  { src: "/gallery/paris-3.jpg", aspect_ratio: 2 / 3 },
  { src: "/gallery/paris-4.jpg", aspect_ratio: 2 / 3 },
  { src: "/gallery/paris-5.jpg", aspect_ratio: 3 / 2 },
  { src: "/gallery/paris-6.jpg", aspect_ratio: 2 / 3 },
  { src: "/gallery/paris-7.jpg", aspect_ratio: 2 / 3 },
  { src: "/gallery/paris-8.jpg", aspect_ratio: 2 / 3 },
  { src: "/gallery/paris-9.jpg", aspect_ratio: 2 / 3 },
  { src: "/gallery/paris-10.jpg", aspect_ratio: 2 / 3 },
  { src: "/gallery/paris-11.jpg", aspect_ratio: 2 / 3 },
  { src: "/gallery/paris-12.jpg", aspect_ratio: 2 / 3 },
  { src: "/gallery/paris-13.jpg", aspect_ratio: 3 / 2 },
]);

const ratios: number[] = [4 / 3, 10 / 3];
const widths: number[] = [1024];

export const GallerySection = () => (
  <>
    <Section
      id="gallery"
      className="bg-sg-green"
      alignment={SectionAlignment.MIDDLE}
    >
      <Subheading>Gallery</Subheading>
    </Section>
    <Gallery
      images={images}
      ratios={ratios}
      widths={widths}
      lastRowBehavior="fill"
      gap="0px"
    />
  </>
);
