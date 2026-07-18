class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const answers: number[][] = []
        const sortedNums = nums.sort((a, b) => a - b)

        for (let fixedIndex = 0; fixedIndex < sortedNums.length - 2; fixedIndex++) {
            // Continue for duplicate values for the fixed index
            if (fixedIndex > 0 && sortedNums[fixedIndex] === sortedNums[fixedIndex - 1]) continue;

            let leftIndex = fixedIndex + 1;
            let rightIndex = sortedNums.length - 1;

            while (leftIndex < rightIndex) {
                const sum = sortedNums[fixedIndex] + sortedNums[leftIndex] + sortedNums[rightIndex];

                if (sum === 0) {
                    answers.push([sortedNums[fixedIndex], sortedNums[leftIndex], sortedNums[rightIndex]]);

                    // Continue for duplicate values for the left index
                    while (leftIndex < rightIndex && sortedNums[leftIndex] === sortedNums[leftIndex + 1]) {
                        leftIndex++;
                    };

                    // Continue for duplicate values for the right index
                    while (leftIndex < rightIndex && sortedNums[rightIndex] === sortedNums[rightIndex - 1]) {
                        rightIndex--;
                    };

                    // Increment the left and right indices incase a fixed index
                    // can have multiple answers
                    leftIndex++;
                    rightIndex--;
                } else if (sum < 0) {
                    leftIndex++;
                } else if (sum > 0) {
                    rightIndex--;
                };
            };
        };

        return answers;
    }
}