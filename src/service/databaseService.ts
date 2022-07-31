import { IUser, IUserToken } from '../interface/user';
import { IBook } from '../interface/book';
import { IAuthor } from '../interface/author';

const users: IUser[] = [
  { 'id': 'bb19d486-30b9-4c97-b2de-7afca826e391', 'username': 'varachit223', 'firstName': 'Varachit', 'lastName': 'Wirunpat', 'role': 'ADMIN', 'banned': false },
  { 'id': '04dcf813-37ce-4cf8-ab0c-1c83a203ec5d', 'username': 'picard', 'firstName': 'Jean Luc', 'lastName': 'Picard', 'role': 'USER', 'banned': false },
];

const tokens: IUserToken[] = [
  { 'userId': 'bb19d486-30b9-4c97-b2de-7afca826e391', 'token': 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJ2YXJhY2hpdCIsIlVzZXJuYW1lIjoidmFyYWNoaXQyMjMiLCJleHAiOjE3NTM4OTU3ODksImlhdCI6MTY1OTIwMTM4OX0.P8fDPSpsi_D8cTMXA_qOfj6IZtjGV5NvuSQCy61_6oU' },
  { 'userId': 'bb19d486-30b9-4c97-b2de-7afca826e391', 'token': 'Varachit' },
  { 'userId': '04dcf813-37ce-4cf8-ab0c-1c83a203ec5d', 'token': 'Picard' }
];

const books: IBook[] = [
  { 'id': '1', 'title': 'The Awakening', 'authorId': 'b314016a-adec-443e-bbf4-fbbebb14030f' },
  { 'id': '2', 'title': 'Paul Auster', 'authorId': 'ff30bdad-7d3e-44b5-87d1-3180dad99d5e' },
  { 'id': '3', 'title': 'Star Trek: Picard: The Last Best Hope', 'authorId': '2acdeaea-5ba1-493f-91b1-bcc58716af08' }
];

const authors: IAuthor[] = [
  { 'id': 'b314016a-adec-443e-bbf4-fbbebb14030f', 'firstName': 'Kate', 'lastName': 'Chopin', 'age': 53, 'email': 'bkoloski@katechopin.org' },
  { 'id': 'ff30bdad-7d3e-44b5-87d1-3180dad99d5e', 'firstName': 'Paul', 'lastName': 'Auster', 'age': 75, 'email': 'marjorieauster@gmail.com' },
  { 'id': '2acdeaea-5ba1-493f-91b1-bcc58716af08', 'firstName': 'Una', 'lastName': 'McCormack', 'age': 50, 'email': 'umm10@yahoo.co.uk' }
];

export function getUsers (): IUser[] {
  return users;
}

export function getUsersToken (): IUserToken[] {
  return tokens;
}

export function getUserAttribute (accessToken: string): IUser | undefined | null {
  const accessTokenToFind: string = (accessToken.includes('Bearer')) ? accessToken.replace('Bearer ', '') : accessToken;
  const userTokenAttribute = tokens.find(token => token.token === accessTokenToFind) || undefined;
  const user = (userTokenAttribute) ? users.find(user => user.id === userTokenAttribute.userId) : undefined;
  return user;
}

export function getBooks (): IBook[] {
  return books;
}

export function getBookSequence (): string {
  const bookIds = books.map(book => parseInt(book.id));
  const bookSequence = Math.max(...bookIds) + 1;
  return String(bookSequence);
}

export function createBook (bookToCreate: IBook): IBook {
  books.push(bookToCreate);
  return bookToCreate;
}

export function updateBook (bookToUpdate: IBook): IBook {
  const targetIndex = books.findIndex(book => book.id === bookToUpdate.id);
  books[targetIndex] = bookToUpdate;
  return bookToUpdate;
}

export function deleteBook (bookToDelete: IBook): IBook {
  const targetIndex = books.findIndex(book => book.id === bookToDelete.id);
  books.splice(targetIndex, 1);
  return bookToDelete;
}

export function getAuthors (): IAuthor[] {
  return authors;
}

export function createAuthor (authorToCreate: IAuthor): IAuthor {
  authors.push(authorToCreate);
  return authorToCreate;
}

export function updateAuthor (authorToUpdate: IAuthor): IAuthor {
  const targetIndex = authors.findIndex(author => author.id === authorToUpdate.id);
  authors[targetIndex] = authorToUpdate;
  return authorToUpdate;
}

export function deleteAuthor (authorToDelete: IAuthor): IAuthor {
  const targetIndex = authors.findIndex(author => author.id === authorToDelete.id);
  authors.splice(targetIndex, 1);
  return authorToDelete;
}
