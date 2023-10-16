// Задача: https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript 
// Код на сайте: 
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    
};

// Моё решение:

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let array = []
    arr.forEach((item, i) => {
      array.push(fn(item, i));
    });
    return array;
};

// как решал:
// Создал пустой массив который будет сохранять результат выполнение фунцкий fn к эллементам массива arr
// затем использовал метод forEach для перебора эллементов массива arr и выполнению фунции fn к каждому эллементу 
// затем пушу в новый массив array и возвращаю его
