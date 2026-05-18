class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        // height = height[i] * (height[j] - height[i])
        // iterate through array with i and j
        // track a max value and compare at each go

        let max: number = 0;

        for(let i = 0; i < heights.length - 1; i++) {
            for(let j = i + 1; j < heights.length; j ++){

                const area: number = Math.min(heights[i], heights[j]) * (j - i);

                max = Math.max(max, area);
            }
        }

        return max;
    }
}
