function rot13(str) {
  const rules = {
    key: 13,
    alphaRegx: /\w/gi,
    alphaStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    isChar: function(char) {
      return (this.alphaStr.indexOf(char) !== -1);
    },
    convertIdx: function(index) {
      return index - this.alphaStr.length;
    }
  }

  let result = '';
  let char, alphabetCharIdx;
  // iterate over str
  for (let i = 0; i < str.length; i++) {
    char = str[i];

    if (rules.isChar(char)) {
      alphabetCharIdx = rules.alphaStr.indexOf(char) + rules.key;

      if (alphabetCharIdx >= 26) {
        alphabetCharIdx = rules.convertIdx(alphabetCharIdx);
      }

      result += rules.alphaStr[alphabetCharIdx];

    } else {
      result += char;
    }
    
  }

  return result;
}

rot13("SERR PBQR PNZC");
rot13("SERR YBIR?");
rot13("SERR CVMMN!");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");