import { PropsWithChildren } from 'react';
import { TooltipProps } from '../Tooltip/types';

export interface LabelProps {
  slug: string;
  tooltipProps?: PropsWithChildren<TooltipProps>;
}
