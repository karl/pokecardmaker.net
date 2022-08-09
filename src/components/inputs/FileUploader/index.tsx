import { UploadFile as UploadFileIcon } from '@mui/icons-material';
import { Button, CircularProgress, FormControl } from '@mui/material';
import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Label from '../Label';
import { ButtonLabel } from './styles';
import { FileUploaderProps } from './types';

const FileUploader: FC<FileUploaderProps> = ({
  slug,
  label,
  onChange,
  file,
  tooltipProps,
}) => {
  const fileReader = useRef<FileReader>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>();

  useEffect(() => {
    if (!file) setFileName(undefined);
  }, [file]);

  const onUpload = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const upload = e.currentTarget.files?.[0];
    if (!upload) return;
    setLoading(true);

    // Read as dataURL so we don't have to use local blobs, blobs don't work with html-to-canvas
    fileReader.current?.readAsDataURL(upload);
    setFileName(upload.name);
    e.currentTarget.value = '';
  }, []);

  // Subscribe to FileReader results and call the onChange when a result comes in
  useEffect(() => {
    if (!fileReader.current) {
      fileReader.current = new FileReader();
    }

    const successCallback = () => {
      const result = fileReader.current?.result;
      if (typeof result !== 'string') return;

      setLoading(false);
      // TODO: Compress image to not be any bigger than cardWidth and cardHeight?
      onChange(result);
    };

    const errorCallback = () => {
      setLoading(false);
    };

    fileReader.current?.addEventListener('load', successCallback);
    fileReader.current?.addEventListener('error', errorCallback);

    return () => {
      fileReader.current?.removeEventListener('load', successCallback);
      fileReader.current?.removeEventListener('error', errorCallback);
    };
  }, [onChange]);

  return (
    <FormControl>
      <Label slug={slug} tooltipProps={tooltipProps}>
        {label}
      </Label>
      <Button
        sx={{
          borderColor: 'rgba(0, 0, 0, 0.25)',
          textTransform: 'none',
        }}
        variant="outlined"
        color="inherit"
        component="label"
        startIcon={
          isLoading ? (
            <CircularProgress color="inherit" size={20} />
          ) : (
            <UploadFileIcon />
          )
        }
      >
        <ButtonLabel>{fileName ?? <>&nbsp;</>}</ButtonLabel>
        <input
          id={`${slug}-input`}
          accept="image/*"
          type="file"
          hidden
          onChange={onUpload}
        />
      </Button>
    </FormControl>
  );
};

export default FileUploader;
