class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minimumPrice = Infinity;
        let maximumProfit = 0;

        for (const price of prices) {
            minimumPrice = Math.min(price, minimumPrice);
            maximumProfit = Math.max(maximumProfit, price - minimumPrice);
        }

        return maximumProfit;
    }
}
