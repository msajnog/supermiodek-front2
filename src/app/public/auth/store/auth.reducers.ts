import { appInitialState } from '../../../store/store-init-state';
import * as AuthActions from './auth.actions';


export function authReducer(state = appInitialState.auth, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.SET_AUTH: {
      return {
        ...state,
        authenticated: action.payload.authenticated,
        token: action.payload.token,
        expires: action.payload.expires
      };
    }
    default: {
      return state;
    }
  }
}
