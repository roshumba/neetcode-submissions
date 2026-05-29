class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {

        let j = 1;

        for (let i = 0; i < nums.length - 1; i++){
            
            while (nums[i] === nums[j]){
                j++;
            }

            nums[i + 1] = nums[j];

            if (j === nums.length) return i + 1;
        }

        return nums.length;
    }
}
