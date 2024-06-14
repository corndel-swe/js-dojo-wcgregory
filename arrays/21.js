/**
 * Add a new product price, remove prices above 100, and double the remaining prices.
 * @param {number[]} prices - The array of product prices.
 * @param {number} newPrice - The new product price to add.
 * @returns {number[]} The new array of modified prices.
 * @example
 * updatePrices([30, 120, 50, 200], 45); // returns [60, 90]
 */
export function updatePrices(prices, newPrice) {
  // TODO: Use the push() method to add the new price to the array
  // TODO: Use the filter() method to keep prices 100 or below
  // TODO: Use the map() method to double each remaining price
  // TODO: Return the new array of modified prices
  prices.push(newPrice)
  return prices
    .filter(newPrices => newPrices <= 100)
    .map(newPrices => newPrices * 2)
}

const whatis = updatePrices([30, 120, 50, 200], 45)
console.log(whatis)
