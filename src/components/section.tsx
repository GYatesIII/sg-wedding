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
  const contentWrapperClasses = `relative lg:mx-auto ${alignment === SectionAlignment.LEFT ? "lg:max-w-[950px] lg:pr-[150px]" : alignment === SectionAlignment.RIGHT ? "lg:max-w-[950px] lg:pl-[150px]" : "lg:max-w-[800px]"}`;
  const bgClasses = `hidden lg:block absolute z-0 ${bgClass ?? ""} top-0 right-0 bottom-0 left-0 bg-no-repeat opacity-20 ${alignment === SectionAlignment.LEFT ? "bg-[right_50px]" : "bg-[left_50px]"}`;

  return (
    <section className={classes} {...props}>
      {bgClass && <div className={bgClasses}></div>}
      <div className={contentWrapperClasses}>{children}</div>
    </section>
  );
};
