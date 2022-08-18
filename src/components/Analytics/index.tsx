import { FC, useEffect } from 'react';
import ReactGA from 'react-ga4';

const gaId = process.env.NEXT_PUBLIC_GA_ID;

const Analytics: FC = () => {
  useEffect(() => {
    if (gaId) {
      console.log('initialize');
      // TODO: Only init if cookies accepted
      ReactGA.initialize(gaId, {
        // testMode: true,
      });
    }
  }, []);

  return <></>;
};

export default Analytics;
