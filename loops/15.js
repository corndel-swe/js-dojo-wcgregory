/**
 * Reverses the order of elements in an array.
 *
 * @param {number[]} arr - The input array of numbers.
 * @returns {number[]} - The reversed array.
 *
 * @example
 * // returns [5, 4, 3, 2, 1]
 * reverseArray([1, 2, 3, 4, 5]);
 */
export function reverseArray(arr) {
  // TODO: Initialize a new array to hold the reversed elements.
  // TODO: Use a for loop to iterate over the elements of the array from the end to the beginning.
  // TODO: Add each element to the new array.
  // TODO: Return the new array.
  let reversedArray = Array()
  const numOfLoops = arr.length
  
  for (let indx = 0; indx < numOfLoops; indx++) {
    reversedArray.push(arr.pop())
  }

  return reversedArray
}
