'use client';

import {
  Ticker,
  TickerIcon,
  TickerPrice,
  TickerPriceChange,
  TickerSymbol,
} from '@repo/ticker';

const Example = () => (
  <Ticker>
    <TickerIcon
      src="https://raw.githubusercontent.com/nvstly/icons/refs/heads/main/ticker_icons/GOOG.png"
      symbol="GOOG"
    />
    <TickerSymbol symbol="GOOG" />
    <TickerPrice price={175.41} />
    <TickerPriceChange change={2.13} />
  </Ticker>
);

export default Example;
