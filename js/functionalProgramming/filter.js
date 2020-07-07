let animals = [
  {name: 'fluffykins', species: 'rabbit'},
  {name: 'caro', species: 'dog'},
  {name: 'harold', species: 'fish'},
  {name: 'ursula', species: 'cat'},
  {name: 'jimmy', species: 'dog'},
];

let isDog = function(animal) {
  return animal.species === 'dog';
}

let dogs = animals.filter(isDog);
dogs;
