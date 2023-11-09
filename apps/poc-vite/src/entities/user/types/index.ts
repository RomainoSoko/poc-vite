export interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
  address: string;
  phone: string;
  website: string;
  company: string;
}

export type UserQueryType = { user: UserType };
export type UsersQueryType = { users: UserType[] };
