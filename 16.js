// Задача: https://leetcode.com/problems/promise-time-limit/?envType=study-plan-v2&envId=30-days-of-javascript
// Код на сайте: 

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
	return async function(...args) {
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

// Моё решение:

  /**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
	return async function(...args) {
       const slow = new Promise((resolve, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t);
        });
        const fast = fn(...args)
        const result = await Promise.race([fast, slow]);
        return result
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

// как решал:
//создаю 2 обещания slow и fast 
// slow будет отклонено с сообщением 
//fast выполняет fn(...args)
// затем использую promise.race для того чтобы ждать выполнение одного из обещаний если фаст то выдаст результат если слов выдаст ошибку
