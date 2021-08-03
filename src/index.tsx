import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme';
import configureStore from "./store";

import Routes from './routes';

ReactDOM.render(
  <Provider store={configureStore()}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Router>
          <Routes />
        </Router>
    </ThemeProvider>     
  </Provider> 
  , document.getElementById('root'));