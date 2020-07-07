/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
*/

function dropElements(arr, func) {

  let res = [];
  let idx = 0;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    if (func(element)) {
      idx = i;
      return arr.slice(idx);
    }

  }

  return res;

}


dropElements([0, 1, 0, 1], function(n) {return n === 1;});
