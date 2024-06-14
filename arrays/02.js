/**
 * Calculate the total cost of the last two items in the array.
 * @param {number[]} prices - The array of prices.
 * @returns {number} The sum of the last and second-last price.
 * @example
 * endSum([12.99, 23.45, 34.50, 45.99, 56.75]); // returns 102.74
 */
export function endSum(prices) {
  // TODO: Get the last element from the array
  // TODO: Get the second-last element from the array
  // TODO: Return the sum of the last and second-last elements
  // const lastElement = prices[prices.length -1]
  // const penultElement = prices[prices.length -2]
  return prices[prices.length -1] + prices[prices.length -2]
}
