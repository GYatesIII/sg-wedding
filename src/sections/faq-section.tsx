import { Accordion } from "@/components/accordion";
import { Section, SectionAlignment } from "@/components/section";
import { Paragraph } from "@/components/typography/paragraph";
import { Subheading } from "@/components/typography/subheading";
import { PopupButton } from "@typeform/embed-react";

export const FaqSection = () => (
  <Section
    id="faq"
    className="bg-sg-pink"
    bgClass="bg-faq-img"
    alignment={SectionAlignment.LEFT}
  >
    <Subheading className="mb-6">FAQ</Subheading>
    <Accordion question="What&rsquo;s my first step?">
      <Paragraph>
        <PopupButton id="uktewJq6" className="underline hover:no-underline">
          RSVP by July 15!
        </PopupButton>
      </Paragraph>
      <Paragraph>
        We also recommend buying your flights soon, the sooner we know when
        people are arriving the better we can plan to make your trip as easy as
        possible.
      </Paragraph>
      <Paragraph>
        In July, we&rsquo;ll be collecting this info and sending an email with
        more information about accomodations and plans when you land.
      </Paragraph>
    </Accordion>
    <Accordion question="What is the dress code?">
      <Paragraph>
        Sarah&rsquo;s the only one wearing all white. Otherwise, wear what makes
        you feel confident and sexy. Bright colors are encouraged.
      </Paragraph>
    </Accordion>
    <Accordion question="What is the weather like?">
      <Paragraph>
        Mérida is hot and humid in December. The average high is 87°F and the
        average low is 64°F. It is the beginning of the dry season, but it is a
        jungle so there is a chance for rain.
      </Paragraph>
    </Accordion>
    <Accordion question="Who is coming?">
      <Paragraph>
        We are inviting close family and friends. We are keeping the guest list
        small &mdash; about 50 people &mdash; so we can spend quality time with
        everyone.
      </Paragraph>
    </Accordion>
    <Accordion question="Should I arrive with pesos in cash?">
      <Paragraph>
        You probably won&rsquo;t pay for anything at the hacienda, but if you
        plan on spending any time elsewhere in Mexico, we recommend getting some
        pesos ahead of time. $500-1000 MX should be plenty. Dollar cash spends
        well in Mexico, but in most places you&rsquo;ll be paying a premium
        exchange rate for the convenience.
      </Paragraph>
      <Paragraph>
        Most restaurants and stores accept credit cards, just check that your
        card does not have any foreign transaction fees. Small stores and
        notably taxis generally do not accept credit cards.
      </Paragraph>
    </Accordion>
    <Accordion question="How much Spanish should I learn?">
      <Paragraph>
        You must be fluent to enter the country, there&rsquo;s a test you when
        you land. Children under the age of 8 are exempt from the language
        requirements.
      </Paragraph>
      <Paragraph>
        Just kidding! You don&rsquo;t <em>need</em> to know any Spanish. Most
        people in the Yucatan speak some English. Although it&rsquo;s curteous
        to have at least <strong>hola</strong>, <strong>por favor</strong>, and{" "}
        <strong>gracias</strong> ready to go. When greeting someone you can
        probably set a watch by when people transition from{" "}
        <strong>buenos dias</strong> to <strong>buenas tardes</strong> to{" "}
        <strong>buenas noches</strong>.
      </Paragraph>
    </Accordion>
    <Accordion question="Do I need a passport?">
      <Paragraph>
        Yes! You need a passport that is valid for at least 6 months AFTER your
        arrival date in Mexico. There is no visa or other documentation
        necessary ahead of time if you&rsquo;re coming from the US. Although we
        recommend{" "}
        <a
          href="https://www.cbp.gov/travel/trusted-traveler-programs/global-entry"
          target="_blank"
        >
          Global Entry
        </a>{" "}
        if you plan on traveling internationally at least once more in the next
        5 years.
      </Paragraph>
    </Accordion>
  </Section>
);
