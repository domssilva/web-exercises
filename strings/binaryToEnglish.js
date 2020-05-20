/*
  Return an English translated sentence of the passed binary string.
*/

function binaryAgent(str) {

  // split string to get the Bytes.
  str = str.split(' ');

  // Convert each Binary to decimal
  // Based on the ascii table, convert decimal to char
  // put all chars together and return as string.
  let char;
  let decimal;
  let result = '';
  str.forEach(binary => {
    decimal = parseInt(binary, 2);
    char = String.fromCharCode(decimal);

    result += char;
  });

  console.log(result);
  return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
