import { useEffect, useState } from 'react';
import useCardDebug from '../features/cardEditor/debug/hooks/useCardDebug';

const useBase64Img = (src?: string) => {
  const { showDebug } = useCardDebug();
  // TODO?: Maybe show loader instead of nothing, maybe remove the `showDebug` ternary
  const [imgSrc, setImgSrc] = useState(showDebug ? src ?? '' : '');

  useEffect(() => {
    setImgSrc(showDebug ? src ?? '' : '');

    if (src) {
      (async () => {
        fetch(src)
          .then(response => response.blob())
          .then(blob => {
            const reader = new FileReader();
            reader.onloadend = () => {
              if (typeof reader.result === 'string') {
                setImgSrc(reader.result);
              }
            };
            reader.readAsDataURL(blob);
          })
          .catch(console.error);
      })();
    }
  }, [showDebug, src]);

  return imgSrc;
};

export default useBase64Img;
