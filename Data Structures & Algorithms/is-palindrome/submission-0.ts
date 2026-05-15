class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // convert string to all lowercase and remove spaces
        // iterate through string and form a new string of the reverse
        // return comparison on initial and reverse strings

        const sCopy: string = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let reversed: string = '';

        for(let i = sCopy.length - 1; i >= 0; i--){
            reversed += sCopy[i];
        }

        return sCopy === reversed;
    }
}
