class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const answer: number[] = new Array(temperatures.length).fill(0);
        const stack: number[] = [];

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
                const resolvedIndex = stack.pop();

                answer[resolvedIndex] = i - resolvedIndex;
            }

            stack.push(i);
        }

        return answer;
    }
}
