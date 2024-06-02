import { Section, SectionAlignment } from "@/components/section";
import { Paragraph } from "@/components/typography/paragraph";
import { Subheading } from "@/components/typography/subheading";
import { Subsubheading } from "@/components/typography/subsubheading";
import Image from "next/image";
export const TravelSection = () => {
  return (
    <Section
      className="bg-sg-orange"
      id="travel"
      alignment={SectionAlignment.LEFT}
      bgClass="bg-travel-img"
    >
      <Subheading className="lg:mb-6">Travel</Subheading>
      <Paragraph>
        We are excited to celebrate our wedding at Hacienda Sotuta de Peón, a
        beautiful and historic hacienda located near Mérida, México.
      </Paragraph>

      <Subsubheading className="mt-6">Getting to Mexico</Subsubheading>
      <Paragraph>
        We recommend flying into the Mérida (MID) airport which is about 40
        minutes from the hacienda. You can also fly into Cancun (CUN) which has
        more frequent and cheaper flights, but there&rsquo;s a four to five hour
        drive to Mérida.
      </Paragraph>

      <Paragraph>
        If you fly into Cancun we recommend renting a car for the weekend and
        driving yourself to and from Cancun. Driving on the Yucatan is fairly
        easy, and there are many great stops along the way such as Valladolid
        and Chichen Itza. If you don&rsquo;t want to drive, there are nice
        busses that make the trip. We recommend{" "}
        <a href="https://www.ado.com.mx/" target="_blank">
          ADO
        </a>{" "}
        which runs a bus every hour for ~$55 US that leave from the Cancun
        airport and go directly to Mérida.
      </Paragraph>

      <Subsubheading className="mt-6">Getting to the Hacienda</Subsubheading>
      <Paragraph>
        If you&rsquo;re coming from the Mérida airport or the city, you can take
        a taxi which will take 30-40 minutes. Once we have everyone&rsquo;s
        flight info, we will try to arrange a bigger group transport from the
        airport for those coming in around the same time.
      </Paragraph>

      <Subsubheading className="mt-6">Accommodations</Subsubheading>
      <Paragraph>
        We will all stay onsite at the Hacienda. We are still working on a block
        rate, but expect to pay about $200 US per night per room. Please check
        back soon for more information on how to reserve your room.
      </Paragraph>

      <Subsubheading className="mt-6">About the Hacienda</Subsubheading>
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
