export interface ControlledRadioProps<T = string> {
  value: T;
  label: string;
  disabled?: boolean;
}
