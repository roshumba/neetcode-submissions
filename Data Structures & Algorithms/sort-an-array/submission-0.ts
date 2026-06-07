class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums: number[]): number[] {
    
        function sort(array: number[]): number[] {

            const map: Map<number, number> = new Map();
            const min: number = Math.min(...array);
            const max: number = Math.max(...array);

            array.forEach(num => {
                if (!map.has(num)) {
                    map.set(num, 0);
                }
                map.set(num, map.get(num) + 1);
            })

            let i = 0;
            
            for (let curr = min; curr <= max; curr++){
                while (map.get(curr) > 0) {
                    nums[i] = curr;
                    i++;
                    map.set(curr, map.get(curr) - 1);
                }  
            }

            return array;
        }

        return sort(nums);
    }
}
