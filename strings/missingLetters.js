
function fearNotLetter(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let charIdx = alphabet.indexOf(str[0]);
  let res, char;
  
  for (let i = 0; i < str.length; i++) {
    
    char = str[i];
    if ((i !== 0) && (alphabet.indexOf(char) !== charIdx + 1))  {
      res = alphabet[alphabet.indexOf(char)-1];
      return res;
    }

    charIdx = alphabet.indexOf(str[i]);
  }

  return undefined;
}

console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("abce"));
