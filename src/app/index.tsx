/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import { useTranslation } from 'react-i18next';
import { FlightSearch } from './containers/FlightSearch';
import { NotFoundPage } from './components/NotFoundPage';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Menu } from './components/Menu';
import { Container } from '@material-ui/core';
import { Form } from './containers/Form';
import { Success } from './components/Success';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Flight Booker"
        defaultTitle="Flight Booker"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A Flight Booker application" />
      </Helmet>
      <CssBaseline />
      <Container maxWidth="md">
        <Menu />
        <Switch>
          <Route exact path="/" component={FlightSearch} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/success" component={Success} />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
      <GlobalStyle />
    </BrowserRouter>
  );
}
