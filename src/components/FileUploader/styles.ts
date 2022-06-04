import { styled } from '@css';
import { Typography } from '@mui/material';

export const ButtonLabel = styled(Typography)`
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
  white-space: nowrap;
  width: 100%;
  padding-left: ${({ theme }) => theme.spacing(8)};
`;
