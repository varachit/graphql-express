
export interface IAuthor {
  id: string,
  firstName: string,
  lastName: string,
  age: number,
  email: string
}

export interface IReadAuthorParams {
  id: string
}

export interface IReadAuthorsParams {
  id: string[]
}

export interface ICreateAuthorParams {
  firstName: string,
  lastName: string,
  age: number,
  email: string
}

export interface IUpdateAuthorParams {
  id: string,
  firstName: string,
  lastName: string,
  age: number,
  email: string
}

export interface IDeleteAuthorParams {
  id: string
}
