class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        // height = height[i] * (height[j] - height[i])
        // iterate through array with i and j
        // track a max value and compare at each go

        // let max: number = 0;

        // for(let i = 0; i < heights.length - 1; i++) {
        //     for(let j = i + 1; j < heights.length; j ++){

        //         const area: number = Math.min(heights[i], heights[j]) * (j - i);

        //         max = Math.max(max, area);
        //     }
        // }

        // SOLUTION 2

        // use two pointers starting at widest
        // move pointer that is at the shorter height until pointers meet
        // checks all possible combinations that use the tallest height

        let max: number = 0;
        let left: number = 0;
        let right: number = heights.length - 1

        while(left < right) {
            const area: number = Math.min(heights[left], heights[right]) * (right - left);
            max = Math.max(max, area);

            if(heights[left] <= heights[right]){
                left++;
            } else {
                right--;
            }
        }

        return max;
    }
}
