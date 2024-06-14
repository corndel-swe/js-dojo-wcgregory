/**
 * Return the smallest age from an array of two ages.
 * The input array will always have exactly two numbers.
 * @param {number[]} ages - The array of two ages.
 * @returns {number} The smallest age.
 * @example
 * findYoungestAge([29, 31]); // returns 29
 */
export function findYoungestAge(ages) {
  // TODO: Return the smallest age
  if (ages[0] < ages[1]) return ages[0]
  return ages[1]
}
