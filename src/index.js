import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app'

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import CajonsService from './services/cajons-service';
import { CajonsServiceProvider } from './components/cajons-service-context';
import store from './store';

const firebaseConfig = {
  apiKey: "AIzaSyBpvzWIJJqVg1L0sjsCygys1b8_rmY_klo",
  authDomain: "cajons-store.firebaseapp.com",
  databaseURL: "https://cajons-store.firebaseio.com",
  projectId: "cajons-store",
  storageBucket: "cajons-store.appspot.com",
  messagingSenderId: "302644362004",
  appId: "1:302644362004:web:dfc748bc578fd266606001",
  measurementId: "G-QXQQJHFGV9"
};

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