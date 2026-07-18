class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const answers: number[][] = []
        const sortedNums = nums.sort((a, b) => a - b)

        let fixedIndex = 0;
        let leftIndex = 1;
        let rightIndex = sortedNums.length - 1;

        while (fixedIndex <= sortedNums.length - 3) {
            while (leftIndex < rightIndex) {
                const fixedNumber = sortedNums[fixedIndex];
                const leftNumber = sortedNums[leftIndex];
                const rightNumber = sortedNums[rightIndex]

                const sum = fixedNumber + leftNumber + rightNumber;

                if (sum === 0) {
                    const answer = [fixedNumber, leftNumber, rightNumber]

                    answers.push(answer)

                    // Increment the left index incase a fixed index 
                    // can have multiple answers
                    leftIndex++;
                } else if (sum > 0) {
                    rightIndex--;
                } else if (sum < 0) {
                    leftIndex++;
                }
            }

            fixedIndex++;
            leftIndex = fixedIndex + 1;
            rightIndex = sortedNums.length - 1;
        }

        // Removing duplicate answers
        const map = new Map();
        answers.forEach((answer) => map.set(JSON.stringify(answer), answer));

        return [...map.values()];
    }
}