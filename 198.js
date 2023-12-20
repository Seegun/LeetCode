https://leetcode.com/problems/house-robber/submissions/?envType=study-plan-v2&envId=top-interview-150


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let prevMax = 0;
    let currMax = 0;

    for (let num of nums) {
        let temp = currMax;
        currMax = Math.max(currMax, prevMax + num);
        prevMax = temp;
    }

    return currMax;
};
