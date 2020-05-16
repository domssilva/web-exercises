/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/

function uniteUnique(arr) {
  let newArr = [];

  for (let idx in arguments) {
    arguments[idx].forEach(num => {
      (newArr.indexOf(num) === -1) ? newArr.push(num) : '';
    });
  }

  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
