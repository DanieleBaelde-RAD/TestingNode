function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

function calculateDaysBetweenDates(begin: Date, end: Date): number {
  return Math.round((end.getTime() - begin.getTime()) / (1000 * 60 * 60 * 24));
}

export { addTwoNumbers, calculateDaysBetweenDates };
