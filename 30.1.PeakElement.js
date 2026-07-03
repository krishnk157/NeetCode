var findPeakElement = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let m = l + Math.floor((r - l) / 2);

    // check if going towards peak
    if (nums[m] < nums[m + 1]) {
      // m+1 greater so peak in on the right side
      l = m + 1;
    } else {
      // m+1 is less than m then, m can be the peak, or peak is on the left side
      r = m;
    }
  }
  return l;
};
