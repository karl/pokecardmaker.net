import { PropsWithChildren } from 'react';
import { TooltipProps } from '../Tooltip/types';

export interface FileUploaderProps {
  slug: string;
  label: string;
  onChange: (src: string) => void;
  file?: string;
  tooltipProps?: PropsWithChildren<TooltipProps>;
}
