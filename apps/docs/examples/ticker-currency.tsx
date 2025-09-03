"use client";

import {
  Ticker,
  TickerIcon,
  TickerPrice,
  TickerPriceChange,
  TickerSymbol,
} from "@repo/ticker";
import Image from "next/image";

const items = [
  {
    symbol: "DUOL",
    src: `https://img.logo.dev/ticker/DUOL?token=${process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN}&size=26&retina=true`,
    price: 478.03,
    change: 5.2,
  },
  {
    symbol: "DBD",
    src: `https://img.logo.dev/ticker/DBD?token=${process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN}&size=26&retina=true`,
    price: 102.33,
    change: 1.05,
    currency: "EUR",
    locale: "de-DE",
  },
  {
    symbol: "7203.T",
    src: `https://img.logo.dev/ticker/TM?token=${process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN}&size=26&retina=true`,
    price: 2460,
    change: -120,
    currency: "JPY",
    locale: "ja-JP",
  },
];

const Example = () =>
  items.map((i) => (
    <Ticker currency={i.currency} key={i.symbol} locale={i.locale}>
      <TickerIcon asChild>
        <Image alt={i.symbol} height={26} src={i.src} width={26} />
      </TickerIcon>
      <TickerSymbol symbol={i.symbol} />
      <TickerPrice price={i.price} />
      <TickerPriceChange change={i.change} />
    </Ticker>
  ));

export default Example;
