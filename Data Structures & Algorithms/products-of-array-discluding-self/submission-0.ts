class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        // return an array where each element is the product of all other array elements except that one
        // track products before and after in separate arrays
        // multiply b/a products to get final array

        const before: number[] = [];
        const after: number[] = [];
        const result: number[] = [];

        for(let i = 0; i < nums.length; i++) {  
            let j = nums.length - 1 - i;
            before[i] = (before[i - 1] ?? 1) * (nums[i - 1] ?? 1);
            after[j] = (after[j + 1] ?? 1) * (nums[j + 1] ?? 1)
        }

        for(let i = 0; i < nums.length; i++) {
            result[i] = before[i] * after[i];
        }

        return result;
    }
}
