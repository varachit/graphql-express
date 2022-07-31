"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMap = void 0;
function toMap(array, key) {
    const map = {};
    array.forEach(element => {
        map[element[key]] = element;
    });
    return map;
}
exports.toMap = toMap;
//# sourceMappingURL=array.js.map