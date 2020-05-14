/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
*/

function whatIsInAName(collection, source) {

  let obj;
  let count = 0;
  let result = [];
  let sourceProperties = Object.keys(source);

  for (let i = 0; i < collection.length; i++) {
    obj = collection[i];
    count = 0;

    sourceProperties.some(prop => {

      if (obj[prop] === source[prop]) {
        // keep track of how many properties matched
        count++;
      }

      if (count === sourceProperties.length) {
        // if all key:val pairs matched with the source, then push to result array
        result.push(obj);
      }
    });
  }

  return result;
}

whatIsInAName([{1: 'a', 2: 'b'}, {1: 'c'}, {2: 'd', 3: 'f'}], {1: 'a'})
whatIsInAName([{ "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2 }], { "apple": 1, "bat": 2 });