
export interface IBook {
  id: string,
  title: string,
  authorId: string
}

export interface IReadBookParams {
  id: string
}

export interface IReadBooksParams {
  id: string[]
}

export interface ICreateBookParams {
  title: string,
  authorId: string
}

export interface IUpdateBookParams {
  id: string,
  title: string,
  authorId: string
}

export interface IDeleteBookParams {
  id: string
}
