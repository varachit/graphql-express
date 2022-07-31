import { v4 as uuidv4 } from 'uuid';
import {
  IAuthor,
  IReadAuthorParams,
  IReadAuthorsParams,
  ICreateAuthorParams,
  IDeleteAuthorParams
} from '../interface/author';
import * as databaseService from '../service/databaseService';

export function doGetAuthor (params: IReadAuthorParams): IAuthor | null | undefined {
  const authors = databaseService.getAuthors();
  return authors.find(author => author.id === params.id);
}

export function doGetAuthors (params?: IReadAuthorsParams): IAuthor[] {
  const authors = databaseService.getAuthors();
  return (params && params.id) ? authors.filter(author => params.id.includes(author.id)) : authors;
}

export function doCreateAuthor (params: ICreateAuthorParams): IAuthor {
  const author: IAuthor = {
    id: uuidv4(),
    firstName: params.firstName,
    lastName: params.lastName,
    age: params.age,
    email: params.email
  };
  return databaseService.createAuthor(author);
}

export function doUpdateAuthor (params: IAuthor): IAuthor {
  const authorToUpdate: IAuthor | undefined | null = doGetAuthor({ id: params.id });

  const author: IAuthor = {
    id: params.id,
    firstName: params.firstName,
    lastName: params.lastName,
    age: params.age,
    email: params.email
  };

  if (!authorToUpdate) {
    throw new Error(`Author ${params.id} does not exist`);
  }
  return databaseService.updateAuthor(author);
}

export function doDeleteAuthor (params: IDeleteAuthorParams): IAuthor {
  const authorToDelete: IAuthor | undefined | null = doGetAuthor({ id: params.id });

  if (!authorToDelete) {
    throw new Error(`Author ${params.id} does not exist`);
  }
  return databaseService.deleteAuthor(authorToDelete);
}
