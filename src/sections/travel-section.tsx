import { Section } from "@/components/section";
import { Paragraph } from "@/components/typography/paragraph";
import { Subheading } from "@/components/typography/subheading";
import { Subsubheading } from "@/components/typography/subsubheading";

export const TravelSection = () => {
  return (
    <Section className="bg-sg-orange" id="travel">
      <Subheading className="lg:mb-6">Travel</Subheading>
      <Paragraph>
        We are excited to celebrate our wedding at Hacienda Sotuta de Peón, a
        beautiful and historic hacienda located near Mérida, México.
      </Paragraph>

      <Subsubheading className="mt-6">Getting there</Subsubheading>
      <Paragraph>
        The hacienda is located about 30 minutes from the Mérida airpot (MID).
        We recommend flying into MID and taking a taxi to the Hacienda.
      </Paragraph>

      <Paragraph>
        You also can fly into Cancun (CUN) which has more flights and is
        typically cheaper. However, there is about a 4 hour drive from Cancun to
        Mérida. It can be a lovely drive and you can rent a car and make a day
        of it stopping at Villadolid, Chichen Itza and many cenotes along the
        way.
      </Paragraph>

      <Subsubheading className="mt-6">Accommodations</Subsubheading>
      <Paragraph>
        We will all stay onsite at the Hacienda. Please check back soon for more
        information on how to reserve your room.
      </Paragraph>

      <Subsubheading className="mt-6">The hacienda</Subsubheading>
      <div className="block lg:grid lg:grid-cols-[450px_1fr] lg:gap-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7462.427703041095!2d-89.58024600966478!3d20.742124623345454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f567699671a7427%3A0x31c91acb45e67bf0!2sHacienda%20Sotuta%20de%20Pe%C3%B3n!5e0!3m2!1sen!2sus!4v1717086757988!5m2!1sen!2sus"
          width="450"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="lg:block hidden"
        ></iframe>
        <Paragraph>
          Built in the mid-19th century, it began operating in 1858 and after
          100 years of prosperity it was abandoned for three long decades, to
          later be rescued from the ravages of time. We gave life to the current
          Sotuta de Peón Hacienda Viva, completely restored, functioning as it
          did in its time of splendor and rescuing the traditions of the boom
          times.
        </Paragraph>
      </div>
    </Section>
  );
};
