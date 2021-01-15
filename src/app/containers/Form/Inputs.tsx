import * as React from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Controller } from 'react-hook-form';

export default function FormInputs({
  handleSubmit,
  onSubmit,
  confirm,
  t,
  fullName,
  register,
  errors,
  form,
  countries,
  control,
  nationality,
}) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            {!confirm
              ? t('Hi') + ', ' + fullName
              : t('Review your information')}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            disabled={confirm}
            label={t('First Name')}
            variant="filled"
            name="fullName"
            inputRef={register({ required: true })}
            error={!!errors.fullName}
            defaultValue={
              fullName.split(' ').slice(0, -2).join(' ') ?? form.fullName
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            disabled={confirm}
            label={t('Last Name')}
            variant="filled"
            name="fullName"
            inputRef={register({ required: true })}
            defaultValue={
              fullName.split(' ').slice(-2).join(' ') ?? form.fullName
            }
            error={!!errors.fullName}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl
            error={!!errors.nationality}
            variant="filled"
            fullWidth
            disabled={confirm}
          >
            <InputLabel id="demo-simple-select-filled-label">
              {t('Nationality')}
            </InputLabel>
            <Controller
              as={
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                >
                  {countries.map(country => (
                    <MenuItem value={country.alpha2Code}>
                      {country.name}
                    </MenuItem>
                  ))}
                </Select>
              }
              control={control}
              rules={{ required: true }}
              name="nationality"
              defaultValue={form.nationality}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            disabled={confirm}
            label={t('Email')}
            variant="filled"
            inputRef={register({ required: true })}
            name="email"
            defaultValue={form.email}
            error={!!errors.email}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            disabled={confirm}
            label={t('Phone number')}
            variant="filled"
            inputRef={register({ required: true })}
            name="phoneNumber"
            defaultValue={form.phoneNumber}
            error={!!errors.phoneNumber}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            disabled={confirm}
            label={t('Passport number')}
            variant="filled"
            inputRef={register({ required: true })}
            name="passportNumber"
            defaultValue={form.passportNumber}
            error={!!errors.passportNumber}
          />
        </Grid>
        {(nationality === 'AT' ||
          nationality === 'BE' ||
          nationality === 'FR' ||
          nationality === 'ES') && (
          <Grid item xs={6}>
            <TextField
              fullWidth
              disabled={confirm}
              label={t('Residence')}
              variant="filled"
              inputRef={register({ required: true })}
              name="residence"
              defaultValue={form.residence}
              error={!!errors.residence}
            />
          </Grid>
        )}
        {(nationality === 'AT' || nationality === 'GR') && (
          <Grid item xs={6}>
            <TextField
              fullWidth
              disabled={confirm}
              label={t('Passport expiry date')}
              variant="filled"
              name="passportExpiry"
              inputRef={register({ required: true })}
              defaultValue={form.passportExpiry}
              error={!!errors.passportExpiry}
            />
          </Grid>
        )}
        {(nationality === 'BE' || nationality === 'FR') && (
          <Grid item xs={6}>
            <TextField
              fullWidth
              disabled={confirm}
              label={t('Birth date')}
              variant="filled"
              name="birthDate"
              inputRef={register({ required: true })}
              defaultValue={form.birthDate}
              error={!!errors.birthDate}
            />
          </Grid>
        )}
        {nationality === 'FR' && (
          <Grid item xs={6}>
            <TextField
              fullWidth
              disabled={confirm}
              label={t('Birth place')}
              variant="filled"
              name="birthPlace"
              inputRef={register({ required: true })}
              defaultValue={form.birthPlace}
              error={!!errors.birthPlace}
            />
          </Grid>
        )}
        {nationality === 'GR' && (
          <Grid item xs={6}>
            <TextField
              fullWidth
              disabled={confirm}
              label={t('Passport location of issue')}
              variant="filled"
              name="passportLocation"
              inputRef={register({ required: true })}
              defaultValue={form.passportLocation}
              error={!!errors.passportLocation}
            />
          </Grid>
        )}

        <Grid item xs={6}>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked={form.acceptTandC}
                name="acceptTandC"
                inputRef={register({ required: true })}
                disabled={confirm}
              />
            }
            label={t('Accept T & C ?')}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" color="primary" fullWidth variant="contained">
            {t('Continue')}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
