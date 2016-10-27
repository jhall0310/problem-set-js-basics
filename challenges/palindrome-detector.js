/*
  Palindrome Detector

  Create a function `isPalindrome` that returns a boolean indicating whether a given string is a palindrome.

  Here are some examples of palindromes (from easiest to hardest, try to get as many as you can!):

  TRUE:
  - mom
  - racecar
  - stack cats
  - Pull up if I pull up
  - Amore, Roma.
  - A man, a plan, a canal: Panama.

  FALSE:
  - these
  - will not
  - work!

*/

// YOUR CODE HERE
var mom = input;

function isPalindrome(input) {
  var midpoint=parseInt(input.length/2);
  for (var i=0; i<midpoint; i++) {
    if (input[i] !== input[(input.length-1)-i]) {
      return false;
    }
  }
  return true;
}

isPalindrome();