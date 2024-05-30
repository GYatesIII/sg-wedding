import { HTMLAttributes, PropsWithChildren } from "react";

export const Subsubheading = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) => {
  const classes = `text-xl lg:text-2xl font-headline mt-6 mb-2 ${className ?? ""}`;

  return (
    <h2 className={classes} {...props}>
      {children}
    </h2>
  );
};
