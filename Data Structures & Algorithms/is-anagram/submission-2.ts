class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // check if the length of the strings is the same
        // if not, return false
        // save all values from string s to a map
        // save all values from string t to a map
        // check if the keys in mapT are in mapS and the values are the same
        // if yes, return true
        // if no, return false

        // SOLUTION 1

        // if (s.length !== t.length) return false;

        // const mapS = new Map();
        // const mapT = new Map();

        // for (const char of s) {
        //     mapS.set(char, (mapS.get(char) || 0) + 1)
        // }
        
        // for (const char of t) {
        //     mapT.set(char, (mapT.get(char) || 0) + 1)
        // }

        // for (const [key, value] of mapS) {
        //     if (!mapT.has(key)) return false;
        //     else if (value !== mapT.get(key)) return false;
        // }

        // return true;

        // SOLUTION 2

        // if (s.length !== t.length) return false;

        // const sortedS = s.split('').sort().join('');
        // const sortedT = t.split('').sort().join('');

        // return sortedS === sortedT;

        // SOLUTION 3

        if (s.length !== t.length) return false;

        const sChars: Record<string, number> = {};
        const tChars: Record<string, number> = {};

        for (let i = 0; i<s.length; i++) {
            sChars[s[i]] = (sChars[s[i]] || 0) + 1;
            tChars[t[i]] = (tChars[t[i]] || 0) + 1;
        }

        for (const char in sChars) {
            if (sChars[char] !== tChars[char]) return false;
        }

        return true;
    }
}
