class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums: number[]): number[] {
        // find elements that appear more n/3 times
        // compare number of times an element appears to n/3

        const freq: Map<number, number> = new Map();
        const result: number[] = [];

        for (const num of nums) {
            freq.set(num, (freq.get(num) ?? 0) + 1)
        }

        for (const [key, value] of freq.entries()){
            if (value > Math.floor(nums.length / 3)){
                result.push(key);
            }
        }

        return result;
    }
}
