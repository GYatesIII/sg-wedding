import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { PropsWithChildren, ReactNode, useCallback, useState } from "react";

export type AccordionProps = PropsWithChildren<{
  question: string;
}>;

export const Accordion = ({ question, children: answer }: AccordionProps) => {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = useCallback(() => setOpen(!isOpen), [isOpen]);

  const answerClasses = `pl-6 transition-opacity ${isOpen ? "block opacity-100" : "hidden opacity-0"}`;

  return (
    <div className="mb-6">
      <div
        className="flex items-center hover:cursor-pointer hover:underline font-headline text-md lg:text-xl mb-2"
        onClick={toggleOpen}
      >
        {isOpen ? (
          <ChevronDownIcon className="w-4 mr-2" />
        ) : (
          <ChevronRightIcon className="w-4 mr-2" />
        )}
        <h3>{question}</h3>
      </div>
      <div className={answerClasses}>{answer}</div>
    </div>
  );
};
