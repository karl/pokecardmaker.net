import { FC, ImgHTMLAttributes } from 'react';
import { StyledImg, Wrapper } from './styles';

const DisplayImg: FC<ImgHTMLAttributes<HTMLImageElement>> = props => (
  <Wrapper>
    <StyledImg alt="" {...props} />
  </Wrapper>
);

export default DisplayImg;
