/*
  Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
  spinal case = this-is-spinal-case
*/

function spinalCase(str) {
  let char;
  let strResult = '';
  str = str.replace(/\s|_/gi, ' ');

  for (let idx = 0; idx < str.length; idx++) {
    char = str[idx];

    if (!(char === char.toLowerCase()) && idx !== 0) {
      strResult += ' ' + char.toLowerCase();
    } else {
      strResult += char.toLowerCase();
    }
  }

  strResult = strResult.replace(/\s\s|\s/gi, '-');
  console.log(strResult);
}

spinalCase("This Is Spinal Tap");
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");