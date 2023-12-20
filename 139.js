https://leetcode.com/problems/word-break/submissions/1121803895/?envType=study-plan-v2&envId=top-interview-150


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    const memo = new Map();

    function canBreakFrom(start) {
        if (start === s.length) {
            return true;
        }

        if (memo.has(start)) {
            return memo.get(start);
        }

        for (let end = start + 1; end <= s.length; end++) {
            const prefix = s.substring(start, end);

            if (wordSet.has(prefix) && canBreakFrom(end)) {
                memo.set(start, true);
                return true;
            }
        }

        memo.set(start, false);
        return false;
    }

    return canBreakFrom(0);
};
