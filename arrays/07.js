/**
 * Return a new array containing temperatures for the weekdays only (first 5 days).
 * @param {number[]} temps - The array of temperatures.
 * @returns {number[]} An array of temperatures for the weekdays.
 * @example
 * extractWeekdays([15, 16, 18, 20, 21, 19, 17]); // returns [15, 16, 18, 20, 21]
 */
export function extractWeekdays(temps) {
  // TODO: Use the slice() method to get the first 5 elements of the array
  // TODO: Return the new array containing only the weekdays
  const temperatures = temps.slice(0, 5)
  return temperatures
}
