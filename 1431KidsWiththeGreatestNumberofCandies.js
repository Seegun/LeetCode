https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75


/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    let maxCandies = Math.max(...candies);

    let arraySum = candies.map((candi)=>{
      return (candi + extraCandies)
    });

    arraySum.forEach((candi)=> {
      if(candi >= maxCandies) {
         result.push(true);
      } else {
        result.push(false);
      }
    })

    return result;
};
