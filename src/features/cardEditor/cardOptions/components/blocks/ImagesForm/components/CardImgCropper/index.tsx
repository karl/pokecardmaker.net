import { useCardStyles } from '@cardEditor/cardStyles';
import ImgCropper from '@components/ImgCropper';
import FileUploader from '@components/inputs/FileUploader';
import { Crop as CropIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useState } from 'react';
import { Area } from 'react-easy-crop';
import { CardImgCropperProps } from './types';

const DEFAULT_CROP: Area = { height: 0, width: 0, x: 0, y: 0 };

const CardImgCropper: FC<CardImgCropperProps> = ({
  label,
  slug,
  overlayZIndex,
  img,
  tooltipContent,
  setImg,
}) => {
  const { cardImgSrc } = useCardStyles();
  const [cropActive, setCropActive] = useState<boolean>(false);

  return (
    <>
      <FileUploader
        label={label}
        slug={slug}
        file={img?.src}
        onChange={src =>
          setImg({
            croppedArea: img?.croppedArea ?? DEFAULT_CROP,
            src,
          })
        }
        tooltipProps={{
          withPopup: true,
          title: label,
          children: tooltipContent,
        }}
      />
      {img?.src && (
        <Box display="flex" gap={1} mt={-1}>
          <Button
            fullWidth
            onClick={() => setCropActive(prev => !prev)}
            variant={cropActive ? 'contained' : 'outlined'}
            startIcon={<CropIcon />}
          >
            Crop
          </Button>
          <Button
            fullWidth
            onClick={() => setImg(undefined)}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Box>
      )}
      {img?.src && cropActive && (
        <ImgCropper
          src={img?.src}
          overlayImgSrc={cardImgSrc}
          overlayImgZIndex={overlayZIndex}
          onChange={croppedArea =>
            setImg({
              src: img.src,
              croppedArea,
            })
          }
        />
      )}
    </>
  );
};

export default CardImgCropper;
