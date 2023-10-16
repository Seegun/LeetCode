// Задача: https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript
// Код с сайта:
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */


// Моё решение:

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        return n++
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

// Как решал:

// воспользовался постфиксным инкрементом для того чтобы возвращала сначала знаение с которого стартуем потом делала +1 
