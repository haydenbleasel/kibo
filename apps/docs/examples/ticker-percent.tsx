'use client';

import {
  Ticker,
  TickerIcon,
  type TickerIconProps,
  TickerPrice,
  TickerPriceChange,
  type TickerPriceChangeProps,
  type TickerPriceProps,
  TickerSymbol,
  type TickerSymbolProps,
} from '@repo/ticker';

const items: {
  symbol: TickerSymbolProps['symbol'];
  src: TickerIconProps['src'];
  price: TickerPriceProps['price'];
  change: TickerPriceChangeProps['change'];
}[] = [
  {
    symbol: 'TSLA',
    src: 'https://raw.githubusercontent.com/nvstly/icons/refs/heads/main/ticker_icons/TSLA.png',
    price: 182.12,
    change: -3.12,
  },
  {
    symbol: 'MSFT',
    src: 'https://raw.githubusercontent.com/nvstly/icons/refs/heads/main/ticker_icons/MSFT.png',
    price: 409.33,
    change: 2.18,
  },
];

const Example = () => (
  <>
    {items.map((i) => (
      <Ticker key={i.symbol}>
        <TickerIcon src={i.src} symbol={i.symbol} />
        <TickerSymbol symbol={i.symbol} />
        <TickerPrice price={i.price} />
        <TickerPriceChange change={i.change} isPercent />
      </Ticker>
    ))}
  </>
);

export default Example;
