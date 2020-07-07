const movie = {
  info: {
    title: 'Javascript',
    duration: '2:14:00',
  },
  id: Math.random().toString(),
  getTitle() {
    // console.log(this);
    console.log(this.info.title.toUpperCase());
  },
};

let moovie = {
  title: 'inception',
  getTitle() {
    return this.title;
  }
}

function logFunction() {
  console.log(this);
}

class User {
  logName() {
    console.log(this);
  }
}

let unboundGetTitle = moovie.getTitle;
let bound = unboundGetTitle.bind(moovie);
console.log(
  unboundGetTitle()
);
console.log(
  unboundGetTitle.call(moovie)
);

// Changing getTitle context
// getTitle = getTitle.bind(movie);
// getTitle();


// logFunction();
// (new User).logName();
