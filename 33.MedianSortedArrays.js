// https://neetcode.io/problems/median-of-two-sorted-arrays/question

class Solution {
  findMedianSortedArrays(nums1, nums2) {
    // binary search always on smaller length array
    if (nums1.length > nums2.length) {
      return this.findMedianSortedArrays(nums2, nums1);
    }

    let m = nums1.length;
    let n = nums2.length;

    let left = 0;
    let right = m; // binary search on num1 (the smaller length array)

    while (left <= right) {
      let partitionA = Math.floor((left + right) / 2); // mid is the partition for nums1
      let partitionB = Math.floor((m + n + 1) / 2) - partitionA; // for other array partition is derived

      // max left of both arrays
      let maxLeftA = partitionA === 0 ? -Infinity : nums1[partitionA - 1];
      let maxLeftB = partitionB === 0 ? -Infinity : nums2[partitionB - 1];

      //min right for both arrays
      let minRightA = partitionA === m ? Infinity : nums1[partitionA];
      let minRightB = partitionB === n ? Infinity : nums2[partitionB];

      // if correct partition is found
      if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
        if ((m + n) % 2 === 0) {
          return (
            (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2
          );
        } else {
          return Math.max(maxLeftA, maxLeftB);
        }
      }

      if (maxLeftA > minRightB) {
        right = partitionA - 1;
      } else {
        left = partitionA + 1;
      }
    }
  }
}
