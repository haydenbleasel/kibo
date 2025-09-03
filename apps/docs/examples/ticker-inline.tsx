"use client";

import {
  Ticker,
  TickerIcon,
  TickerPrice,
  TickerPriceChange,
  TickerSymbol,
} from "@repo/ticker";
import Image from "next/image";

const ticker = "GOOG";

const Example = () => (
  <p>
    In other autonomous vehicle news, Alphabet-owned{" "}
    <Ticker className="rounded-full bg-muted p-1 pr-2 text-xs">
      <TickerIcon asChild>
        <Image
          alt={ticker}
          height={20}
          src={`https://img.logo.dev/ticker/${ticker}?token=${process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN}&size=20&retina=true`}
          width={20}
        />
      </TickerIcon>
      <TickerSymbol symbol={ticker} />
      <TickerPrice price={175.41} />
      <TickerPriceChange change={2.13} />
    </Ticker>{" "}
    Waymo is looking to bring its robotaxi service to New York.
  </p>
);

export default Example;
