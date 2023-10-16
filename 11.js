// Задача: https://leetcode.com/problems/memoize/?envType=study-plan-v2&envId=30-days-of-javascript
// Код на сайте:

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    
    return function(...args) {
        
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */


// Моё решение:

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const array = []; //массив с кешем

  return function (...args) {
    for (const arr of array) { // начало цикла для проверки array
      if (arr.args.every((item, index) => item === args[index])) { // проверяем аргументы записанные в array и аргументы которые приняли сейчас
        return arr.result; // возвращаем закешированный результат
      }
    }
// если же не прошла проверка то вызываем fn(...args) записываем в кеш и показываем результат
    const result = fn(...args);
    array.push({ args, result });
    return result;
  };
}



/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */

// как решал:
// писал прям на сайте в комментах смотри выше
