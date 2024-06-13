/**
 * Determines if a given day is a weekday or weekend.
 * @param {string} day - The day of the week.
 * @returns {string} 'Weekday' if the day is Monday to Friday, 'Weekend' if the day is Saturday or Sunday.
 *
 * Example: dayType('Saturday') should return 'Weekend'.
 */
export function dayType(day) {
  // TODO: Return 'Weekday' for Monday to Friday, and 'Weekend' for Saturday and Sunday
  const weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  
  for (let indx = 0; indx < weekDay.length; indx++) {
    if (day === weekDay[indx]) {
      return 'Weekday'
    }
  }

  return 'Weekend'
}
