class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let leftValue = 0;
        let rightValue = matrix[0].length - 1;

        for (const row of matrix) {
            if (target >= row[0] && target <= row[row.length - 1]) {
                return this.searchRow(row, target);
            } else {
                continue;
            }
        }

        return false;
    };

    searchRow(row: number[], target: number): boolean {
        let leftIndex = 0;
        let rightIndex = row.length - 1;

        while (leftIndex <= rightIndex) {
            const middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);

            if (target === row[middleIndex]) {
                return true;
            } else if (target > row[middleIndex]) {
                leftIndex = middleIndex + 1;
            } else if (target < row[middleIndex]) {
                rightIndex = middleIndex - 1;
            }
        }

        return false;
    }
}

