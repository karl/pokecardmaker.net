import { Close as CloseIcon } from '@mui/icons-material';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { FC, useState } from 'react';
import TooltipButton from './atoms/TooltipButton';
import { TooltipProps } from './types';

const Tooltip: FC<TooltipProps> = ({ title, withPopup, children }) => {
  const [open, setOpen] = useState<boolean>(false);

  if (withPopup)
    return (
      <>
        <TooltipButton onClick={() => setOpen(true)} />
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: { background: theme => theme.palette.background.default },
          }}
          maxWidth="md"
        >
          <DialogTitle sx={{ m: 0, px: 6, fontSize: 21 }}>
            {title}
            <IconButton
              aria-label="close"
              onClick={() => setOpen(false)}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>{children}</DialogContent>
        </Dialog>
      </>
    );

  return (
    <Tooltip title={title}>
      <TooltipButton />
    </Tooltip>
  );
};

export default Tooltip;
