import { Box, Button, TextField } from '@mui/material';
import html2canvas from 'html2canvas';
import { FC, useEffect, useMemo, useState } from 'react';
import { useElementSize } from 'usehooks-ts';
import { NameText } from './styles';

const toDataURL = (url: string, callback: (b64: string) => void) => {
  const xhr = new XMLHttpRequest();
  xhr.onload = () => {
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result as string);
    };
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
};

const CssExample: FC = () => {
  const [squareRef, { width }] = useElementSize();
  const [name, setName] = useState<string>('JohnF');
  const [hp, setHP] = useState<string>('100');
  const [cardImg, setCardImg] = useState<string>('/assets/SS_Basic_Grass.png');
  const [vImg, setVImg] = useState<string>('/assets/v_icon.png');

  useEffect(() => {
    toDataURL('/assets/SS_Basic_Grass.png', b64 => setCardImg(b64));
    toDataURL('/assets/v_icon.png', b64 => setVImg(b64));
  }, []);

  // At around 1390 width resizing this crashes
  const fontSize = useMemo<number>(
    () => (!width ? 16 : width / (747 / 16)),
    [width],
  );

  const makeImage = async (): Promise<HTMLCanvasElement | undefined> => {
    const body = document.querySelector('#body') as HTMLElement;
    body.querySelectorAll('canvas')?.forEach(c => c.remove());
    const div = document.querySelector('#card') as HTMLElement;
    if (!div) return undefined;
    // const desiredHeight = 1038;
    const desiredWidth = 747;
    const originalWidth = div.style.width;
    const originalFontSize = div.style.fontSize;
    div.style.width = `${desiredWidth}px`;
    div.style.fontSize = '16px';
    const scale = 1 + (desiredWidth - div.clientWidth) / div.clientWidth;
    const canvas = await html2canvas(div, {
      backgroundColor: 'transparent',
      scale: scale * 1,
      foreignObjectRendering: true,
      scrollY: -div.offsetTop,
      scrollX: -div.offsetLeft,
      windowHeight: div.clientHeight,
      windowWidth: div.clientWidth,
    });
    div.style.width = originalWidth;
    div.style.fontSize = originalFontSize;
    canvas.style.width = '50%';
    canvas.style.height = 'unset';
    body.append(canvas);

    return canvas;
  };

  const downloadCanvas = (canvas?: HTMLCanvasElement) => {
    if (!canvas) return;

    const pngUrl = canvas.toDataURL('image/png', 1);

    const link = document.createElement('a');
    link.href = pngUrl;
    link.download = 'abc.png';
    document.body.appendChild(link);
    link.dispatchEvent(
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window,
      }),
    );
    document.body.removeChild(link);
  };

  useEffect(() => {
    makeImage();
  }, [name]);

  return (
    <>
      <div id="body" style={{ width: '70%', display: 'flex' }}>
        <div
          id="card"
          ref={squareRef}
          style={{ width: '50%', fontSize, fontFamily: 'Futura LT' }}
        >
          <svg
            style={{ height: 0, position: 'absolute' }}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <filter id="whiteOutlineEffect" colorInterpolationFilters="sRGB">
                <feMorphology
                  in="SourceAlpha"
                  result="MORPH"
                  operator="dilate"
                  radius="2"
                />
                <feColorMatrix
                  in="MORPH"
                  result="WHITENED"
                  type="matrix"
                  values="-1 0 0 0 1, 0 -1 0 0 1, 0 0 -1 0 1, 0 0 0 1 0"
                />
                <feMerge>
                  <feMergeNode in="WHITENED" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <feMorphology
              in="SourceAlpha"
              result="MORPH"
              operator="dilate"
              radius="2"
            />
            <foreignObject style={{ width: '100%', height: '100%' }} />
          </svg>
          <div style={{ position: 'relative' }}>
            <div>
              <img
                alt=""
                style={{ width: '100%', verticalAlign: 'middle' }}
                src={cardImg}
              />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                position: 'absolute',
                top: '3.3%',
                left: '19%',
                zIndex: 100,
                width: '53%',
                height: '6%',
              }}
            >
              <NameText>{name}</NameText>
              &nbsp;&nbsp;
              <NameText $pokemon>{name}</NameText>
              <img
                src={vImg}
                alt=""
                style={{ marginLeft: 10, height: '3.25em' }}
              />
            </div>
          </div>
        </div>
      </div>
      <Box display="flex" alignItems="center">
        <TextField
          size="small"
          value={name}
          onChange={e => setName(e.currentTarget.value)}
        />
        <TextField
          type="number"
          size="small"
          value={hp}
          onChange={e => setHP(e.currentTarget.value)}
        />
        <Button onClick={makeImage}>make img</Button>
        <Button onClick={async () => downloadCanvas(await makeImage())}>
          download img
        </Button>
      </Box>
    </>
  );
};

export default CssExample;
