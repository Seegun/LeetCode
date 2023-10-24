// Задача: https://leetcode.com/problems/chunk-array/?envType=study-plan-v2&envId=30-days-of-javascript
// Код на сайте: 

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
};


// Моё решение:

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const res = [];
    
    for(let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size))
    }
    return res;
};


// как решал:
// создаю пустой массив res 
// через цикл for перебираю эллементы исходного массива arr начинаю с 0 и увеличиваю i на size на каждой итерации
// внутри цикла использую метод slice для создания подмассивов передаю i как начало и i+size как конечный индекс для slice 
// это создает поддмасив с индекса i и включая следующие size элмнт
// закидываю это все в свой массив res через push тем самым поочередно создаю и добавляю части исходного массива в мой массив 
// по завершению цикла возвращаю массив res 
