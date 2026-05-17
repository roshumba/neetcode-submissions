class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // iterate using two pointers
        // save indices in an array and reutrn

        for (let i = 0; i < numbers.length - 1; i++){
            for (let j = 1; j < numbers.length; j++) {
                if(numbers[i] + numbers[j] === target) {
                    return [i + 1, j + 1];
                }
            }
        }

        return [];
    }
}
