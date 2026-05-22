class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // SOLUTION 2

        // store elements in a map
        // push elements to array index based on frequency
        // iterate, add from end of array to result
        
        const freq: Map<number, number> = new Map();
        const counts: number[][] = Array.from({length: nums.length + 1}, () => []);
        const result: number[] = [];

        for (const num of nums) {
            freq.set(num, (freq.get(num) ?? 0) + 1)
        }

        for (const [key, value] of freq.entries()){
            counts[value].push(key);
        }

        for(let i = counts.length - 1; i >= 0; i--){
            while (counts[i].length !== 0){
                k--;
                result.push(counts[i].pop())

                if (k === 0) return result;
            }
        }


        // SOLUTION 1
        // declare object to track frequency of elements 
        // declare result array
        // sort elements by count using array indices
        // from highest index, add elements to result 
        // decrement k until it is 0

    //     const freq: Record<string, number> = {};
    //     const counts: number[][] = Array.from({length: nums.length + 1}, () => []);
    //     const result: number[] = [];

    //     nums.forEach(ele => {
    //         freq[ele] = (freq[ele] || 0) + 1; 
    //     })

    //     for (const key in freq) {
    //         counts[freq[key]].push(Number(key));
    //     }

    //    for (let i = counts.length - 1; i > 0 ; i-- ){
    //     for (const num of counts[i]) {
    //         k--;
    //         result.push(num);
    //         if (k === 0) return result;
    //     }
    //    }
    //    return result;
    }
}
