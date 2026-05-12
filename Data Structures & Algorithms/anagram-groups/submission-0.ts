class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // iterate through array
        // save each element sorted in a map where value is array of original elements
        // check map to see if it has sorted element each time, and add to array, if so
        // return array of map values

        let result: string[][] = [];
        const anagrams: Map<string, string[]> = new Map();

        for (let i = 0; i < strs.length; i++) {
            // save sorted string
            const current: string = strs[i].split('').sort().join('')
            
            if (anagrams.has(current)) {
                // save existing values
                const existing: string[] = anagrams.get(current)
                anagrams.set(current, [...existing, strs[i]])
                }
            
             else anagrams.set(current, [strs[i]]);  
        }

        for (const value of anagrams.values()) {
            result.push(value);
        }
        
        return result;
    }
}
