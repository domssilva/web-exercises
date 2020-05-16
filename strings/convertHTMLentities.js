/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {

  let convertedStr = '';
  let html = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '\'': '&apos;',
    '"': '&quot;',
  };

  str = str.split('');

  str.forEach(char => {
    html.hasOwnProperty(char) ? convertedStr += html[char] : convertedStr += char;
  });

  return convertedStr;
}

convertHTML("Dolce & Gabbana");
