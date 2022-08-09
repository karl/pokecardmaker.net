import { UploadFile as UploadFileIcon } from '@mui/icons-material';
import { Button, FormControl } from '@mui/material';
import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
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
  const [fileName, setFileName] = useState<string>();

  useEffect(() => {
    if (!file) setFileName(undefined);
  }, [file]);

  const onUpload = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const upload = e.currentTarget.files?.[0];
      if (!upload) return;
      // TODO: Convert the blobs to dataURL using FileReader
      onChange(URL.createObjectURL(upload));
      setFileName(upload.name);
      e.currentTarget.value = '';
    },
    [onChange],
  );

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
        startIcon={<UploadFileIcon />}
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
