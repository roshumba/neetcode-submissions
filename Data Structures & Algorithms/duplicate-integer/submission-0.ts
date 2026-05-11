class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // declare a set to hold values
        // iterate through the array
        // check if set has number (if not, save it there)
        // if yes return true
        // otherwise return false

        const values = new Set ();

        for (const num of nums) {
            if (values.has(num)) return true;
            else values.add(num); 
        }
        return false; 
    }
}
