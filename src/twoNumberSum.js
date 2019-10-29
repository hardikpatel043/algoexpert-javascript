// O(n^2) time | O(1) space
function twoNumberSum(array, targetSum) {
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      const potentialSum = array[i] + array[j];
      if (i != j && potentialSum === targetSum) {
        return [array[j], array[i]].sort((a, b) => a - b);
      }
    }
  }

  return [];
}

// O(n) time | O(n) space
function twoNumberSum(array, targetSum) {
  const numbers = {};
  for (var i = 0; i < array.length; i++) {
    const numberToSearch = targetSum - array[i];
    if (numberToSearch in numbers) {
      return [numberToSearch, array[i]].sort((a, b) => a - b);
    } else {
      numbers[array[i]] = true;
    }
  }

  return [];
}

// O(nlog(n)) time | O(1) space
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const currentSum = array[left] + array[right];

    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum > targetSum) {
      right--;
    } else {
      left++;
    }
  }

  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
