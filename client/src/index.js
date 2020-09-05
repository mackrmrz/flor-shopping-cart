import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Router, Switch, Route } from 'react-router-dom';
import store from "./store";
import history from './history';
import Layout from './App';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <Layout>
          <Switch>

          </Switch>
        </Layout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

