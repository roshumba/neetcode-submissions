class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums: number[]): number {
        // add to a set
        // for each num, check if num + / - 1 is there
        // if not, save num + / 1 to result
        // update result to be the min of these values

        const vals: Set<number> = new Set(nums);
        let result: number = Infinity;

        if (!vals.has(1)) return 1;

        for( const val of vals) {
            if (val === 1) {
                if (!vals.has(2)) return 2;
            }
            else if (val > 1 && !vals.has(val - 1)) {
                result = Math.min(val - 1, result);
            }
            else if (val > 1 && !vals.has(val + 1)) {
                result = Math.min(val + 1, result);
            }
        }

        return result;
    }
}
