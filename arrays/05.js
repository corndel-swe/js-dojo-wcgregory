/**
 * Return an array containing only the first and the last name from the array.
 * @param {string[]} names - The array of names.
 * @returns {string[]} An array containing the first and last names.
 * @example
 * firstAndLastName(['Alice', 'Bob', 'Charlie', 'David', 'Eve']); // returns ['Alice', 'Eve']
 */
export function firstAndLastName(names) {
  // TODO: Get the first element from the array
  // TODO: Get the last element from the array
  // TODO: Return an array containing the first and last elements
  // const newArray = Array()
  // newArray.push(names[names.length -1])
  // newArray.unshift(names[0])
  const newArray = [names[0], names[names.length -1]]
  return newArray
}
