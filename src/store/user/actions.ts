import {
  User,
  START_ADD_USER,
  SUCCESS_ADD_USER,
  FAIL_ADD_USER,
  START_DELETE_USER,
  SUCCESS_DELETE_USER,
  FAIL_DELETE_USER,
  UserActionsTypes,
  DELETE_USER,
  ADD_USER
} from "./types";
import { Dispatch } from "redux";
import { ReduxStoreState } from "../index";

// Actions
export const addUser = (user: User): UserActionsTypes => ({
  type: ADD_USER,
  payload: user,
  subtypes: [START_ADD_USER, SUCCESS_ADD_USER, FAIL_ADD_USER],
});

export const deleteUser = (user: User): UserActionsTypes => ({
  type: DELETE_USER,
  payload: user,
  subtypes: [START_DELETE_USER, SUCCESS_DELETE_USER, FAIL_DELETE_USER],
});

export const startAddUser = (user: User): UserActionsTypes => {
  console.log('chamou action');
  return addUser(user);
};

export const startDeleteUser = (user: User): UserActionsTypes => deleteUser(user);