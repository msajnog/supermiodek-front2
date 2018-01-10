export const SIGN_IN = 'SIGN_IN';

export class SignIn {
  readonly type = SIGN_IN;

  constructor (public payload) {}
}

export type AuthActions = SignIn;
