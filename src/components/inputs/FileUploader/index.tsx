import { UploadFile as UploadFileIcon } from '@mui/icons-material';
import { Button, FormControl, InputLabel } from '@mui/material';
import { ChangeEvent, FC, useCallback, useState } from 'react';
import { ButtonLabel } from './styles';
import { FileUploaderProps } from './types';

const FileUploader: FC<FileUploaderProps> = ({ slug, label, onChange }) => {
  const [fileName, setFileName] = useState<string>();

  const onUpload = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.currentTarget.files?.[0];
      if (!file) return;
      onChange(URL.createObjectURL(file));
      setFileName(file.name);
    },
    [onChange],
  );

  return (
    <FormControl>
      <InputLabel shrink htmlFor={`${slug}-input`}>
        {label}
      </InputLabel>
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
