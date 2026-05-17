class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {

        // visit each array or 3x3
        // convert to a single string, replacing all . with an empty space
        // iterate through the string, adding each value to a set
        // check if the length of the set is the same as the length of the string

        // check rows
        for(let i = 0; i < board.length; i++) {
            const nums: Set<string> = new Set();
            const current: string = board[i].join('').replace(/[^1-9]/g, '');
            for(const n of current) {
                if (nums.has(n)) return false;
                nums.add(n);
            }
        }

        // check columns
        for(let i = 0; i < board.length; i++) {
            let j: number = 0;
            const nums: Set<string> = new Set();
            let plays: string = ''

            while (j <= 8) {
                plays += board[j][i];
                j++;
            }

            const current: string = plays.replace(/[^1-9]/g, '');
            for(const n of current) {
                if (nums.has(n)) return false;
                nums.add(n);
            }
        }

        // check 3x3s
        for(let sq = 0; sq < 9; sq++) {
            const nums: Set<string> = new Set();
            let plays: string = '';

            for(let r = 0 ; r < 3; r++) {
                for(let c = 0; c < 3; c++) {
                    let row = Math.floor(sq / 3) * 3 + r;
                    let col = (sq % 3) * 3 + c

                    plays += board[row][col];
                }
            }
            
            const current: string = plays.replace(/[^1-9]/g, '');

            for(const n of current) {
                if (nums.has(n)) return false;
                nums.add(n);
                }
        }

        return true;
    }
}
