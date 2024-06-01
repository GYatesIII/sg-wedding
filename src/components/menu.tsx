"use client";

import {
  GlobeAmericasIcon,
  EnvelopeOpenIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";
import { useCallback, useEffect, useMemo, useState } from "react";
import { RsvpFormButton } from "./rsvp-form";
import { DrawerMenu } from "./drawer-menu";
import { Bars3Icon } from "@heroicons/react/24/outline";

export const Menu = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = useCallback(() => setDrawerOpen(true), [setDrawerOpen]);
  const closeDrawer = useCallback(() => setDrawerOpen(false), [setDrawerOpen]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isDrawerOpen) {
        setDrawerOpen(false);
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isDrawerOpen]);

  return (
    <>
      <nav className="w-[100vw] h-[75px] bg-sg-yellow bg-opacity-90 bottom-0 fixed z-[1000]">
        <menu className="h-full flex justify-around items-center">
          <RsvpFormButton />
          <Link url="#travel" label="Travel" icon={LinkIcon.GLOBE} />
          <Link url="#schedule" label="Schedule" icon={LinkIcon.CALENDAR} />
          <button
            onClick={openDrawer}
            className="flex flex-col items-center font-bold"
          >
            <Bars3Icon className="w-7" />
            <span>Menu</span>
          </button>
        </menu>
      </nav>
      <DrawerMenu isOpen={isDrawerOpen} closeDrawer={closeDrawer} />
    </>
  );
};

enum LinkIcon {
  GLOBE,
  ENVELOPE,
  CALENDAR,
}

const Link = ({
  url,
  label,
  icon,
}: {
  url: string;
  label: string;
  icon: LinkIcon;
}) => {
  const iconComp = useMemo(() => {
    switch (icon) {
      case LinkIcon.GLOBE:
        return <GlobeAmericasIcon className="w-7" />;
      case LinkIcon.ENVELOPE:
        return <EnvelopeOpenIcon className="h-6 mb-1" />;
      case LinkIcon.CALENDAR:
        return <CalendarIcon className="w-6 mb-1" />;
    }
  }, [icon]);

  return (
    <a href={url} className="flex flex-col items-center font-bold">
      {iconComp}
      <span>{label}</span>
    </a>
  );
};
