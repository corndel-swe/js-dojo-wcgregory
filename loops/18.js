/**
 * Filters out products that are more expensive than a given price.
 *
 * @param {number[]} prices - The array of product prices.
 * @param {number} maxPrice - The maximum price to include.
 * @returns {number[]} - The array of prices less than or equal to the maximum price.
 *
 * @example
 * // returns [50, 100]
 * filterExpensiveProducts([50, 150, 100, 200], 100);
 */
export function filterExpensiveProducts(prices, maxPrice) {
  // TODO: Initialize a new array to hold the filtered prices.
  // TODO: Use a for loop to iterate over the prices array.
  // TODO: For each price, check if it is less than or equal to the maxPrice.
  // TODO: If it is, add it to the new array.
  // TODO: Return the new array.
  const filteredPrices = Array()

  for (let indx = 0; indx < prices.length; indx++) {
    if (prices[indx] <= maxPrice) {
      filteredPrices.push(prices[indx])
    }
  }

  return filteredPrices
}
