// Задача: https://leetcode.com/problems/add-two-promises/?envType=study-plan-v2&envId=30-days-of-javascript
// Код на сайте: 

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

// Моё решение:

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1,promise2]).then(([response1, response2]) => {
        const sum = response1 + response2
       return sum
    })

};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

// как решал:
// создаю новый промис all чтобы дождаться выполнения 2 промисов 
// в then складываю результат промисов и возвращаю сумму 
