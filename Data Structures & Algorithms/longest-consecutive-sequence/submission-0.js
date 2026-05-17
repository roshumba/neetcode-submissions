class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // look for numbers that do not have num - 1 (start of sequence)
        // add values to a set (constant lookup)
        // declare variable to track longest found sequence

        if (nums.length === 0) return 0;

        const vals = new Set(nums);
        let longest = 0;


        for (const n of vals) {
            if (!vals.has(n - 1)){
                let count = 1;

                while (vals.has(n + count)) {
                count++;
                } 

                longest = Math.max(longest, count);
            }
        }

        return longest;
    }
}
