"use client";

import { EnvelopeOpenIcon } from "@heroicons/react/24/solid";
import { PopupButton } from "@typeform/embed-react";

export const RsvpFormButton = () => {
  return (
    <PopupButton id="uktewJq6" className="flex flex-col items-center font-bold">
      <EnvelopeOpenIcon className="h-6 mb-1" />
      <span>RSVP</span>
    </PopupButton>
  );
};
