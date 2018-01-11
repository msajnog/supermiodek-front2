export interface User {
  name: string;
  password: string;
}

export interface AuthState {
  authenticated: boolean;
  token: string;
}
