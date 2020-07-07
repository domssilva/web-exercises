function convertToRoman(num) {
  
  const roman = {
    'M' : 1000,
    'CM': 900,
    'D' : 500,
    'CD': 400,
    'C' : 100,
    'XC': 90,
    'L' : 50,
    'XL': 40,
    'X' : 10,
    'IX': 9,
    'V' : 5,
    'IV': 4,
    'I' : 1,
  }

  let result = '';
  let counter = 0;
  
  while (counter < num) {
    for (let letter in roman) {
      if (roman[letter] <= (num - counter)) {
        result += letter;
        counter += roman[letter];
        // restart loop over again
        break;
      }
    }
  }
  
  console.log(`${num} = ${result}`);
  return result;

 }
 
 convertToRoman(36);
 convertToRoman(9);
 convertToRoman(326);