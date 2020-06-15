let animals = [
  {name: 'fluffykins', species: 'rabbit'},
  {name: 'caro', species: 'dog'},
  {name: 'harold', species: 'fish'},
  {name: 'ursula', species: 'cat'},
  {name: 'jimmy', species: 'dog'},
];


let names = [];

animals.map(obj => names.push(obj));

/*
for (let i = 0; i < animals.length; i++) {
  names.push(animals[i].name);
}
*/
names;