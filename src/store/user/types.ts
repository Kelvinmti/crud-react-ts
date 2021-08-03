export const ADD_USER = "ADD_USER";
export const START_ADD_USER = "START_ADD_USER";
export const SUCCESS_ADD_USER = "SUCCESS_ADD_USER";
export const FAIL_ADD_USER = "FAIL_ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const START_DELETE_USER = "START_DELETE_USER";
export const SUCCESS_DELETE_USER = "SUCCESS_DELETE_USER";
export const FAIL_DELETE_USER = "FAIL_DELETE_USER";

export enum TipoUsuario {
  Administrador = 'Administrador',
  Colaborador = 'Colaborador',
  Gerente = 'Gerente'
}

export interface User {
  id: string;
  nome: string;
  email: string;
  senha: string;
  confirmaSenha: string;
  dataNascimento: string;
  tipoUsuario: string;
}

export interface AddUserAction {
  type: string;
  payload: User;
  subtypes?: string[];//ARRAY DE ACTIONS
}

interface DeleteUserAction {
  type: string;
  payload: User;
  subtypes?: string[];//ARRAY DE ACTIONS
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: boolean;
}

export type UserActionsTypes = AddUserAction | DeleteUserAction;
