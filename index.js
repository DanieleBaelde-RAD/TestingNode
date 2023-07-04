"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDaysBetweenDates = exports.addTwoNumbers = void 0;
function addTwoNumbers(a, b) {
    return a + b;
}
exports.addTwoNumbers = addTwoNumbers;
function calculateDaysBetweenDates(begin, end) {
    return Math.round((end.getTime() - begin.getTime()) / (1000 * 60 * 60 * 24));
}
exports.calculateDaysBetweenDates = calculateDaysBetweenDates;
