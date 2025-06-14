import { Typography } from '@mui/material';
import { NextSeo } from 'next-seo';

export default function Custom404() {
  return (
    <>
      <NextSeo title="Página não encontrada" />
      <Typography variant="h2" component="h1" align="center" sx={{ mt: 6 }}>
        Página não encontrada
      </Typography>
    </>
  );
}
