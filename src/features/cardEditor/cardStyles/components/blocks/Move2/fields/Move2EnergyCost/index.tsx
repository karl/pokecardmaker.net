import { useCardOptions } from '@cardEditor/cardOptions';
import { useType } from '@cardEditor/cardOptions/type';
import Routes from '@routes';
import Image from 'next/image';
import { FC } from 'react';
import { TypeContainer, Wrapper } from './styles';

const Move1EnergyCost: FC = () => {
  const { move2 } = useCardOptions();
  const { getTypeById } = useType();

  return (
    <Wrapper>
      {move2?.energyCost.flatMap(energy =>
        new Array(energy.amount).fill(null).map(_ => (
          <TypeContainer key={energy.typeId}>
            <Image
              alt=""
              layout="fill"
              objectFit="contain"
              src={Routes.Assets.Icons.TypeBorder(
                getTypeById(energy.typeId)!.slug,
              )}
            />
          </TypeContainer>
        )),
      )}
    </Wrapper>
  );
};

export default Move1EnergyCost;
