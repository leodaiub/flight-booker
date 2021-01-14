import React from 'react';
import styled from 'styled-components/macro';
import { P } from './P';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@material-ui/core';

export function Success() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Box
        height="50vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4">Your check-in is confirmed.</Typography>
      </Box>
    </>
  );
}
