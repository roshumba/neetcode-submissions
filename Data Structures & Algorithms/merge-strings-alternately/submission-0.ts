class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1: string, word2: string): string {

        const count: number = Math.max(word1.length, word2.length);
        let result: string = '';

        for (let i = 0; i < count; i++) {
            if (word1[i] !== undefined) result += word1[i];
            if (word2[i] !== undefined) result += word2[i];
        }
        return result;
    }
}
