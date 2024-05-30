import { HTMLAttributes, PropsWithChildren } from "react";

export const Subheading = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) => {
  const classes = `text-2xl lg:text-4xl font-headline mb-3 ${className ?? ""}`;

  return (
    <h2 className={classes} {...props}>
      {children}
    </h2>
  );
};
