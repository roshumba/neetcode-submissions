class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        // Solution 2
        // create an array to count character occurences in each string
        // save character count array (stringified) in map as keys and strings as values
        // return values

        const anagrams: Map<string, string[]> = new Map();
        const result: string[][] = [];

        for (const str of strs) {
            let count: number[] = new Array(26).fill(0);
            for( const char of str) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
            }

            const key: string = count.join(',')
            if (!anagrams.has(key)) {
                anagrams.set(key, [])
            }

            // let existing: string[] = anagrams.get(count);
                anagrams.get(key).push(str);

        }
        for (const value of anagrams.values()){
            result.push(value);
        }

        return result;




        // iterate through array
        // save each element sorted in a map where value is array of original elements
        // check map to see if it has sorted element each time, and add to array, if so
        // return array of map values

        // let result: string[][] = [];
        // const anagrams: Map<string, string[]> = new Map();

        // for (let i = 0; i < strs.length; i++) {
        //     // save sorted string
        //     const current: string = strs[i].split('').sort().join('')
            
        //     if (anagrams.has(current)) {
        //         // save existing values
        //         const existing: string[] = anagrams.get(current)
        //         anagrams.set(current, [...existing, strs[i]])
        //         }
            
        //      else anagrams.set(current, [strs[i]]);  
        // }

        // for (const value of anagrams.values()) {
        //     result.push(value);
        // }
        
        // return result;
    }
}
