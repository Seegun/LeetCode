// Задача: https://leetcode.com/problems/group-by/?envType=study-plan-v2&envId=30-days-of-javascript
// Код на сайте: 

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

// Моё решение:

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const res = {};

    for (const obj of this) {
        const key = fn(obj);
        if (!res.hasOwnProperty(key)) {
            res[key] = [];
        }
        res[key].push(obj);
    }
    return res;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

// как решал:
// создал пустой объект который будет содержать сгруппированные элементы
// циклом for перебираб элементы массива this 
// для каждого элемента obj вызываю функцию fn(obj) чтобы получить ключ для группировки сохраняю все это в константу key 
// проверяю есть ли уже key в объекте res если нет ключа создаю и связываю его с пустым массивом 
// затем добавляю obj в массив связанный с ключем key используя res[key].push(obj)
// после перебора всех элементов массива возвращаю res который содержит сгрупиированные элементы
