// Задача: https://leetcode.com/problems/return-length-of-arguments-passed/?envType=study-plan-v2&envId=30-days-of-javascript
// Код на сайте:

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
	
};

/**
 * argumentsLength(1, 2, 3); // 3
 */


// Моё решение:

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
	return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */


// Как решал:
// Использую .length которая возвращает длину массива 
