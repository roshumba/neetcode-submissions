class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s: string): boolean {
        // use two pointers to look for matching values from both ends
        // if mismatch is found, check if removing either letter creates a palindrome
    

        let left: number = 0;
        let right: number = s.length - 1;

        while (left < right){
            if (s[left] !== s[right]) {
                return (
                    this.palindromeCheck(s.slice(0, left) + s.slice(left + 1)) ||
                    this.palindromeCheck(s.slice(0, right) + s.slice (right + 1))
                );
            }

            left++;
            right--;
        }
        return true;
    }

    palindromeCheck(s: string): boolean {

        let l: number = 0;
        let r: number = s.length - 1;

        while (l < r) {
            if (s[l] !== s[r]) return false;

            l++;
            r--;
        }

        return true;
    }

}
