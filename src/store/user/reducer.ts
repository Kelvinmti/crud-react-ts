import {
  START_ADD_USER,
  SUCCESS_ADD_USER,
  FAIL_ADD_USER,
  START_DELETE_USER,
  SUCCESS_DELETE_USER,
  FAIL_DELETE_USER,
  UserState,
  UserActionsTypes
} from "./types";

const seedUser = [
  {
    id: "1",
    nome: "Kelvin",
    email: "wefwef@teste.com",
    senha: "1323",
    confirmaSenha: "1323",
    dataNascimento: "05/01/1991",
    tipoUsuario: "Colaborador"    
  }
];

const initialState: UserState = {
  users: seedUser,
  loading: false,
  error: false
};

export function userReducer(
  state: UserState = initialState,
  action: UserActionsTypes
): UserState {
  switch (action.type) {
    case START_ADD_USER: 
        return { ...state, loading: true };

    case SUCCESS_ADD_USER: {
      console.log('success', action.payload);
      return { ...state, users: [...state.users, action.payload] };
    }

    case FAIL_ADD_USER:
      return { ...state, loading: false, error: true };

    case START_DELETE_USER:
      return { ...state, loading: true };

    case SUCCESS_DELETE_USER:
      let newState = [...state.users];

      newState = newState.filter(user => user.id !== action.payload.id);

      return { ...state, users: [...newState] };

    case FAIL_DELETE_USER:
      return { ...state, loading: false, error: true };

    default:
      return { ...state };
  }
}
