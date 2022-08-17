import { FC } from 'react';
import ReactGA from "react-ga4";

const gaId = process.env.NEXT_PUBLIC_GA_ID;
console.log('gaId', gaId);

const Analytics: FC = () => {
  if (gaId) {
    ReactGA.initialize(gaId);
    ReactGA.send("pageview");
  }

  return (
    <></>
  );
}

export default Analytics;
