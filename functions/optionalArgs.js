/*
  Create a function that does the following:

    - it has to add 2 numbers passed as parameters and return
    the sum

    - it has to check if any of the numbers are actual numbers, 
    otherwise return undefined

    - it has to check if it has one or two arguments passed. More
    are ignored

    - if it has only 1 argument then it has to return a function
    that uses that number and expects another one, to then add it.
*/

function addTogether() {

  const num0 = arguments[0];

  let isNumber = (value) => {
    return (typeof value === 'number') ? true : false;
  }
  
  if (isNumber(num0) && arguments[1] === undefined) {

    return function(num) {

      if (!isNumber(num)) {
        return undefined;
      }

      return num0 + num;
    };
  }

  if (! (isNumber(num0) && isNumber(arguments[1])) ) {
    // one of the parameters is not a number
    return undefined;
  }
  
  return num0 + arguments[1];
} 

console.log(addTogether(3)(1));
