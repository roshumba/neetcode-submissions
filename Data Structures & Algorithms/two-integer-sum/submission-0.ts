class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // iterate through array
        // declare a map 
        // on each iteration, check map to see if current element is there
        // if not, save the difference (target - element) and the index of current element
        // when second value is found, return an array containing the value of map at that element , current index 

        
        const remainders: Map<number, number> = new Map();

       for (let i = 0; i < nums.length; i++) {
        if (remainders.has(nums[i])) return [remainders.get(nums[i]), i];

        remainders.set(target - nums[i], i);
       }

        return [];
    }
}
