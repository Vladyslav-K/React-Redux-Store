import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import KahonsService from './services/kahons-service';
import { KahonsServiceProvider } from './components/kahons-service-context';

import store from './store';

const kahonsService = new KahonsService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <KahonsServiceProvider value={kahonsService}>
        <Router>
          <App />
        </Router>
      </KahonsServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);