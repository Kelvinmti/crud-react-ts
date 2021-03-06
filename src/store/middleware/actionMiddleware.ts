import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from "redux";

const actionMiddleWare: Middleware = ({
  dispatch,
  getState
}: MiddlewareAPI) => (next: Dispatch) => async (action: AnyAction) => {
  if (action.type.includes("ADD_USER")) {
    const [START_ADD_USER, SUCCESS_ADD_USER, FAIL_ADD_USER] = action.subtypes;

    next({ ...action, type: START_ADD_USER });

    try {
        return next({ ...action, type: SUCCESS_ADD_USER });
    } catch (error) {
      return next({ ...action, type: FAIL_ADD_USER });
    }
  } else if (action.type.includes("DELETE_USER")) {
    const [
      START_DELETE_USER,
      SUCCESS_DELETE_USER,
      FAIL_DELETE_USER
    ] = action.subtypes;

    next({ ...action, type: START_DELETE_USER });

    try {
      if (true) {
        return next({ ...action, type: SUCCESS_DELETE_USER });
      }
    } catch (error) {
      return next({ ...action, type: FAIL_DELETE_USER });
    }
  }

  return next(action);
};

export default actionMiddleWare;
