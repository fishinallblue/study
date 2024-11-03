// 题目描述：https://leetcode.cn/problems/B1IidL/description/
function peakIndexInMountainArray(arr: number[]): number {
  let left = 0;
  let right = arr.length - 1;
  while(left < right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] < arr[mid + 1]) {
          left = mid + 1
      } else {
          right = mid;
      }
  }
  return left;
};