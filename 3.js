// Задача: https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript

// Код который был на сайте:

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    return {
        
    };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

 
// Моё решение: 

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    return {
        toBe: function (expected) {
            if (val !== expected) {
                throw new Error('Not Equal');
            }
            return true;
        },
        notToBe: function (expected) {
            if (val === expected) {
                throw new Error('Equal');
            }
            return true;
        },
    };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
 
// Как решал:
// Так ну тут как и просили создал 2 функции которые возвращают true 
// в 1 функции сравнивает значение переданное в expect с ожидаемым значением expected если они равны то true 
// если же нет ошибка 
// в 2 функции сравнивает значение переданное в expect с ожидаемым значением expected если они равны то ошибка и если не равны то true

