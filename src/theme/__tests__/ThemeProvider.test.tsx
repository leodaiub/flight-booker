import React from 'react';
import { render } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import * as slice from '../slice';
import { Store } from '@reduxjs/toolkit';
import { ThemeProvider } from '../ThemeProvider';
import { configureAppStore } from 'store/configureStore';
import { createMuiTheme } from '@material-ui/core';
import { themes } from 'theme/themes';

const renderThemeProvider = (store: Store, Child: React.FunctionComponent) =>
  render(
    <Provider store={store}>
      <ThemeProvider>
        <Child />
      </ThemeProvider>
    </Provider>,
  );

describe('<ThemeProvider />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should render its children', () => {
    const text = 'Test';
    const children = () => <h1>{text}</h1>;
    const { queryByText } = renderThemeProvider(store, children);
    expect(queryByText(text)).toBeInTheDocument();
  });
});
