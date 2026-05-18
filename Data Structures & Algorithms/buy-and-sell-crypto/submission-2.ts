class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // iterate through the array using 2 pointers
        // track the difference between values where l < r

        let left: number = 0;
        let right: number = 1
        let spread: number = 0

        while (right < prices.length ) {
            
            if (prices[left] < prices[right]){
                spread = Math.max(spread, prices[right] - prices[left]);
                right++;
            } else {
                left = right;
                right++;
            }
        }
        return spread;
    }
}
