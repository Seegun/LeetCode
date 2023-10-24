// Задача: https://leetcode.com/problems/sort-by/?envType=study-plan-v2&envId=30-days-of-javascript
// Код на сайте: 

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
  

};

// Моё решение:

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a,b) => fn(a) - fn(b));

};

// как решал:
// отсортировал через метод sort чтобы возвращало отсортированные результат в порядке возрастания
