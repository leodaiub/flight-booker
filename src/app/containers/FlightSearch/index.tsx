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
import { messages } from './messages';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

interface Props {}

export function FlightSearch(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: flightSearchSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const flightSearch = useSelector(selectFlightSearch);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  let history = useHistory();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const [flightNumber, setFlightNumber] = React.useState<string>('');
  const [name, setName] = React.useState<string>('');
  React.useEffect(() => {
    dispatch(flightSearchActions.loadCountries());
  }, []);
  const handleSearch = () => {
    history.push('form');
  };
  return (
    <>
      <Helmet>
        <title>Flight Search</title>
        <meta name="description" content="Description of Flight Search" />
      </Helmet>
      <Box mt={4}>
        <form onSubmit={handleSearch}>
          <Grid container spacing={4}>
            <Grid item xs={6} sm={12}>
              <Typography variant="h3" align="center">
                {t('Welcome to your web check-in')}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={12}>
              <TextField
                fullWidth
                id="filled-basic"
                label="Flight Number"
                variant="filled"
              />
            </Grid>
            <Grid item xs={6} sm={12}>
              <TextField
                fullWidth
                id="filled-basic"
                label="Full Name"
                variant="filled"
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
