/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
*/

function sumFibs(num) {
  let result = 0;
  let fibonacci = [];

  for (let n = 0, nextFibonacciNum = 0; nextFibonacciNum <= num; n++) {

    if (nextFibonacciNum % 2 !== 0) {
      result += nextFibonacciNum;
    }

    switch(n) {
      case 0:
        fibonacci.push(0);
        break;
      case 1:
      case 2:
        fibonacci.push(1);
        nextFibonacciNum = 1;
        break;
      default:
        nextFibonacciNum = fibonacci[n-1] + fibonacci[n-2];
        fibonacci.push(nextFibonacciNum);
    }
  }
  
  return result;
}

sumFibs(4);
sumFibs(7);
sumFibs(1000);
sumFibs(75024);
