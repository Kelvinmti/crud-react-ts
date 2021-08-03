import { User } from "./store/user/types";

export interface AppProps {}

export interface ListDispatchProps {
  startDeleteUser: (user: User) => void;
}

export interface InsertDispatchProps {
  startAddUser: (user: User) => void;
}

export interface LinkStateProps {
  users: User[];
}

export interface AppState {
  [key: string]: string;
}
