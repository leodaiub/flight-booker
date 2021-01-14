import * as React from 'react';
import { render } from '@testing-library/react';
import { Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import { configureAppStore } from 'store/configureStore';
import { Menu } from '../';
import { reducer, themeSliceKey } from 'theme/slice';
import { useInjectReducer } from 'redux-injectors';
import { ThemeProvider } from 'theme/ThemeProvider';
import { Router } from '@material-ui/icons';

const renderComponent = (store: Store) =>
  render(
    <Provider store={store}>
      <HelmetProvider>
        <ThemeProvider>
          <Router>
            <Menu />
          </Router>
        </ThemeProvider>
      </HelmetProvider>
    </Provider>,
  );

describe('<Menu />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    jest.mock('react-i18next', () => ({
      useTranslation: () => ({ t: key => key }),
    }));

    store = configureAppStore();
  });
  it('should match the snapshot', () => {
    const component = renderComponent(store);
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
