https://leetcode.com/problems/powx-n/submissions/1121788074/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
    if (n === 0) {
        return 1;
    }

    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    const temp = myPow(x, Math.floor(n / 2));

    if (n % 2 === 0) {
        return temp * temp;
    } else {
        return x * temp * temp;
    }
}
