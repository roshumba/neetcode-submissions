class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {

        const pair: string[] = []

        for (let i = 0; i < s.length; i++) {
            if (s[i] === '[' || s[i] === '(' || s[i] === '{') {
                pair.push(s[i]);
                continue;
            } 

            const last: string = pair.pop();

            if (s[i] === ']' && last === '[') {
                continue;
            } else if (s[i] === '}' && last === '{') {
                continue;
            } else if (s[i] === ')' && last === '(') {
                continue;
            } else {
                return false;
            }
            
        }

        return pair.length === 0;
    }
}
