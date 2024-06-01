import { Section, SectionAlignment } from "@/components/section";
import { Paragraph } from "@/components/typography/paragraph";
import { Subheading } from "@/components/typography/subheading";
import { PropsWithChildren } from "react";

export const ScheduleSection = () => {
  return (
    <Section
      id="schedule"
      className="bg-sg-blue"
      alignment={SectionAlignment.RIGHT}
      bgClass="bg-schedule-img"
    >
      <Subheading>Celebratory Schedule</Subheading>
      <Paragraph className="mb-8">
        We encourage everyone to arrive on <strong>December 12th</strong> and
        stay three nights leaving on <strong>the 15th</strong>. But we know an
        extended trip can be hard to fit into your schedule. If you need to keep
        it shorter, you should plan to arrive on Friday the 13th and depart on
        the 15th.
      </Paragraph>

      <div className="grid grid-cols-1 lg:grid-cols-[140px_1fr] lg:gap-y-8">
        <Day date={12}>Thursday</Day>
        <Paragraph className="italic">
          If you&rsquo;d like to join in the tours on Friday, you will need to
          travel to Merida on Thursday. Details about acommodations are
          forthcoming.
        </Paragraph>
        <Day date={13}>Friday</Day>
        <div>
          <Paragraph className="italic">
            We are going to plan some group tours to explore the city and the
            area around Merida on Friday during the day.
          </Paragraph>
          <Paragraph>
            The <strong>official celebration</strong> starts in the evening on
            the 13th with a welcome dinner at the hacienda.
          </Paragraph>
        </div>
        <Day date={14}>Saturday</Day>
        <Paragraph>
          There will be breakfast and some opportunities to explore the hacienda
          and property in the morning of the 14th with our ceremony and party
          starting in the afternoon and continuing late into the night.
        </Paragraph>
        <Day date={15}>Sunday</Day>
        <div>
          <Paragraph>
            There will be breakfast at the hacienda and we will help everyone
            get to the Merida airport for their journey home.
          </Paragraph>
          <Paragraph className="italic">
            We also encourage a longer trip to explore the Yucatan more broadly!
            More recommendations coming...
          </Paragraph>
        </div>
      </div>
    </Section>
  );
};

const Day = ({ date, children }: PropsWithChildren<{ date: number }>) => {
  return (
    <div className="mb-2 mx-auto">
      <div className="font-headline text-2xl lg:text-4xl border-2 border-t-8 w-[50px] h-[50px] lg:w-[75px] lg:h-[75px] flex items-center justify-center mx-auto">
        <span>{date}</span>
      </div>
      <div className="mt-2 font-headline text-lg lg:text-xl text-center">
        {children}
      </div>
    </div>
  );
};
