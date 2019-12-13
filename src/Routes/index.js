import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './routes';
import Dashboard from '~pages/Dashbord';
import SignUp from '~pages/SignUp';
import SignIn from '~pages/SignIn';
import Profile from '~pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/dashboard" isPrivate component={Dashboard} />
      <Route path="/register" component={SignUp} />
      <Route path="/profile" isPrivate component={Profile} />
      <Route path="/" exact component={SignIn} />
    </Switch>
  );
}
