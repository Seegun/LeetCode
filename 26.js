// Задача: https://leetcode.com/problems/flatten-deeply-nested-array/?envType=study-plan-v2&envId=30-days-of-javascript
// Код на сайте: 

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

var flat = function(arr, depth) {
};

// Моё решение:

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

var flat = function(arr, depth) {
  const currentDepth = arr.map(item => [item, depth]);
  const result = [];

  while (currentDepth.length > 0) {
    const [item, depth] = currentDepth.pop();

    if (Array.isArray(item) && depth > 0) {
      currentDepth.push(...item.map(subItem => [subItem, depth - 1]));
    } else {
      result.push(item);
    }
  }

  return result.reverse();
};

// как решал:
// создал currentDepth тут хранится элементы массива и их текущая глубина 
// создал пустой массив result который будет содержать развернутый одномерный массив
// заполняю начальное состояние currentDepth проходя по элементам входного массива arr, каждый элемент item из arr добавляется в currentDepth с указанием текущей глубины depth
// запускаю цикл while пока currentDepth не будет пуст 
// на каждой итерации цикла извлекаю последний элемент из currentDepth представленный как [item, depth]
// проверяю является ли элемент item массивом и текущая глубина depth больше нуля если да то item развертывается и его подэлементы добавляются в currentDepth c evtymutyyj uke,byjq 
// если item не массив или тек depth равен нулю то элемент добавляется в итоговый массив result 
// по завершению цикла while итоговый массив result содержит развернутый многомерный массив но в обратном порядке 
// возвращаю результат переварачивая массив с помощью reverse() что бы вернуть в правильном порядке
