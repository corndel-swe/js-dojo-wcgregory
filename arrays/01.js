/**
 * Calculate the total cost of the first two items in the array.
 * @param {number[]} prices - The array of prices.
 * @returns {number} The sum of the first and second price.
 * @example
 * startSum([12.99, 23.45, 34.50, 45.99, 56.75]); // returns 36.44
 */
export function startSum(prices) {
  // TODO: Get the first element from the array
  // TODO: Get the second element from the array
  // TODO: Return the sum of the first and second elements
  // const firstElement = prices[0]
  //const secondElement = prices[1]
  // return firstElement + secondElement
  return prices[0] + prices[1]
}

/**
 * less concise
  const elements = 2
  let sum = 0

  for (let indx = 0; indx < elements; indx++) {
    sum += prices[indx]
  }
  return sum
}
*/
