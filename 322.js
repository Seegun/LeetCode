https://leetcode.com/problems/coin-change/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    function makeChange(remainingAmount, memo) {
        if (remainingAmount === 0) {
            return 0;
        }
        if (remainingAmount < 0) {
            return -1;
        }
        if (memo[remainingAmount]) {
            return memo[remainingAmount];
        }

        let minCoins = Infinity;

        for (let coin of coins) {
            const result = makeChange(remainingAmount - coin, memo);
            if (result >= 0 && result < minCoins) {
                minCoins = result + 1;
            }
        }

        memo[remainingAmount] = (minCoins === Infinity) ? -1 : minCoins;
        return memo[remainingAmount];
    }

    const memo = [];
    return makeChange(amount, memo);
};
