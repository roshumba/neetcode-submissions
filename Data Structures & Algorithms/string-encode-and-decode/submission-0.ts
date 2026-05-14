class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        // encode a string per a set of instructions
        // output single string
        // track the number of values in each string and concat with string
        // use delimiter to avoid confusion if string contains a number

        if (strs.length === 0) return '';

        let encoded: string = ''
        for(let i = 0; i < strs.length; i++) {
            encoded += strs[i].length + '|' + strs[i];
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        // reconstruct that string per a set of instructions
        // declare a result array
        // declare temporary string
        // declare character variable
        // add number of characters
        // push to result
        // return result

        if (str.length === 0) return [];

        const result: string[] = [];
        let chars = 0;
        let tempStr = '';

        for(let i = 0; i < str.length; i++){
            while (str[i] !== '|') {
                tempStr += str[i];
                i++;
            }
            

            chars = Number(tempStr);
            tempStr = '';
            i++;

            while (chars > 0) {
                tempStr += str[i];
                chars--;
                i++;
            }

            result.push(tempStr);

            tempStr = '';
            i--;
        }
        return result;
    }
}
