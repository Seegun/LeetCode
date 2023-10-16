// Задача: https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript
// Код на сайте:

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// Моё решение:


/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let val = init
    return {
        increment: () => ++val,
        decrement: () => --val,
        reset: () => val = init,
    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// Как решал:

// ну тут все давольно просто 3 функции 
// инкремент префиксный который сразу возвращает готовое значение +1 
// префиксный декремент который сразу возвращает готовое значение -1
// и ресет который возвращает первоначальное значение инт 
