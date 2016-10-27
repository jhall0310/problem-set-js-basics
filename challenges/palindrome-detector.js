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
var Palindrome = [ "mom", "racecar", "stack", "Pull up if I pull up", "Amore, Roma", "A man, a plan a canal:Panama", "these", "will not", "work"];

function isPalindrome(input) {
  return (input.split('').reverse().join('') === input);
};

isPalindrome();