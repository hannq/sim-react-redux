import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { store, Provider, rootActorsFactory } from './store';
import Home from './views/home';
import User from './views/user';
import 'antd/dist/antd.css';
import './style.css';

const App = () => (
  <Provider actorsFactory={rootActorsFactory} store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
)

render(<App />, document.getElementById('root'));
