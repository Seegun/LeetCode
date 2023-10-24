// Задача: https://leetcode.com/problems/debounce/?envType=study-plan-v2&envId=30-days-of-javascript
// Код на сайте: 

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    return function(...args) {
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */

// Моё решение:

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeOutId;
    return function(...args) {
        clearTimeout(timeOutId);
        timeOutId = setTimeout(()=> {
            fn(...args);
        }, t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */

// как решал:
// создал переменную timeOutId которая будет отслеживать задержку
// отменяю через clearTimeout(timeOutId) таймер предыдущий если он был уже запущен 
// затем устанавливаю новый таймер через setTimeout который вызывает fn(...args) после задержки t 
