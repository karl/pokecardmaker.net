export interface ControlledSliderProps {
  label: string;
  slug: string;
  step?: number;
  min?: number;
  max?: number;
  value: number;
  onChange: (value: number) => void;
  onChangeCommitted: (value: number) => void;
}
