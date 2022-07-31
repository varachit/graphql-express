"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bookService_1 = require("../../service/bookService");
const authorService_1 = require("../../service/authorService");
const resolver = {
    Query: {
        book: (_, { id }) => (0, bookService_1.doGetBook)({ id }) || null,
        books: (_, { id }) => (0, bookService_1.doGetBooks)({ id })
    },
    Book: {
        author: ({ authorId }) => {
            return (0, authorService_1.doGetAuthors)().find(author => author.id === authorId) || null;
        }
    }
};
exports.default = resolver;
//# sourceMappingURL=book.js.map