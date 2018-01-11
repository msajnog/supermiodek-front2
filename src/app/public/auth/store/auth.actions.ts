import { AuthState, User } from '../auth.interface';

export const SIGN_IN = 'SIGN_IN';
export const SET_AUTH = 'SET_AUTH';

export class SignIn {
  readonly type = SIGN_IN;

  constructor (public payload: User) {}
}

export class SetAuth {
  readonly type = SET_AUTH;

  constructor (public payload: AuthState) {}
}

export type AuthActions = SignIn | SetAuth;
