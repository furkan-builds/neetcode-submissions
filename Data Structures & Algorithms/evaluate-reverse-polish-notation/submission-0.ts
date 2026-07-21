class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = [];

        for (const token of tokens) {
            if (token === '+' || token === '-' || token === '*' || token === '/') {
                const firstValue = stack.pop();
                const secondValue = stack.pop();

                switch (token) {
                    case "+":
                        stack.push(firstValue + secondValue);
                        break;

                    case "-":
                        stack.push(secondValue - firstValue);
                        break;

                    case "*":
                        stack.push(firstValue * secondValue);
                        break;

                    case "/":
                        stack.push(Math.trunc(secondValue / firstValue));
                        break;
                }
            } else {
                stack.push(parseInt(token));
            }
        }

        return stack.pop();
    }
}
