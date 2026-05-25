class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s: string[]): void {
        // use two pointers, l / r
        // reassign array values and move pointers inward

        let j = s.length - 1;

        for (let i = 0; i < Math.floor(s.length / 2); i++){
            [s[i], s[j]] = [s[j], s[i]]
            j--;
        }
    }
}
