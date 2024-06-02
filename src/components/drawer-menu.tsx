import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const DrawerMenu = ({
  isOpen,
  closeDrawer,
}: {
  isOpen: boolean;
  closeDrawer: () => void;
}) => {
  const classes = `fixed top-0 bottom-0 z-[1050] bg-sg-pink w-full lg:w-[450px] transition-all ${isOpen ? "right-0" : "right-[-100vw]"}`;
  const overlayClasses = `fixed top-0 bottom-0 right-0 left-0 z-[1049] bg-black transition-opacity ${isOpen ? "bg-opacity-70 block" : "bg-opacity-0 hidden"}`;
  return (
    <>
      <div className={overlayClasses} onClick={closeDrawer}></div>
      <div className={classes}>
        <XMarkIcon
          onClick={closeDrawer}
          className="absolute top-2 right-2 w-[30px] h-[30px] hover:cursor-pointer"
        />
        <nav className="py-[50px] px-[30px] flex flex-col gap-6">
          <Link
            href="#faq"
            onClick={closeDrawer}
            className="font-headline text-2xl hover:underline"
          >
            FAQ
          </Link>
          <Link
            href="#yucatan"
            onClick={closeDrawer}
            className="font-headline text-2xl hover:underline"
          >
            The Yucatan
          </Link>
          <Link
            href="#gallery"
            onClick={closeDrawer}
            className="font-headline text-2xl hover:underline"
          >
            Gallery
          </Link>
          <a
            href="https://go.skimresources.com/?id=98953X1671433&xs=1&url=https%3A%2F%2Fwww.honeyfund.com%2Fsite%2Fcoughlin-yates-09-07-2024&sref=https%3A%2F%2Fwww.paperlesspost.com%2Fgo%2F6BRpk42HK3djZdhKgkRp8"
            target="_blank"
            onClick={closeDrawer}
            className="font-headline text-2xl hover:underline"
          >
            &ldquo;Registry&rdquo;
          </a>
        </nav>
      </div>
    </>
  );
};
