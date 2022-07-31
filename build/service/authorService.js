"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doUpdateAuthor = exports.doCreateAuthor = exports.doGetAuthors = exports.doGetAuthor = void 0;
const tslib_1 = require("tslib");
const uuid_1 = require("uuid");
const databaseService = tslib_1.__importStar(require("../service/databaseService"));
function doGetAuthor(params) {
    const authors = databaseService.getAuthors();
    return authors.find(author => author.id === params.id);
}
exports.doGetAuthor = doGetAuthor;
function doGetAuthors() {
    return databaseService.getAuthors();
}
exports.doGetAuthors = doGetAuthors;
function doCreateAuthor(params) {
    const author = {
        id: (0, uuid_1.v4)(),
        firstName: params.firstName,
        lastName: params.lastName,
        age: params.age,
        email: params.email
    };
    return databaseService.createAuthor(author);
}
exports.doCreateAuthor = doCreateAuthor;
function doUpdateAuthor(params) {
    const authorToUpdate = doGetAuthor({ id: params.id });
    const author = {
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
exports.doUpdateAuthor = doUpdateAuthor;
//# sourceMappingURL=authorService.js.map