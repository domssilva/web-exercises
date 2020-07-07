/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {

  // verify if after argument is capitalized
  if (before[0] !== before[0].toLowerCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  } 
  
  return str.replace(before, after);
  
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
