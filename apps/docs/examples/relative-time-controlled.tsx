"use client";

import {
  RelativeTime,
  RelativeTimeZone,
  RelativeTimeZoneDate,
  RelativeTimeZoneDisplay,
  RelativeTimeZoneLabel,
} from "@repo/relative-time";
import { useEffect, useState } from "react";

const timezones = [
  { label: "EST", zone: "America/New_York" },
  { label: "GMT", zone: "Europe/London" },
  { label: "JST", zone: "Asia/Tokyo" },
];

const Example = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-md border bg-background p-4">
      <RelativeTime onTimeChange={setTime} time={time}>
        {timezones.map(({ zone, label }) => (
          <RelativeTimeZone key={zone} zone={zone}>
            <RelativeTimeZoneLabel>{label}</RelativeTimeZoneLabel>
            <RelativeTimeZoneDate />
            <RelativeTimeZoneDisplay />
          </RelativeTimeZone>
        ))}
      </RelativeTime>
    </div>
  );
};

export default Example;
