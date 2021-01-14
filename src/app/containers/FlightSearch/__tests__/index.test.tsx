import * as React from 'react';
import { render } from '@testing-library/react';
import { Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import { configureAppStore } from 'store/configureStore';
import { FlightSearch } from '../';
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

const renderComponent = (store: Store) =>
  render(
    <Provider store={store}>
      <HelmetProvider>
        <FlightSearch />
      </HelmetProvider>
    </Provider>,
  );

describe('<FlightSearch />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    i18next.use(initReactI18next);
    store = configureAppStore();
  });
  it('should match the snapshot', () => {
    const component = renderComponent(store);
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
