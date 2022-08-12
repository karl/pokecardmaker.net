import { FC, useCallback } from 'react';
import { useCardLogic } from '@cardEditor/cardLogic';
import { useTypeImg } from '@cardEditor/cardOptions/type';
import ControlledSelector from '@components/inputs/ControlledSelector';
import { MenuItem, SelectChangeEvent } from '@mui/material';
import Routes from '@routes';
import Image from 'next/image';

const MAX_TYPE_IMG_AMOUNT = 3;

const TypeImgAmountSelector: FC = () => {
  const { hasMultipleTypeImages } = useCardLogic();
  const { typeImgAmount, setTypeImgAmount, typeImg, customTypeImgSrc } =
    useTypeImg();

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      setTypeImgAmount(+event.target.value);
    },
    [setTypeImgAmount],
  );

  if (!hasMultipleTypeImages) return null;

  return (
    <ControlledSelector
      value={typeImgAmount}
      displayName="Energy Type Amount"
      slug="typeImgAmount"
      onChange={handleChange}
      gap={1}
    >
      {new Array(MAX_TYPE_IMG_AMOUNT).fill(undefined).map((_, amountIndex) => (
        <MenuItem
          value={amountIndex + 1}
          key={amountIndex + 1}
          title={String(amountIndex + 1)}
          sx={{ gap: 1 }}
        >
          {new Array(amountIndex + 1).fill(undefined).map((__, imageIndex) => (
            <Image
              key={imageIndex}
              src={
                customTypeImgSrc ||
                (typeImg
                  ? Routes.Assets.Icons.TypeBorder(typeImg.slug)
                  : Routes.Assets.Icons.TypeBorder('colorless'))
              }
              style={{ borderRadius: '50%' }}
              objectFit="cover"
              objectPosition="center"
              width={26}
              height={26}
              alt=""
            />
          ))}
        </MenuItem>
      ))}
    </ControlledSelector>
  );
};

export default TypeImgAmountSelector;
