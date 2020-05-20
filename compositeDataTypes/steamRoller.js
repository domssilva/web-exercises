/*
Flatten a nested array. You must account for varying levels of nesting.

Ps: Don't use Array.prototype.flat() or Array.prototype.flatMap()
*/

function steamrollArray(arr) {

  let tmp = '';
  let result = [];

  // create a string with all elements
  arr.some(elem => {

    if (typeof elem === 'object' && !(Array.isArray(elem))) {
      tmp += '{}';
    } else {
      tmp += `${elem}`;
    }
    tmp += ' ';
  });

  // create array with each element
  tmp = tmp.trim().replace(',', ' ').split(' ');

  // make necessary type conversions
  for (let i = 0; i < tmp.length; i++) {
    let elem = tmp[i];
    if (elem === "") {
      continue;
    } else if (! isNaN(elem)) {
      result.push(Number(elem));
    } else if(elem === '{}') {
      result.push({});
    } else {
      result.push(elem);
    }
  }

  return result;

}

steamrollArray([1, [], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);
steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, [], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]);