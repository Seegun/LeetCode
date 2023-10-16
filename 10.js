// Задача: https://leetcode.com/problems/allow-one-function-call/?envType=study-plan-v2&envId=30-days-of-javascript
// Код на сайте: 

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    
	return function(...args){
        
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

// Моё решение:

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let indexFn = 1;
	return function(...args){
      if (indexFn) {
        indexFn--;
        return fn(...args);
      } else {
        return undefined;
      }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

// Как решал:
// объявил переменную indexFn и присвоил ей значение 1 
// Переменная для отслеживания кол-ва раз которое можно вызвать функцию fn 
// внутри фунции которая принимает любое кол-во аргументов с помощью ...args
// делаю проверку если indexFn === 1 то уменьшаю значение до 0 
// и вызываю fn с переданными аргументами результат возвращаю 
// если же indexFn равно 0 то возвращаем undefined 
