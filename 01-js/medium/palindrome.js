/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  
  if(str.length==0)return true;

  // str1 is the string in lowercase and replace is used to
 


  // regex is used to match the characters that are not alphabets or numbers ,  
  // replace the characters that are not alphabets or numbers with empty string
 let str1 = str.toLowerCase().replace(/[^a-z0-9]/gi,'');

 // str2 is the reverse of str1 and split is used to split the string into an array of substrings
 // join is used to join the elements of an array into a string

 let str2 = str1.split("").reverse().join("");

  if(str1 === str2){
    return true;
  }
  else{
    return false;
  }

}

module.exports = isPalindrome;
