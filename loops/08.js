/**
 * Calculates the compound interest on a given principal over a number of periods.
 *
 * @param {number} principal - The initial amount of money.
 * @param {number} rate - The annual interest rate (as a decimal).
 * @param {number} periods - The number of periods the money is invested for.
 * @returns {number} - The amount of money accumulated after the given periods, including interest.
 *
 * @example
 * // returns 110.41
 * calculateCompoundInterest(100, 0.05, 2);
 */
export function calculateCompoundInterest(principal, rate, periods) {
  // TODO: Initialize a variable to hold the accumulated amount.
  // TODO: Use a for loop to iterate over the number of periods.
  // TODO: For each period, multiply the accumulated amount by (1 + rate).
  // TODO: Return the accumulated amount.
  let accAmount = principal

  for (let value = 0; value < periods; value++) {
    accAmount = accAmount * (1 + rate)
  }

  return accAmount
}
