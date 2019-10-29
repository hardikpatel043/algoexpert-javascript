// O(2^n) time | O(n) space
function getNthFib(n) {
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    return getNthFib(n - 1) + getNthFib(n - 2);
  }
}

// O(n) time | O(n) space
function getNthFib(n, memoize = { 1: 0, 2: 1 }) {
  if (n in memoize) {
    return memoize[n];
  } else {
    memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
    return memoize[n];
  }
}

// O(n) time | O(1) space
function getNthFib(n) {
  const lastTwoFib = [0, 1];
  let counter = 3;
  while (n >= counter) {
    const nextFib = lastTwoFib[0] + lastTwoFib[1];
    lastTwoFib[0] = lastTwoFib[1];
    lastTwoFib[1] = nextFib;
    counter++;
  }

  return n === 1 ? lastTwoFib[0] : lastTwoFib[1];
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
