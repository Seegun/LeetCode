// Задача: https://leetcode.com/problems/filter-elements-from-array/?envType=study-plan-v2&envId=30-days-of-javascript
// Код на сайте:

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    
};


// Моё решение:

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let array = []
    arr.forEach((item, i) => {
        if(fn(item, i)) {
            array.push(item)
        }
    })
    return array;
};


// как решал:
// Создал пустой массив который будет сохранять результат удовлетворяющий условию функции fn
// затем использовал метод forEach для перебора эллементов массива arr внутри сделал проверку  if(fn(item, i)) где fn(item, i) это вызов функции fn с текущим эллементом item
// и его индексом i если условие тру то пушу item в новый масси array  после возвращаю array 
