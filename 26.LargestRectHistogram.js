// https://neetcode.io/problems/largest-rectangle-in-histogram/question

class Solution {
  largestRectangleArea(heights) {
    let stack = [];
    let maxArea = 0;

    for (
      let i = 0;
      i <= heights.length;
      i++ // we got till end to force the flush condition
    ) {
      let currHeight = i === heights.length ? 0 : heights[i]; // add 0 to flush all values from stack incase there is no smaller element

      while (stack.length && currHeight < heights[stack[stack.length - 1]]) {
        let top = stack.pop();
        let height = heights[top];
        let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1; // boundaries for width right is i, left is new stack top, if stack is empty then i will be the width
        maxArea = Math.max(maxArea, height * width);
      }

      stack.push(i);
    }
    return maxArea;
  }
}
