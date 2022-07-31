"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doGetBooks = exports.doGetBook = void 0;
const tslib_1 = require("tslib");
const databaseService = tslib_1.__importStar(require("../service/databaseService"));
const lodash_1 = require("lodash");
function doGetBook(params) {
    const books = databaseService.getBooks();
    return (0, lodash_1.find)(books, { id: params.id });
}
exports.doGetBook = doGetBook;
function doGetBooks(params) {
    const books = databaseService.getBooks();
    return (0, lodash_1.filter)(books, { id: params.id });
}
exports.doGetBooks = doGetBooks;
//# sourceMappingURL=bookService.js.map