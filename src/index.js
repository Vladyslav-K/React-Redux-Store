import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import CajonsService from './services/cajons-service';
import { CajonsServiceProvider } from './components/cajons-service-context';
import store from './store';
import firebaseConfig from '../firebaseConfig'



firebase.initializeApp(firebaseConfig);

const cajonsService = new CajonsService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <CajonsServiceProvider value={cajonsService}>
        <Router>
          <App />
        </Router>
      </CajonsServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);