https://leetcode.com/problems/letter-combinations-of-a-phone-number/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits || digits.length === 0) {
        return [];
    }

    const digitToLetters = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    function generateCombinations(currentIndex, currentCombination) {
        if (currentIndex === digits.length) {
            result.push(currentCombination);
            return;
        }

        const currentDigit = digits[currentIndex];
        const letters = digitToLetters[currentDigit];

        for (let i = 0; i < letters.length; i++) {
            generateCombinations(currentIndex + 1, currentCombination + letters[i]);
        }
    }

    const result = [];
    generateCombinations(0, '');

    return result;
};
