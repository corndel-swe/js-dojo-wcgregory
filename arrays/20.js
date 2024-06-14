/**
 * Filter out numbers that are not multiples of 3 from an array of numbers.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number[]} The new array containing only multiples of 3.
 * @example
 * filterMultiplesOfThree([10, 15, 20, 30, 33]); // returns [15, 30, 33]
 */
export function filterMultiplesOfThree(numbers) {
  // TODO: Use the filter() method to get numbers that are multiples of 3
  // TODO: Return the new array of filtered numbers
  return numbers.filter(multipleOfThree => multipleOfThree % 3 === 0)
}
