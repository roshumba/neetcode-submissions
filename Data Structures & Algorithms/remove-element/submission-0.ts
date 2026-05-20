class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        // iterate through array
        // one pointer tracks array indices
        // another pointer goes ahead to find the non val values
        // replace value at first pointer each time we find a value that is not val
        // return first pointer

        let k = 0; // used to track last element placed
                // using i to do this would confine i to loop context, not returnable

        for (let i = 0; i < nums.length; i++){
            if (nums[i] !== val){
                nums[k] = nums[i];
                k++;
            }
        }
        return k;
    }
}
