import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NovoUsuario from '../pages/NovoUsuario/index2';
import App from '../App2';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/novo-usuario" component={NovoUsuario} />
    </Switch>
  );
}