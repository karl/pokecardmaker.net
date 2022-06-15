export interface TextInputProps {
  label: string;
  slug: string;
  value?: string;
  onChange: (value: string) => void;
}
