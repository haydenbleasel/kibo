'use client';

import {
  Ticker,
  TickerIcon,
  TickerPrice,
  TickerPriceChange,
  TickerSymbol,
} from '@repo/ticker';
import Image from 'next/image';

const items = [
  {
    symbol: 'TSLA',
    src: `https://img.logo.dev/ticker/TSLA?token=${process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN}&size=26&retina=true`,
    price: 182.12,
    change: -3.12,
  },
  {
    symbol: 'MSFT',
    src: `https://img.logo.dev/ticker/MSFT?token=${process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN}&size=26&retina=true`,
    price: 409.33,
    change: 2.18,
  },
];

const Example = () => (
  <>
    {items.map((i) => (
      <Ticker key={i.symbol}>
        <TickerIcon asChild>
          <Image
            alt={i.symbol}
            height={26}
            src={i.src}
            width={26}
          />
        </TickerIcon>
        <TickerSymbol symbol={i.symbol} />
        <TickerPrice price={i.price} />
        <TickerPriceChange change={i.change} isPercent />
      </Ticker>
    ))}
  </>
);

export default Example;
