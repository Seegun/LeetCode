https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75


Решение

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let word3 = [];
    let maxWord3 = Math.max(word1.length, word2.length)
    for (let i = 0; i < maxWord3; i++) {
        if(i < word1.length) {
            word3.push(word1[i])
        }
        if(i < word2.length) {
            word3.push(word2[i])
        }
    }
    let str = word3.join('')
    return str
};
