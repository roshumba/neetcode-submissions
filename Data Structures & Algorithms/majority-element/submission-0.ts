class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        // iterate through array
        // track frequencies in a map
        // store a frequency count and change if a map value goes above

        const freq: Map<number, number> = new Map();
        let max: number = 0;
        let maxKey: number ;

        for (const num of nums) {
            freq.set(num, (freq.get(num) ?? 0) + 1);
            max = Math.max(max, freq.get(num));

            if (freq.get(num) === max) {
                maxKey = num;
            }
        }

        return maxKey;
    }
}
