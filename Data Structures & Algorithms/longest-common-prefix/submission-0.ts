class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        // iterate through array
        // iterate through each string
        // grab each character
        // check that every element has that character at the same index
        // at end of each loop, concatenate to the result string
        // if character isn't found in a string, return latest saved prefix

        let pref: string = '';

        for (let i = 0; i < strs[0].length; i++) {
                let temp: string = strs[0][i];
                let count: number = 1 

                while (count < strs.length) {
                    if (i >= strs[count].length || strs[count][i] !== temp) {
                        return pref;
                    }
                    
                    count++;
                }

                pref += temp;
        }

        return pref;
    }
}
