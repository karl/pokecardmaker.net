import { Icon, ListItemText, SelectChangeEvent } from '@mui/material';
import { FC, useState } from 'react';
import Routes from '@routes';
import Image from 'next/image';
import ControlledSelector from '@components/inputs/ControlledSelector';
import { SelectorListItemIcon } from '@components/SelectorListItemIcon';
import { SelectorMenuItem } from '@components/SelectorMenuItem';
import { QuestionMark as QuestionMarkIcon } from '@mui/icons-material';
import FileUploader from '@components/inputs/FileUploader';
import { useType, useTypeImg } from '@cardEditor/cardOptions/type';
import { useCardLogic } from '@cardEditor/cardLogic';
import { useBaseSet } from '@cardEditor/cardOptions/baseSet';

const TypeImgSelector: FC = () => {
  const { hasTypeImage } = useCardLogic();
  const { baseSet } = useBaseSet();
  const { pokemonTypes } = useType();
  const { typeImg, setTypeImg, customTypeImgSrc, setCustomTypeImgSrc } =
    useTypeImg();
  const [customIconActive, setCustomIconActive] = useState<boolean>(
    !!customTypeImgSrc,
  );

  const handleChange = (event: SelectChangeEvent) => {
    const value = Number(event.target.value);
    if (value) {
      setTypeImg(value);
      setCustomIconActive(false);
      setCustomTypeImgSrc(undefined);
    } else {
      setCustomIconActive(true);
    }
  };

  if (!hasTypeImage) return null;

  return (
    <>
      <ControlledSelector
        value={customIconActive ? 0 : typeImg?.id}
        displayName="Energy Type"
        slug="typeImg"
        onChange={handleChange}
      >
        <SelectorMenuItem value={0}>
          <SelectorListItemIcon>
            <Icon>
              <QuestionMarkIcon />
            </Icon>
          </SelectorListItemIcon>
          <ListItemText primary="Custom" />
        </SelectorMenuItem>
        {pokemonTypes.map(pt => (
          <SelectorMenuItem key={pt.slug} value={pt.id}>
            <SelectorListItemIcon>
              <Image
                src={Routes.Assets.Icons.TypeBorder(baseSet.slug, pt.slug)}
                width={26}
                height={26}
                alt=""
              />
            </SelectorListItemIcon>
            <ListItemText primary={pt.displayName} />
          </SelectorMenuItem>
        ))}
      </ControlledSelector>
      {customIconActive && (
        <FileUploader
          slug="customTypeImgSrc"
          label="Custom Energy Type"
          onChange={setCustomTypeImgSrc}
          tooltipProps={{
            title: 'Recommended size: 42×42 pixels',
          }}
        />
      )}
    </>
  );
};

export default TypeImgSelector;
