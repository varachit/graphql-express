
export interface IUser {
  id: string,
  username: string,
  firstName: string,
  lastName: string,
  role: string,
  banned: boolean
}

export interface IUserToken {
  userId: string,
  token: string
}

export interface IReadUserParams {
  id: string
}

export interface IReadUsersParams {
  id: string[]
}

