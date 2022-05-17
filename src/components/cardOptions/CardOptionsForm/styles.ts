import { styled } from '@css';
import { Box } from '@mui/system';

export const BoxForm = styled(Box)`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  gap: ${({ theme }) => theme.spacing(2)};
`;
