class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let lowerBound = 0;
        let upperBound = Math.max(...piles);

        let answer = upperBound;

        while (lowerBound <= upperBound) {
            const middleBound = lowerBound + Math.floor((upperBound - lowerBound) / 2);

            let totalTime = 0;

            for (const pile of piles) {
                totalTime += Math.ceil(pile / middleBound);
            }

            if (totalTime <= h) {
                answer = middleBound;
                upperBound = middleBound - 1;
            } else {
                lowerBound = middleBound + 1;
            }
        }

        return answer;
    }
}
