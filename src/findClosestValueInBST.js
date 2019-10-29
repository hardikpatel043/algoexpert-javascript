// O(log(n)) time | O(1) space
function findClosestValueInBst(tree, target) {
  let currentNode = tree;
  let closest = Infinity;
  while (currentNode != null) {
    if (Math.abs(currentNode.value - target) < Math.abs(closest - target)) {
      closest = currentNode.value;
    }

    if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else {
      break;
    }
  }
  return closest;
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
