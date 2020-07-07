/*
Pig Latin is a way of altering English Words. The rules are as follows:
  - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
  - If a word begins with a vowel, just add "way" at the end.

*/

function translatePigLatin(str) {
  
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  
  if ((vowels.filter(vowel => str[0] === vowel)).length > 0 ) {
    return str + 'way'
  } else {

    let char;
    let consonants = '';
    
    for (let i = 0; i < str.length; i++) {
      char = str[i];
      if (vowels.indexOf(char) === -1) {
        consonants += char;

      } else {
        console.log(char + ' is a vowel!');
        return str.slice(i) + consonants + 'ay';
      }
    }
  }

  // handle strings without vowels
  return str + 'ay';

}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("rythm"));
console.log(translatePigLatin("algorithm"));