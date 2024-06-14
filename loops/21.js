/**
 * Calculates the total engagement (likes, comments, shares) for each post.
 *
 * @param {number[][]} posts - The array of posts, each represented by an array [likes, comments, shares].
 * @returns {number[]} - The array of total engagements for each post.
 *
 * @example
 * // returns [15, 30]
 * calculateEngagement([[5, 5, 5], [10, 10, 10]]);
 */
export function calculateEngagement(posts) {
  // TODO: Initialize a new array to hold the total engagement for each post.
  // TODO: Use a for loop to iterate over the posts array.
  // TODO: For each post, calculate the total engagement by summing likes, comments, and shares.
  // TODO: Add the total engagement to the new array.
  // TODO: Return the new array.

  const postEngagements = Array()
  // for of loop - just understood what this means :)
  for (let post of posts) {
    let sumActivity = 0
    for (let postActivity of post) {
      sumActivity += postActivity
    }
    postEngagements.push(sumActivity)
  }
  return postEngagements
}

/**
 * Using a helper function for the nested Array
 * 
  const postEngagements = Array()

  for (let postIndx = 0; postIndx < posts.length; postIndx++) {
    postEngagements.push(addActivity(posts[postIndx]))
  }

  return postEngagements
}

export function addActivity(engagements) {
  // Sum all post activity and engagements, expects an array as a parameter, returns a number. 
  let sum = 0
  for (let item = 0; item < engagements.length; item++) {
    sum += engagements[item]
  }
  return sum
}
*/
