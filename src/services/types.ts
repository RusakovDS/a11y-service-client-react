export interface User {
  firstName?: string;
  lastName?: string;
  id: number | null;
  email: string | null;
}

export interface UserState {
  user: User | null;
  token: string | null;
}
