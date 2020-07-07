//Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

function truthCheck(collection, pre) {
  let isTruthy = true;

  collection.some(obj => {
    for (let key in obj) {
      if (!obj[pre]) {
        isTruthy = false;
        break;
      }
    }
  });

  return isTruthy;

}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");