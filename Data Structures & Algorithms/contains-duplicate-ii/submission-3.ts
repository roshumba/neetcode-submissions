class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
 
        const map: Map<number, number[]> = new Map();

        for (let i = 0; i < nums.length; i++) {

            if (!map.get(nums[i])) {
                map.set(nums[i], []);
            }
            map.get(nums[i]).push(i);
        }

        for (const array of map.values()) {
            if (array.length >= 2 ) {
                
                for (let i = 0; i < array.length; i++) {
                    let j = i + 1;
                    while (i < j && j < array.length) {
                        if (Math.abs(array[i] - array[j]) <= k) {
                            return true;
                        }
                        j++;
                    }
                }
                
            }

           
        }

        return false;
    }
}
