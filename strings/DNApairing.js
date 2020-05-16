/*
There are four potential characters that exist in DNA: “A”, “T”, “G”, and “C”. “A” and “T” are always paired together, and “G” and “C” are always paired together.

This problem presents you with an input, e.g. “ATCGA”. Each of those five characters are missing their pairs.

You will get a DNA strand sequence and you need to get the pair and return it as a 2D array of the base pairs. Keep in mind that the provided strand should be first always.


“ATCGA” -> ["AT", "CG", "AT"]
*/

function pairElement(str) {
  let res = [];
  let dnaPairs = {
    "A": "AT", 
    "T": "TA", 
    "G": "GC", 
    "C": "CG",
  };
  
  str = str.split('');
  
  str.forEach(dnaStrand => {
    res.push(dnaPairs[dnaStrand].split(''));
  })

  return res;
}

pairElement("ATCGA");
pairElement("CTCTA")
pairElement("GCG");

