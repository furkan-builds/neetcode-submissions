class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const characterSet = new Set();

        let maxCount = 0;
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            while (characterSet.has(s[right])) {
                characterSet.delete(s[left]);
                left++;
            };

            characterSet.add(s[right]);
            maxCount = Math.max((right - left + 1), maxCount);
        }

        return maxCount;
    }
}
