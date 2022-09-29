import { useEffect, useState } from 'react';

const useBase64Img = (src?: string) => {
  const [imgSrc, setImgSrc] = useState(src || '');

  useEffect(() => {
    setImgSrc(src || '');

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
  }, [src]);

  return imgSrc;
};

export default useBase64Img;
