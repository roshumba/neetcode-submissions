class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        // SOLUTION 2
        // create 2 arrays storing prod before and after
        // return result array which is product of elements at each index

        const bef: number[] = [];
        const aft: number[] = [];
        const prod: number[] = [];

        bef[0] = aft[nums.length - 1] = 1;
        let j = nums.length - 2;

        for(let i = 1; i < nums.length; i++){

            bef[i] = nums[i - 1] * bef[i - 1];
            aft[j] = nums[j + 1] * aft[j + 1];
            j--;
        }

        for (let i = 0; i < nums.length; i++){
            prod[i] = bef[i] * aft[i];
        }

        return prod;

        // SOLUTION 1
        // return an array where each element is the product of all other array elements except that one
        // track products before and after in separate arrays
        // multiply b/a products to get final array

        // const before: number[] = [];
        // const after: number[] = [];
        // const result: number[] = [];

        // for(let i = 0; i < nums.length; i++) {  
        //     let j = nums.length - 1 - i;
        //     before[i] = (before[i - 1] ?? 1) * (nums[i - 1] ?? 1);
        //     after[j] = (after[j + 1] ?? 1) * (nums[j + 1] ?? 1)
        // }

        // for(let i = 0; i < nums.length; i++) {
        //     result[i] = before[i] * after[i];
        // }

        // return result;
    }
}
