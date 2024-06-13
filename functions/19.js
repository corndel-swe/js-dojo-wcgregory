/**
 * Calculates the total pay including overtime pay.
 * @param {number} hoursWorked - The total hours worked in a week.
 * @param {number} hourlyRate - The regular hourly rate.
 * @returns {number} The total pay including overtime.
 *
 * Example: totalPay(45, 20) should return 950.
 */
export function totalPay(hoursWorked, hourlyRate) {
  // TODO: Calculate regular pay for up to 40 hours
  // TODO: Calculate overtime pay for hours above 40 at 1.5 times the regular rate
  // TODO: Return the total pay
  if (hoursWorked > 40) {
    const regPay = 40 * hourlyRate
    return regPay + (hoursWorked - 40) * (hourlyRate * 1.5)
  } else {
    return hoursWorked * hourlyRate
  }
}
