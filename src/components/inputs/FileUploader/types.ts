export interface FileUploaderProps {
  slug: string;
  label: string;
  onChange: (src: string) => void;
  file?: string;
}
