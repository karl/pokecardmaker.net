import { CardInterface, RelationsInterface } from '@cardEditor';
import findById from '@utils/findById';
import { useMemo } from 'react';
import { defaultRelations, useCardOptions } from '@cardEditor/cardOptions';
import useType from './useType';

const useTypeImg = () => {
  const { typeImgId, customTypeImgSrc, stateSetter, typeImgAmount } =
    useCardOptions();
  const { pokemonTypes } = useType();

  const typeImg = useMemo<RelationsInterface['typeImg']>(
    () => findById(pokemonTypes, typeImgId, defaultRelations.typeImg),
    [pokemonTypes, typeImgId],
  );

  const setTypeImg = useMemo(
    () => stateSetter<CardInterface['typeImgId']>('typeImgId'),
    [stateSetter],
  );

  const setCustomTypeImgSrc = useMemo(
    () => stateSetter<CardInterface['customTypeImgSrc']>('customTypeImgSrc'),
    [stateSetter],
  );

  const setTypeImgAmount = useMemo(
    () => stateSetter<CardInterface['typeImgAmount']>('typeImgAmount'),
    [stateSetter],
  );

  return {
    typeImg,
    setTypeImg,
    customTypeImgSrc,
    setCustomTypeImgSrc,
    typeImgAmount,
    setTypeImgAmount,
  };
};

export default useTypeImg;
