import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@material-ui/core';

export function Success() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Success</title>
        <meta name="description" content="Check-in confirmed" />
      </Helmet>
      <Box
        height="50vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4">{t('Your check-in is confirmed')}.</Typography>
      </Box>
    </>
  );
}
