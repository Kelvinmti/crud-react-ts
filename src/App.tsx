import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import UserList from './components/UserList';
import { AppProps, LinkStateProps, ListDispatchProps } from './interfaces';
import { startDeleteUser } from './store/user/actions';
import { User, UserState } from './store/user/types';
import { ClickHandlerParam } from './types';

interface Props {};


export const App: React.FC<Props> = () => {
  const usuarios = useSelector((state: UserState) => state.users);

  const dispatch = useDispatch();

  const handleDelete = (hEvent: ClickHandlerParam, user: User): void => {
    dispatch(startDeleteUser(user));
  };  

  return (
    <div className="App">
      <a href="/novo-usuario">Novo Usuário</a>
      <br />
      <UserList users={usuarios} deleteHandler={handleDelete} />
    </div>
  );
}

export default App;
