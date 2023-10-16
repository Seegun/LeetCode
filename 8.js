// Задача: https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript
// Код на сайте:

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
	return function(x) {
        
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */


// Моё решение:

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    let reverseFunction = functions.reverse()

	return function (x) {
        let testValue = x
        reverseFunction.forEach((item) => (testValue = item(testValue)));
        return testValue;
    };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */


1 variant 


/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
   
	return function (x) {
        return functions.reduceRight((accumulator, item) => item(accumulator), x);
    };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */ 

variant 2


// Как решал:
// Использую reduceRight для последовательного применения функции из массива functions к аргументу x 
// так как reduceRight начинает с права на лево то он отлично подходит для решения задачи 
// возвращаем x после применения всех функций из массива функций 

