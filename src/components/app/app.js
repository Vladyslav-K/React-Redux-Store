import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage, ShopPage } from '../pages';
import Header from '../header';

import './app.css';

const App = () => {
  return (
    <main role="main" className="container" >
      <Header />
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact />

        <Route
          path="/cart"
          component={CartPage}
        />

        <Route
          path="/shop"
          component={ShopPage}
        />
      </Switch>
    </main >
  );
};

export default App;