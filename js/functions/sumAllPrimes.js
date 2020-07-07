// returns the sum of all prime numbers that are less than or equal to num.

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(num) {
  let sum = 0;

  for (let i = 2; i <= num; i++) {
    isPrime(i) ? sum += i : '';
  }

  return sum;
}

sumPrimes(10);
sumPrimes(977);
