import { styled as _styled } from '@mui/material';
import { FilteringStyledOptions } from '@mui/styled-engine';
import { MuiStyledOptions } from '@mui/system/createStyled';
import tags from './htmlTags';

const styled = (<
  C extends React.ComponentClass<React.ComponentProps<C>>,
  ForwardedProps extends keyof React.ComponentProps<C> = keyof React.ComponentProps<C>,
>(
  component: C,
  config: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps> &
    MuiStyledOptions,
) =>
  _styled(component, {
    shouldForwardProp: (prop: string) => !prop.startsWith('$'),
    ...config,
  })) as typeof _styled;

tags.forEach(tag => {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  (styled as any)[tag] = styled(tag as any);
});

export { css, GlobalStyles } from '@mui/material';
export default styled;
