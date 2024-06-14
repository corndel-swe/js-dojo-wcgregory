/**
 * Increase each product price by 10% on an e-commerce store.
 * @param {number[]} prices - The array of product prices.
 * @returns {number[]} The new array of prices increased by 10%.
 * @example
 * increasePrices([100, 200, 300]); // returns [110, 220, 330]
 */
export function increasePrices(prices) {
  // TODO: Use the map() method to increase each price by 10%
  // TODO: Return the new array of increased prices
  // const newPrice = prices.map(price => price + 0.1 * price)
  // return newPrice
  return prices.map(price => price + 0.1 * price)
}
