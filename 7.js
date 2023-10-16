// Задача: https://leetcode.com/problems/array-reduce-transformation/?envType=study-plan-v2&envId=30-days-of-javascript
// Код на сайте: 
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    
};
// Моё решение:

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
 
var reduce = function(nums, fn, init) {
    let accum = init
    nums.forEach( i => { accum = fn(accum,i)
  });
  return accum
};

// как решал:
// создал переменную accum и присвоил ей начальное значение init  эта переменная будет хранить в себе накапившийся результат сокращения 
// использую forEach для перебора элементов массива nums
// получается что внутри forEach для каждого элемента обновляю значение accum применяя функцию fn(accun, i) потом возвращаю значение accum 
