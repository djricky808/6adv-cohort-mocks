// # Mock Interview 2

// # Power of Three
// # Determine if a given integer is a power of three using recursion.
// # Example:
// # Input: 27
// # Output: True
// # Input: 10
// # Output: False

function powerOfThree(number: number): boolean {
  let toPositive = Math.sqrt(Math.pow(number, 2));
  function checkForThirdPower(number: number): boolean {
    if (number < 3 && number !== 1) {
      return false;
    }
    if (number === 3 || number === 1) {
      return true;
    }
    return powerOfThree(number / 3);
  }
  return checkForThirdPower(toPositive);
}

//console.log(powerOfThree(-27));

// # (Medium) Combination Sum
// # Given an array of unique integers and a target sum, return all unique combinations where numbers sum to the target.
// # Numbers can be used multiple times.
// # Example:
// # Input: candidates = [2,3,6,7], target = 7
// # Output: [[2,2,3], [7]]
// # Input: candidates = [2,3,5], target = 8
// # Output: [[2,2,2,2], [2,3,3], [3,5]]

function combinationSum(numbers: number[], target: number): number[][] {
  let solutions: number[][] = [];
  let index = 0;
  function recursiveCombination(
    numbers: number[],
    index: number,
    set: number[]
  ) {
    console.log("set", set);

    if (set.length !== 0 && set.reduce((a, b) => a + b) === target) {
      solutions.push(set);
    }
    if (set.length !== 0 && set.reduce((a, b) => a + b) < target) {
      recursiveCombination(numbers, index, [...set, numbers[index]]);
    }
    for (let i = index; i < numbers.length; i++) {
      console.log("index, i", index, i);
      recursiveCombination(numbers, index + 1, [...set, numbers[index]]);
    }
  }
  recursiveCombination(numbers, 0, []);
  return solutions;
}
console.log(combinationSum([2, 3, 6, 7], 7));
