class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        // add all elements to a map with count
        // iterate through array placing all elements of a certain value until no more in map

        const colors: Map<number, number> = new Map();

        for (const num of nums) {
            colors.set(num, ((colors.get(num) ?? 0) + 1));
        }

        let key: number = 0;
        let count: number = colors.get(key) ?? 0;

        for (let i = 0; i < nums.length; i++){
           
           while (count === 0) {
            key++;
            count = colors.get(key) ?? 0;
           }

           nums[i] = key;
           count--;
        }

        return;
    }
}
