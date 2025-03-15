// # Mock Interview 1

// # Two Sum II - Input array is sorted
// # Given a sorted array of integers and a target sum,
// # return the indices (1-based) of the two numbers that add up to the target using the two-pointer technique.
// # Example:
// # Input: numbers = [2, 7, 11, 15], target = 9
// # Output: [1, 2]  (2 + 7 = 9)
// # Input: numbers = [1, 3, 4, 5, 7], target = 8
// # Output: [2, 4]

// function twoSum(numbers: number[], target: number): number[] | null | void {
//   let left: number = 0;
//   let right: number = numbers.length - 1;
//   function findTwoSum(
//     numbers: number[],
//     left: number,
//     right: number,
//     target: number
//   ): number[] | null | void {
//     console.log(
//       "indices L/R:",
//       left,
//       right,
//       "numbers:",
//       numbers[left],
//       numbers[right]
//     );
//     if (left > right || numbers.length < 2) {
//       return null;
//     }
//     if (numbers[left] + numbers[right] === target) {
//       console.log("The numbers match the target!");
//       return [left + 1, right + 1];
//     }
//     if (numbers[left] + numbers[right] > target) {
//       return findTwoSum(numbers, left, right - 1, target);
//     }
//     if (numbers[left] + numbers[right] < target) {
//       return findTwoSum(numbers, left + 1, right, target);
//     }
//   }
//   return findTwoSum(numbers, left, right, target);
// }

//Using an iterative approach

function twoSum(numbers: number[], target: number): number[] | null {
  if (numbers.length <= 1) {
    return null;
  }
  let right = numbers.length - 1;
  let left = 0;
  while (left < right) {
    console.log(numbers[left], numbers[right]);
    if (numbers[left] + numbers[right] === target) {
      console.log("Target reached");
      return [left + 1, right + 1];
    } else if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      left++;
    }
  }
  return null;
}

console.log(twoSum([2, 7, 8, 10], 9));

// # Longest Substring Without Repeating Characters
// # Given a string, find the length of the longest substring without repeating characters using the sliding window technique.
// # Example:
// # Input: "abcabcbb"
// # Output: 3  ("abc")
// # Input: "bbbbb"
// # Output: 1  ("b")

function longestSubstring(string: string): number {
  if (string.length <= 1) {
    return string.length;
  }
  let characters: Set<string> = new Set();
  let left = 0;
  let right = 0;
  let maxLength = 0;
  function findLongestString(
    string: string,
    left: number,
    right: number,
    maxLength: number
  ): number {
    console.log("Left,right:", left, right);
    if (right === string.length - 1) {
      return maxLength;
    }
    while (characters.has(string[right])) {
      characters.delete(string[right]);
      left++;
    }
    characters.add(string[right]);
    right++;
    return findLongestString(
      string,
      left,
      right,
      Math.max(right - left, maxLength)
    );
  }
  return findLongestString(string, left, right, maxLength);
}
console.log(longestSubstring(""));
