function whatIsInAName(collection, source) {
  let isMatch;
  let arr = [];
  let counter = 0;
  let ownsProperty;
  let props = Object.keys(source);
  
  collection.forEach(obj => {
    ownsProperty = true;
    isMatch = false;

    props.some(property => {

      if (!ownsProperty) {
        // breaks loop
        return false;
      }

      ownsProperty = obj.hasOwnProperty(property) ? true : false;

      if (ownsProperty) {
        // verify if object[property] === source[property]
        isMatch = obj[property] === source[property] ? true: false;
      } 

      if (isMatch && ownsProperty) {
        // this object owns 1 of the source properties with same value. but I still have to check ALL OF THEM.
        counter++;
      }
    });

    if (counter === props.length) {
      arr.push(obj);
    }
  });
  
  console.log(arr);
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3});
