/**
 * Calculates the total inventory value from arrays of quantities and prices.
 *
 * @param {number[]} quantities - The array of product quantities.
 * @param {number[]} prices - The array of product prices.
 * @returns {number} - The total inventory value.
 *
 * @example
 * // returns 650
 * calculateInventoryValue([10, 5, 2], [20, 50, 100]);
 */
export function calculateInventoryValue(quantities, prices) {
  // TODO: Initialize a variable to hold the total inventory value.
  // TODO: Use a for loop to iterate over the quantities array.
  // TODO: Multiply each quantity by the corresponding price and add it to the total value.
  // TODO: Return the total inventory value.
  let inventoryValue = 0

  for (let indx = 0; indx < quantities.length; indx++) {
    inventoryValue += multiplyBy(quantities[indx], prices[indx])
    }

  return inventoryValue
}

export function multiplyBy(quantity, price) {
  // Simple multiplier function, multiplies an items quantity by it's price
  return quantity * price
}
