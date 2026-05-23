class NumMatrix {
    matrix: number[][];
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix: number[][]) {
        this.matrix = matrix;
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        // add elements across each row until column is reached
        // return sum
        
        let sum: number = 0;

        for (let i = row1; i <= row2; i++){

            let cols: number = col1;

            while (cols <= col2){
                sum += this.matrix[i][cols];
                cols++;
            }
        }

        return sum;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
