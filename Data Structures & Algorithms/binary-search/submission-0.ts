class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let leftIndex = 0;
        let rightIndex = nums.length - 1;

        while (leftIndex <= rightIndex) {
            const middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);

            if (target === nums[middleIndex]) {
                return middleIndex;
            } else if (target > nums[middleIndex]) {
                leftIndex = middleIndex + 1;
            } else if (target < nums[middleIndex]) {
                rightIndex = middleIndex - 1;
            }
        }

        return -1;
    }
}
