class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        // use empty spaces in nums1 to fill from the end (don't overwrite any vals)
        // check both arrays for larger value on each iteration
        // place larger value and decrement respective trackers

        let position: number = m + n - 1; // tracking index in nums 1
        let i: number = m - 1; // iterating through nums1
        let j: number = n - 1; // iterating through nums2

        while (j >= 0) {
            if (i >= 0 && nums1[i] > nums2[j]) {
                nums1[position] = nums1[i];
                position--;
                i--;
            } else {
                nums1[position] = nums2[j];
                position--;
                j--;
            }
        }
        
    }
}
