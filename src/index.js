import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  colors: {
    accent: '#7ba7ab',
    grey: '#9e9c9c',
    error: '#dc143c',
    bgInput: '#f9f0da',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyle />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
