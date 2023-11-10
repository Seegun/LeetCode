https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75

Решение

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let length1 = str1.length;
    let length2 = str2.length;

    if (str1 + str2 !== str2 + str1) {
        return '';
    }

    function gcd(a, b) {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    }

    let gcdLength = gcd(length1, length2);
    return str1.slice(0, gcdLength);
};
