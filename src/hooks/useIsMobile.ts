import { useDeviceSelectors } from 'react-device-detect';

const useIsMobile = () => {
  const [{ isMobile }] = useDeviceSelectors(
    typeof window === 'undefined' ? 'SSR' : window.navigator.userAgent,
  );

  return {
    isMobile: typeof isMobile === 'boolean' ? isMobile : false,
  };
};

export default useIsMobile;
