export interface UserState {
  users?: User[];
  error: boolean;
}

export interface User {
  email: string
  id: number
  name: string
  phone: string
  username: string
  website: string
}