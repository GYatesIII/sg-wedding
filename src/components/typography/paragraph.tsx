import { HTMLAttributes, PropsWithChildren } from "react";

export const Paragraph = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>) => {
  const classes = `mb-4 ${className ?? ""}`;

  return <p className={classes}>{children}</p>;
};
