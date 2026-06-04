class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {

        const chars: Set<string> = new Set();
        let left: number = 0;
        let result: number = 0;

        for (let right = 0; right < s.length; right++){
            while(chars.has(s[right])) {
                chars.delete(s[left]);
                left++;
            }
            chars.add(s[right]);
            result = Math.max(result, right - left + 1);

        }

        return result;

        // iterate through string
        // save each element to a set and a temp string
        // if the next element up is in the set
        // update result to max of result / temp, clear set, clear temp, move to next index

        // let result: number = 0;
        // let temp: string = '';
        // let chars: Set<string> = new Set;

        // for (let i = 0; i < s.length; i++) {
        //     if(!chars.has(s[i])){
        //         chars.add(s[i]);
        //         temp += s[i];
        //     } else {
        //         result = Math.max(result, temp.length);
        //         temp = '';
        //         chars.clear();
        //         i--;
        //     }

        // }

        // result = Math.max(result, temp.length);
        
        // return result;
    }
}
