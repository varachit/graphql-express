import {
  IBook,
  IReadBookParams,
  IReadBooksParams,
  ICreateBookParams,
  IUpdateBookParams,
  IDeleteBookParams
} from '../interface/book';
import * as databaseService from '../service/databaseService';

export function doGetBook (params: IReadBookParams): IBook | null | undefined {
  const books = databaseService.getBooks();
  return books.find(book => book.id === params.id);
}

export function doGetBooks (params: IReadBooksParams): IBook[] {
  const books = databaseService.getBooks();
  return (params && params.id) ? books.filter(book => params.id.includes(book.id)) : books;
}

export function doCreateBook (params: ICreateBookParams): IBook {
  const book: IBook = {
    id: databaseService.getBookSequence(),
    title: params.title,
    authorId: params.authorId
  };
  return databaseService.createBook(book);
}

export function doUpdateBook (params: IUpdateBookParams): IBook {
  const bookToUpdate: IBook | undefined | null = doGetBook({ id: params.id });

  const book: IBook = {
    id: params.id,
    title: params.title,
    authorId: params.authorId
  };

  if (!bookToUpdate) {
    throw new Error(`Book ${params.id} does not exist`);
  }
  return databaseService.updateBook(book);
}

export function doDeleteBook (params: IDeleteBookParams): IBook {
  const bookToDelete: IBook | undefined | null = doGetBook({ id: params.id });

  if (!bookToDelete) {
    throw new Error(`Book ${params.id} does not exist`);
  }
  return databaseService.deleteBook(bookToDelete);
}
