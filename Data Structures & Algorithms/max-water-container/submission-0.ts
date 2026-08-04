class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let leftIndex = 0;
        let rightIndex = heights.length - 1;

        let maximumWater = 0;

        while (leftIndex < rightIndex) {
            const distance = rightIndex - leftIndex;
            const minimumHeight = Math.min(heights[leftIndex], heights[rightIndex]);

            const currentWater = minimumHeight * distance;

            maximumWater = Math.max(maximumWater, currentWater);

            if (heights[leftIndex] > heights[rightIndex]) {
                rightIndex--;
            } else {
                leftIndex++;
            }
        }

        return maximumWater;
    }
}
