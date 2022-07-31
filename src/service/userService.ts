import { IUser, IReadUserParams, IReadUsersParams } from '../interface/user';
import * as databaseService from '../service/databaseService';

export function doGetUser (params: IReadUserParams): IUser | null | undefined {
  const users = databaseService.getUsers();
  return users.find(user => user.id === params.id);
}

export function doGetUsers (params: IReadUsersParams): IUser[] {
  const users = databaseService.getUsers();
  return (params && params.id) ? users.filter(user => params.id.includes(user.id)) : users;
}

export function authenticate (token: string): IUser | null | undefined {
  return databaseService.getUserAttribute(token) || undefined;
}

export function isTokenValid (token?: string): boolean {
  const user = (token) ? authenticate(token) : undefined;
  return (user) ? true : false;
}
