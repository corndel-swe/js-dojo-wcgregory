/**
 * Get the last two names from the array.
 * @param {string[]} names - The array of names.
 * @returns {string[]} An array containing the last two names.
 * @example
 * getLastTwoNames(['Alice', 'Bob', 'Charlie', 'David', 'Eve']); // returns ['David', 'Eve']
 */
export function getLastTwoNames(names) {
  // TODO: Use the slice() method to get the last two elements of the array
  // TODO: Return the new array containing the last two names
  const lastTwoNames = names.slice(names.length - 2, names.length)
  return lastTwoNames
}
