'use client';

import {
  Ticker,
  TickerIcon,
  TickerPrice,
  TickerPriceChange,
  TickerSymbol,
} from '@repo/ticker';

const Example = () => (
  <p>
    In other autonomous vehicle news, Alphabet-owned{' '}
    <Ticker className="px-1 text-base">
      <TickerIcon
        src="https://raw.githubusercontent.com/nvstly/icons/refs/heads/main/ticker_icons/GOOG.png"
        symbol="GOOG"
      />
      <TickerSymbol symbol="GOOG" />
      <TickerPrice price={175.41} />
      <TickerPriceChange change={2.13} />
    </Ticker>{' '}
    Waymo is looking to bring its robotaxi service to New York.
  </p>
);

export default Example;
