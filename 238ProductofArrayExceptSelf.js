https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=leetcode-75


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;

    const leftProducts = nums.reduce((acc, num, index) => {
        if (index === 0) {
            acc.push(1);
        } else {
            acc.push(acc[index - 1] * nums[index - 1]);
        }
        return acc;
    }, []);

    const rightProducts = nums.reduceRight((acc, num, index) => {
        if (index === n - 1) {
            acc.unshift(1);
        } else {
            acc.unshift(acc[0] * nums[index + 1]);
        }
        return acc;
    }, []);

    const result = nums.map((num, index) => leftProducts[index] * rightProducts[index]);

    return result;
};
