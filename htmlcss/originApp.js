/** @format */

function sum(a, b) {
  return a + b;
}
sum(1, 4);

/**
 * nums1 = [2, 5, 7, 0, 0, 0, 0], n=3, nums2 = [1, 6, 8, 9] m=4
 * O(m+n)
 * function mergeSortedArray(nums1, n, nums2, m) {
 *
 * }
 * modify on the nums 1 to become a sorted array: nums1 = [1, 2, 5, 6, 7, 8, 9]
 */

function mergeSortedArray2(nums1, m, nums2, n) {
  let p1 = 0;
  let p2 = 0;

  const merged = [];

  while (p1 < m && p2 < n) {
    if (nums1[p1] < nums2[p2]) {
      merged.push(nums1[p1]);
      p1++;
    } else {
      merged.push(nums2[p2]);
      p2++;
    }
  }

  while (p1 < m) {
    merged.push(nums1[p1]);
    p1++;
  }

  while (p2 < n) {
    merged.push(nums2[p2]);
    p2++;
  }
  // O(m+n)

  for (let i = 0; i < m + n; i++) {
    nums1[i] = merged[i];
  }
  // O(m + n)
}
// O(2(m+n)) space: O(m+n)

function mergeSortedArray(nums1, n, nums2, m) {
  let i = n - 1;
  let j = m - 1;
  let k = n + m - 1; //

  while (k >= 0) {
    if (j < 0 || nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else if (i < 0 || nums1[i] <= nums2[j]) {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  } // O(2 + n)

  // while (j >= 0) {
  //   nums1[k] = nums2[j];
  //   j--;
  //   k--;
  // } // O(m-2)
}
// O(m+n)
let nums1 = [1, 1, 7, 0, 0, 0, 0];
let n = 3;
let nums2 = [2, 2, 2, 3];
let m = 4;
mergeSortedArray(nums1, n, nums2, m);
console.log(nums1);
