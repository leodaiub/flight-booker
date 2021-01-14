import * as React from 'react';
import { render } from '@testing-library/react';
import { Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import { configureAppStore } from 'store/configureStore';
import { Form } from '../';

const renderComponent = (store: Store) =>
  render(
    <Provider store={store}>
      <HelmetProvider>
        <Form />
      </HelmetProvider>
    </Provider>,
  );

describe('<Form />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });
  it('should match the snapshot', () => {
    jest.mock('react-i18next', () => ({
      useTranslation: () => ({ t: key => key }),
    }));
    const component = renderComponent(store);
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
