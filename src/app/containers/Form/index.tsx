/**
 *
 * Form
 *
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { formActions, reducer, sliceKey } from './slice';
import { selectForm } from './selectors';
import { formSaga } from './saga';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { selectFlightSearch } from '../FlightSearch/selectors';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

interface Props {}

export function Form(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: formSaga });
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const [confirm, setConfirm] = React.useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const form = useSelector(selectForm);
  const { countries } = useSelector(selectFlightSearch);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const history = useHistory();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const onSubmit = data => {
    console.log(data);
    confirm ? history.push('/success') : setConfirm(true);
  };
  console.log(form);
  return (
    <>
      <Helmet>
        <title>Flight Search</title>
        <meta name="description" content="Description of Flight Search" />
      </Helmet>
      <Box mt={4}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Typography variant="h3" align="center">
                {!confirm ? t('Hi') + ', Mr. Doe!' : 'Review your information'}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                disabled={confirm}
                label={t('First Name')}
                variant="filled"
                name="fullName"
                inputRef={register}
                defaultValue={form.fullName}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                disabled={confirm}
                label={t('Last Name')}
                variant="filled"
                name="fullName"
                inputRef={register}
                defaultValue={form.fullName}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormControl variant="filled" fullWidth disabled={confirm}>
                <InputLabel id="demo-simple-select-filled-label">
                  {t('Nationality')}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  inputRef={register}
                  name="nationality"
                  defaultValue={form.nationality}
                >
                  {/* <MenuItem value="">
                    <em> {t('Full Name')}</em>
                  </MenuItem> */}
                  {countries.map(country => (
                    <MenuItem value={country.alpha2Code}>
                      {country.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                disabled={confirm}
                label={t('Email')}
                variant="filled"
                inputRef={register}
                name="email"
                defaultValue={form.email}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                disabled={confirm}
                label={t('Phone number')}
                variant="filled"
                inputRef={register}
                name="phoneNumber"
                defaultValue={form.phoneNumber}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                disabled={confirm}
                label={t('Passport number')}
                variant="filled"
                inputRef={register}
                name="passportNumber"
                defaultValue={form.passportNumber}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                disabled={confirm}
                label={t('Residence')}
                variant="filled"
                helperText={t('country and city and adress')}
                inputRef={register}
                name="residence"
                defaultValue={form.residence}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                disabled={confirm}
                label={t('Passport expiry date')}
                variant="filled"
                name="passportExpiry"
                inputRef={register}
                defaultValue={form.passportExpiry}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                disabled={confirm}
                label={t('Birth date')}
                variant="filled"
                name="birthDate"
                inputRef={register}
                defaultValue={form.birthDate}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                disabled={confirm}
                label={t('Birth place')}
                variant="filled"
                name="birthPlace"
                inputRef={register}
                defaultValue={form.birthPlace}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                disabled={confirm}
                label={t('Passport location of issue')}
                variant="filled"
                helperText={t('country and city')}
                name="passportLocation"
                inputRef={register}
                defaultValue={form.passportLocation}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked={form.acceptTandC}
                    name="acceptTandC"
                    inputRef={register}
                    disabled={confirm}
                  />
                }
                label={t('Accept T & C ?')}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button
                type="submit"
                color="primary"
                fullWidth
                variant="contained"
              >
                {t('Continue')}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
}
