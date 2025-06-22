'use client';

import {
  Ticker,
  TickerIcon,
  type TickerIconProps,
  TickerPrice,
  TickerPriceChange,
  type TickerPriceChangeProps,
  type TickerPriceProps,
  type TickerProps,
  TickerSymbol,
  type TickerSymbolProps,
} from '@repo/ticker';

const items: {
  symbol: TickerSymbolProps['symbol'];
  src: TickerIconProps['src'];
  price: TickerPriceProps['price'];
  change: TickerPriceChangeProps['change'];
  currency?: TickerProps['currency'];
  locale?: TickerProps['locale'];
}[] = [
  {
    symbol: 'DUOL',
    src: 'https://raw.githubusercontent.com/nvstly/icons/refs/heads/main/ticker_icons/DUOL.png',
    price: 478.03,
    change: 5.2,
  },
  {
    symbol: 'DBD',
    src: 'https://raw.githubusercontent.com/nvstly/icons/refs/heads/main/ticker_icons/DBD.png',
    price: 102.33,
    change: 1.05,
    currency: 'EUR',
    locale: 'de-DE',
  },
  {
    symbol: '7203.T',
    src: 'https://raw.githubusercontent.com/nvstly/icons/refs/heads/main/ticker_icons/TM.png',
    price: 2460,
    change: -120,
    currency: 'JPY',
    locale: 'ja-JP',
  },
];

const Example = () =>
  items.map((i) => (
    <Ticker currency={i.currency} key={i.symbol} locale={i.locale}>
      <TickerIcon src={i.src} symbol={i.symbol} />
      <TickerSymbol symbol={i.symbol} />
      <TickerPrice price={i.price} />
      <TickerPriceChange change={i.change} />
    </Ticker>
  ));

export default Example;
