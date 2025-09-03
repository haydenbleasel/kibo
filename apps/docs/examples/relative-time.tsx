"use client";

import {
  RelativeTime,
  RelativeTimeZone,
  RelativeTimeZoneDate,
  RelativeTimeZoneDisplay,
  RelativeTimeZoneLabel,
} from "@repo/relative-time";

const timezones = [
  { label: "EST", zone: "America/New_York" },
  { label: "GMT", zone: "Europe/London" },
  { label: "JST", zone: "Asia/Tokyo" },
];

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <RelativeTime>
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

export default Example;
