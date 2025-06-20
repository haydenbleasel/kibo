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
    <TickerIcon src="invalid-icon-url" symbol="AAPL" />
    <TickerSymbol symbol="AAPL" />
    <TickerPrice price={196.58} />
    <TickerPriceChange change={-1.25} />
  </Ticker>
);

export default Example;
