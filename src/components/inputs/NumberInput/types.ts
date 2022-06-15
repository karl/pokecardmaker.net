export interface NumberInputProps {
  label: string;
  slug: string;
  value?: number;
  onChange: (value: number | '') => void;
}
