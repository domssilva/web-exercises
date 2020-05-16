/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
*/

function isDivisible(dividend, divisor) {
  return (dividend % divisor === 0) ? true : false;
}

function smallestCommons(arr) {
  arr = arr.sort((num1, num2) => {
    return num1 - num2;
  });

  let sequence = [];
  
  for (let i = arr[0]; i <= arr[1]; i++) {
    sequence.push(i);
  }

  let result = null;
  let potential = sequence[sequence.length-1];

  while (result === null) {
    result = (sequence.filter(number => isDivisible(potential, number)).length === sequence.length) ? potential : null;
    potential++;
  }

  return result;
}


console.log(smallestCommons([1,5]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]));
