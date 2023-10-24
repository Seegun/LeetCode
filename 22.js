// Задача: https://leetcode.com/problems/array-prototype-last/?envType=study-plan-v2&envId=30-days-of-javascript
// Код на сайте: 

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

// Моё решение:

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    if (this.length == 0) {
        return -1;
    }
    return this.pop()
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

// как решал:
// проверяю если массив пуст верну -1 
// если не пуст то методом pop удаляю и возвращаю последний элмнт массива таким образом возвращаю последний эл массива
