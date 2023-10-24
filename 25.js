// Задача: https://leetcode.com/problems/join-two-arrays-by-id/?envType=study-plan-v2&envId=30-days-of-javascript
// Код на сайте: 

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
};

// Моё решение:

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const res = {};
    for (let i = 0; i < arr1.length; i++) {
        res[arr1[i].id] = arr1[i];
    }
    for (i = 0; i < arr2.length; i++) {
        if (res[arr2[i].id]) {
            for (const key in arr2[i]) res[arr2[i].id][key] = arr2[i][key];
        } else {
            res[arr2[i].id] = arr2[i];
        }
    }
    return Object.values(res);
};

// как решал:
//создал пустой объект res который будет использоваться для хранения объектов из массивов сгруппированных по их id
// перебираю эллементы arr1 с помощью цикла for и для каждого элемента добавляю его в объект res по ключу id, это создает объект в котором ключами являются id а значения объекты из arr1
// затем перебираю элементы arr2 также с помощью for проверяю каждый элемент существует ли уже объект с таким же id в res т.е в arr1
// если существует объединяю свойсвта объекта из arr2 с соответсвующим объектом из arr1
// если объект с данными id отсутсвует в arr1 то добавляю его в res 
// возвращаю массив созданыый на основе значений объекта res с помощью Object.values(res), объединенных и модифицированных объектов в порядке по id 
