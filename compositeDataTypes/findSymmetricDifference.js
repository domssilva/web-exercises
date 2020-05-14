/*
  Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other  words, return the symmetric difference of the two arrays.
*/

function diffArray(a1, a2) {

  let biggest, smallest;
  let result = [];
  
  // check if there is an empty array as parameter, and if so, return the non empty array.
  if (a1.length === 0 || a2.length === 0) {

    if (a1.length === 0) {
      return a2;
    }

    return a1;
    
  } else {
    
    if (a1 > a2) {
      biggest = a1;
      smallest = a2;
    } else {
      biggest = a2;
      smallest = a1;
    }

  }

  //else, compare the arrays and check what elements are different
  smallest.forEach(element => {
     if (!biggest.includes(element)) {
       console.log(`${element} will be added!`)
       result.push(element);
     }
  });

  biggest.forEach(element => {
    if (!smallest.includes(element)) {
      result.push(element);
    }
 });

  return result;

}

console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray([1, 2, 3, 5], []));
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
