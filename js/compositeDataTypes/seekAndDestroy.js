// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  let args = Object.values(arguments).slice(1);
  let newArr = arr.filter(elem => args.indexOf(elem) === -1);
  return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
