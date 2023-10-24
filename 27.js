// Задача: https://leetcode.com/problems/compact-object/?envType=study-plan-v2&envId=30-days-of-javascript
// Код на сайте: 

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
  
};

// Моё решение:

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (obj === null) return null;
    if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
    if (typeof obj !== "object") return obj;

    const compacted = {};
    for (const key in obj) {
        let value = compactObject(obj[key]);
        if (Boolean(value)) compacted[key] = value;
    }

    return compacted;
};

// как решал:
// проверяю obj равен ли null если да то верну null тк это fakse 
// проверяю если obj является массивом то применяю фильтрацию массива чтобы удалить ложные значения затем вызываю compactObject рукурсивно для каждого элемента массива
// если obj не объект и не массив то верну само значение 
// если obj явлдяется объектом то создаю пустой объект compacted который будет содержать ключи и значения 
// затем перебираю все ключи исходного obj с помощью for
// для каждого клбча вызываю compactObject рекурсивно для значения связанного с этим ключом 
// после проверяю является ли результат ложный ли он или нет через Boolean(value) если да то ключ не добавляю в compacted 
// возвращаю объект compacted который содержит объект с удаленными ложными ключами и значениями 

