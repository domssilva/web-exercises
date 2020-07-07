/*
  Return true if the passed string is a valid US phone number.
  Valid Formats: 
    555-555-5555
    (555)555-5555
    555 555 5555

*/

function telephoneCheck(str) {
  const phoneRegxUSA = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/;
  const match = str.match(phoneRegxUSA);

  return match !== null 
}

console.log(
  telephoneCheck("(555) 555 5555")
);
//telephoneCheck("555 555 5555");