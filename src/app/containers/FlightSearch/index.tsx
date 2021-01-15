/**
 *
 * FlightSearch
 *
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { flightSearchActions, reducer, sliceKey } from './slice';
import { selectFlightSearch } from './selectors';
import { flightSearchSaga } from './saga';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

interface Props {}

export function FlightSearch(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: flightSearchSaga });
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const flightSearch = useSelector(selectFlightSearch);
  const dispatch = useDispatch();
  let history = useHistory();
  const { t } = useTranslation();

  React.useEffect(() => {
    dispatch(flightSearchActions.loadCountries());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = data => {
    try {
      dispatch(flightSearchActions.searchFlight(data));
      history.push('form');
    } catch (error) {}
  };

  return (
    <>
      <Helmet>
        <title>Flight Search</title>
        <meta name="description" content="Description of Flight Search" />
      </Helmet>
      <Box mt={4}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4}>
            <Grid item xs={6} sm={12}>
              <Typography variant="h3" align="center">
                {t('Welcome to your web check-in')}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={12}>
              <TextField
                fullWidth
                name="flightNumber"
                inputRef={register({ required: true })}
                label={t('Flight Number')}
                variant="filled"
                error={!!errors.flightNumber}
                defaultValue={flightSearch.flightNumber}
              />
            </Grid>
            <Grid item xs={6} sm={12}>
              <TextField
                fullWidth
                name="fullName"
                inputRef={register({
                  required: true,
                  pattern: /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/,
                })}
                label={t('Full Name')}
                variant="filled"
                error={!!errors.fullName}
                helperText={!!errors.fullName && 'Name has to be full'}
                defaultValue={flightSearch.fullName}
              />
            </Grid>
            <Grid item xs={6} sm={12}>
              <Button
                type="submit"
                color="primary"
                fullWidth
                variant="contained"
              >
                {t('Search Flight')}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
}
