class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];
        const dictionary = new Map();

        dictionary.set(")", "(");
        dictionary.set("}", "{");
        dictionary.set("]", "[");

        for (const character of s) {
            if (dictionary.has(character)) {
                if (stack.pop() !== dictionary.get(character)) {
                    return false
                }
            } else {
                stack.push(character);
            }
        }

        return stack.length === 0;
    }
}
