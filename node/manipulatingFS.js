const path = require('path');
const fs = require('fs');

console.dir(fs);

fs.appendFile(path.join(__dirname, './log.txt'), message, err => {
  if (err) {
    throw err;
  }
});
