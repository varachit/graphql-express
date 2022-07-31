"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAuthor = exports.createAuthor = exports.getAuthors = exports.getBooks = void 0;
const books = [
    { 'id': '1', 'title': 'The Awakening', 'authorId': 'b314016a-adec-443e-bbf4-fbbebb14030f' },
    { 'id': '2', 'title': 'Paul Auster', 'authorId': 'ff30bdad-7d3e-44b5-87d1-3180dad99d5e' },
    { 'id': '3', 'title': 'Star Trek: Picard: The Last Best Hope', 'authorId': '2acdeaea-5ba1-493f-91b1-bcc58716af08' }
];
const authors = [
    { 'id': 'b314016a-adec-443e-bbf4-fbbebb14030f', 'firstName': 'Kate', 'lastName': 'Chopin', 'age': 53, 'email': 'kate_chopin@book.com' },
    { 'id': 'ff30bdad-7d3e-44b5-87d1-3180dad99d5e', 'firstName': 'Paul', 'lastName': 'Auster', 'age': 75, 'email': 'paul_auster@book.com' },
    { 'id': '2acdeaea-5ba1-493f-91b1-bcc58716af08', 'firstName': 'Una', 'lastName': 'McCormack', 'age': 50, 'email': 'umm10@yahoo.co.uk' }
];
function getBooks() {
    return books;
}
exports.getBooks = getBooks;
function getAuthors() {
    return authors;
}
exports.getAuthors = getAuthors;
function createAuthor(author) {
    authors.push(author);
    return author;
}
exports.createAuthor = createAuthor;
function updateAuthor(author) {
    const targetIndex = authors.findIndex(author => author.id === author.id);
    authors[targetIndex] = author;
    return author;
}
exports.updateAuthor = updateAuthor;
//# sourceMappingURL=databaseService.js.map