import { useContext } from 'react';
import { AnalyticsContext } from '../Context';

const useAnalytics = () => {
  const { trackCardCreatorEvent } = useContext(AnalyticsContext);

  return {
    trackCardCreatorEvent,
  };
};

export default useAnalytics;
