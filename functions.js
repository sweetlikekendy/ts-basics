"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = exports.fetchData = exports.addStrings = void 0;
function addNumbers(a, b) {
    return a + b;
}
exports.default = addNumbers;
const addStrings = (str1, str2) => `${str1} ${str2}`;
exports.addStrings = addStrings;
const fetchData = (url) => Promise.resolve(`Data from ${url}`);
exports.fetchData = fetchData;
function getName(user) {
    var _a, _b;
    return `${(_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : "first"} ${(_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : "last"}`;
}
exports.getName = getName;
