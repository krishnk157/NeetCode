function lengthOfLongestSubstringKDistinct(s, k) {
  if (k === 0) return 0;

  let left = 0;
  let maxLen = 0;
  const freq = new Map();

  for (let right = 0; right < s.length; right++) {
    freq.set(s[right], (freq.get(s[right]) || 0) + 1);

    while (freq.size > k) {
      freq.set(s[left], freq.get(s[left]) - 1);

      if (freq.get(s[left]) === 0) {
        freq.delete(s[left]);
      }

      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
