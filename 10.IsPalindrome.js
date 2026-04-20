// https://neetcode.io/problems/is-palindrome/question

class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
      // skip non alphanumeric
      while (left < right && !this.isAlphaNumeric(s[left])) left++;
      while (left < right && !this.isAlphaNumeric(s[right])) right--;
      if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

      left++;
      right--;
    }
    return true;
  }

  isAlphaNumeric(c) {
    return (
      (c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || (c >= "0" && c <= "9")
    );
  }
}
