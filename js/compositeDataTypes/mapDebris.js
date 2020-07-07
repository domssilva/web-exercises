/*
  Return array that transforms the element's average altitude
  into their orbital periods

  the values should be rounded to the nearest whole number.
  the body being orbited is Earth.

  formula = 2pi * sqrt( (earthRadius + avgAlt)**3 / GM )
*/

function orbitalPeriod(astronomicalObjects) {
  let formula;
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  
  for (let i = 0; i< astronomicalObjects.length; i++) {
    formula = (2 * Math.PI) * Math.sqrt( (earthRadius + astronomicalObjects[i].avgAlt)**3 / GM);

    delete astronomicalObjects[i].avgAlt;
    astronomicalObjects[i].orbitalPeriod = Math.round(formula);
  }

  console.log(astronomicalObjects);
  return astronomicalObjects;
  
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
