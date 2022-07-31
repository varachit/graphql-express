"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorService_1 = require("../../service/authorService");
const resolver = {
    Query: {
        author: (_, params) => {
            return (0, authorService_1.doGetAuthor)(params) || null;
        },
        authors: () => {
            return (0, authorService_1.doGetAuthors)();
        }
    },
    Mutation: {
        createAuthor(_, params) {
            return (0, authorService_1.doCreateAuthor)(params);
        },
        updateAuthor(_, params) {
            return (0, authorService_1.doUpdateAuthor)(params);
        }
    }
};
exports.default = resolver;
//# sourceMappingURL=author.js.map