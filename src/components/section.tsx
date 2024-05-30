import { HTMLAttributes, PropsWithChildren } from "react";

export const Section = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  const classes = `px-4 py-8 lg:py-16 ${className ?? ""}`;

  return (
    <section className={classes} {...props}>
      <div className="lg:max-w-[800px] lg:mx-auto">{children}</div>
    </section>
  );
};
