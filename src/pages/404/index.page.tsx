import { Forward as ForwardIcon } from '@mui/icons-material';
import { SEO } from '@layout';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { FC } from 'react';
import { siteDescription } from 'src/constants';
import notFoundImage from '@assets/images/psyduck404.png';
import NextLink from 'next/link';
import Routes from '@routes';

const NotFoundPage: FC = () => (
  <>
    <SEO title="Page not found" description={siteDescription} />
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={4}
      width="fit-content"
      margin="0 auto"
    >
      <Typography variant="h1" component="h2">
        Oh no! Page not found!
      </Typography>
      <Image src={notFoundImage} />
      <NextLink href={Routes.Home} passHref>
        <Button
          variant="contained"
          fullWidth
          startIcon={<ForwardIcon sx={{ transform: 'rotate(180deg)' }} />}
        >
          Go back home
        </Button>
      </NextLink>
    </Box>
  </>
);

export default NotFoundPage;
