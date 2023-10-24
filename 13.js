// Задача: https://leetcode.com/problems/sleep/?envType=study-plan-v2&envId=30-days-of-javascript
// Код на сайте: 

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

// Моё решение: 

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), millis)
    })
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

// как решал:
// так ну тут все просто создал промис и через millis вывел результат
