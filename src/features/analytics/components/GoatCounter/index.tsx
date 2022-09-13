import Script from 'next/script';
import { FC } from 'react';

const GoatCounter: FC = () => (
  <Script
    data-goatcounter="https://pokecardmaker.goatcounter.com/count"
    src="//gc.zgo.at/count.js"
    // For debugging
    // data-goatcounter-settings='{"allow_local": true}'
    strategy="afterInteractive"
    async
  />
);

export default GoatCounter;
