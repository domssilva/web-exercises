const events = require('events');
const sayHi = new events.EventEmitter();

// declarinh what should happen at the event 'hi':
sayHi.on('hi', () => {
  console.log('I should say hi.');
});

sayHi.on('log', (message) => {
  console.log(message);
})

// triggering event:
sayHi.emit('hi');
sayHi.emit('log', 'hello NodeJS.');
