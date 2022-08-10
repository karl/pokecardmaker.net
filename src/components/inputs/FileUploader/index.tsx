import { UploadFile as UploadFileIcon } from '@mui/icons-material';
import {
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  InputAdornment,
  Typography,
} from '@mui/material';
import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { maxFileSize } from 'src/constants';
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
  const [errorMessage, setErrorMessage] = useState<string>();

  useEffect(() => {
    if (!file) setFileName(undefined);
  }, [file]);

  const onUpload = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(undefined);

    const upload = e.currentTarget.files?.[0];
    if (!upload) return;
    if (upload.size > maxFileSize) {
      setErrorMessage('Please upload a file smaller than 5 MB');
      return;
    }
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
    <FormControl error={!!errorMessage}>
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
        endIcon={
          !fileName ? (
            <InputAdornment position="end">
              <Typography variant="subtitle2">&lt; 5 MB</Typography>
            </InputAdornment>
          ) : undefined
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
      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};

export default FileUploader;
