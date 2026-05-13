class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // declare object to track frequency of elements 
        // declare result array
        // sort elements by count using array indices
        // from highest index, add elements to result 
        // decrement k until it is 0

        const freq: Record<string, number> = {};
        const counts: number[][] = Array.from({length: nums.length + 1}, () => []);
        const result: number[] = [];

        nums.forEach(ele => {
            freq[ele] = (freq[ele] || 0) + 1; 
        })

        for (const key in freq) {
            counts[freq[key]].push(Number(key));
        }

       for (let i = counts.length - 1; i > 0 ; i-- ){
        for (const num of counts[i]) {
            k--;
            result.push(num);
            if (k === 0) return result;
        }
       }
    }
}
