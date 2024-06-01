import { MapIcon } from "@heroicons/react/24/outline";
import { HTMLAttributes, PropsWithChildren } from "react";
import Image from "next/image";

export enum SectionAlignment {
  LEFT,
  MIDDLE,
  RIGHT,
}

export type SectionProps = PropsWithChildren<
  {
    alignment?: SectionAlignment;
    bgClass?: string;
  } & HTMLAttributes<HTMLDivElement>
>;

export const Section = ({
  alignment = SectionAlignment.MIDDLE,
  bgClass,
  children,
  className,
  ...props
}: SectionProps) => {
  const classes = `relative px-4 py-8 lg:py-16 ${className ?? ""}`;
  const bgClasses = `hidden lg:block absolute z-0 ${bgClass ?? ""} top-0 right-0 bottom-0 left-0 bg-no-repeat opacity-20 ${alignment === SectionAlignment.LEFT ? "bg-[right_50px]" : "bg-[left_50px]"}`;

  return (
    <section className={classes} {...props}>
      {bgClass && <div className={bgClasses}></div>}
      <div className="relative lg:max-w-[950px] lg:mx-auto">
        <div
          className={
            alignment === SectionAlignment.MIDDLE
              ? ""
              : alignment === SectionAlignment.LEFT
                ? "lg:pr-[150px]"
                : "lg:pl-[150px]"
          }
        >
          {children}
        </div>
      </div>
    </section>
  );
};
