// Задача: https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/?envType=study-plan-v2&envId=30-days-of-javascript
// Код на сайте: 

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

// Моё решение:

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completedCount = 0;

        if (functions.length === 0) {
            resolve(results);
            return;
        }

        functions.forEach((func, index) => {
            func().then(result => {
                results[index] = result;
                completedCount++;

                if (completedCount === functions.length) {
                    resolve(results);
                }
            }).catch(reason => {
                reject(reason);
            });
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

// как решал:
// возвращаю промис 
//создаю внутри промиса константу с результатами массивчик и переменную для подсчета выполненых функций
// если массив функций пуст то возращаю пустой массив в результатов в результат
// потом перебираю массив функций forEach для каждой функции func вызываю func() и использую метод then и catch для обработки спешного разрешения или отклонения обещания возвращенного из func
// если обещание разрешается успешно сохраняю результат в массив results под соответсвующим индексом и увеличивю completedCount 
// если кол-во завершенных функций равно общему кол-ву функций в массиве функций то все функции завершились и я передаю массив results в resolve
// если же обещания отклоняются я передаю причину в reject
