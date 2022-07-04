export interface ControlledCheckboxProps {
  value: boolean;
  label: string;
  slug: string;
  onChange: (value: boolean) => void;
}
