"use client";

import { useEffect, useState } from "react";

export const Countdown = () => {
  const [diff, setDiff] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const event = new Date("13 Dec 2024 00:00:00 GMT-6");
      const now = new Date();
      setDiff(event.getTime() - now.getTime());
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const days = diff ? Math.floor(diff / (1000 * 60 * 60 * 24)) : null;
  const hours = diff
    ? Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    : null;
  const minutes = diff
    ? Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    : null;
  const seconds = diff ? Math.floor((diff % (1000 * 60)) / 1000) : null;

  return (
    <div className="flex text-black justify-evenly items-center">
      <SingleValue value={days} label="Days" />
      <SingleValue value={hours} label="Hours" />
      <SingleValue value={minutes} label="Minutes" />
      <SingleValue value={seconds} label="Seconds" />
    </div>
  );
};

const SingleValue = ({
  value,
  label,
}: {
  value: number | null;
  label: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center mx-3 lg:mx-10 my-2 lg:my-5">
      <span className="text-2xl lg:text-5xl font-light lg:font-extralight">
        {value?.toFixed(0) ?? "-"}
      </span>
      <span className="text-sm text-sg-blue font-bold">{label}</span>
    </div>
  );
};
