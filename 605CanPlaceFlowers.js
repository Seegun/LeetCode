https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let counter = 0;
    for (let i=0; i < flowerbed.length; i++) {
      if(flowerbed[i] === 0){
        let previous = flowerbed[i-1] === 0 || flowerbed[i-1] === undefined;
        let next = flowerbed[i+1] === 0 || flowerbed[i+1] === undefined;
          if(previous && next) {
            counter++
            i++
          }
      }
    }
  return counter >= n
};
