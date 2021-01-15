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
import { Box } from '@material-ui/core';
import { selectFlightSearch } from '../FlightSearch/selectors';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import FormInputs from './Inputs';

interface Props {}

export function Form(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: formSaga });
  const { register, handleSubmit, errors, control, watch } = useForm(); // initialize the hook
  const [confirm, setConfirm] = React.useState<boolean>(false);
  const form = useSelector(selectForm);
  const { countries, fullName } = useSelector(selectFlightSearch);
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();
  const nationality = watch('nationality');

  const onSubmit = data => {
    confirm
      ? (() => {
          history.push('/success');
          dispatch(formActions.checkIn(form));
        })()
      : (() => {
          setConfirm(true);
          dispatch(formActions.changeForm(data));
        })();
  };

  return (
    <>
      <Helmet>
        <title>Flight Search</title>
        <meta name="description" content="Description of Flight Search" />
      </Helmet>
      <Box mt={4}>
        <FormInputs
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          confirm={confirm}
          t={t}
          fullName={fullName}
          register={register}
          errors={errors}
          form={form}
          countries={countries}
          control={control}
          nationality={nationality}
        ></FormInputs>
      </Box>
    </>
  );
}
