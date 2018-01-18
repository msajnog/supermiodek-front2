export const CHECK_TOKEN = 'CHECK_TOKEN';

export class CheckToken {
  readonly type = CHECK_TOKEN;

  constructor (public payload) {}
}

export type AdminAppActions = CheckToken;
