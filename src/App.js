import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Auth from './auth/auth-container';
import Dashboard from './containers/dashboard';
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
