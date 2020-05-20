function palindrome(str) {
  
  str =  str.replace(/\s|\W|[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/gi, '').toLowerCase();
  let reversed = str.split('').reverse().join('').toLowerCase();
  
  return (reversed === str) ? true : false;
}


palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome(" Os So   ");
palindrome("A man, a plan, a canal. Panama");