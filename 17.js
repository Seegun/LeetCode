// Задача: https://leetcode.com/problems/cache-with-time-limit/?envType=study-plan-v2&envId=30-days-of-javascript
// Код на сайте: 


var TimeLimitedCache = function() {
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

// Моё решение:


var TimeLimitedCache = function() {
    this.cache = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const currentTime = Date.now();
    const expirationTime = currentTime + duration;
    if(this.cache[key] && this.cache[key].expirationTime > currentTime) {
        this.cache[key].value = value;
        this.cache[key].expirationTime = expirationTime;
        return true;
    } else {
        this.cache[key] = { value, expirationTime };
        return false;
    }
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const currentTime = Date.now();
    if (this.cache[key] && this.cache[key].expirationTime > currentTime) {
        return this.cache[key].value;
    } else {
        return -1;
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const currentTime = Date.now();
    let count = 0;
    for (const key in this.cache) {
        if (this.cache[key].expirationTime > currentTime) {
            count++;
        }
    }
    return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

// как решал:
//создал пустой объект cache в который буду сохранять ключи и время жизни 
//в set вычисляю текущее время использую Date.now() и время истечения expirationTime
//дальше идет проверка существует ли ключ key в моем cache если да то проверяю истекло ли время его дейсвия, если же время не истекло то обновляю его значение и время и возвращаю true 
// если же ключа нет или его время истекло создаю новую запись в cache с новыми данными и возвращаю false 
// в методе get проверяю есть ли ключ key в cache если да проверяю не истекло ли время если не истекло и ключ есть возвращаю значение, в обратном случае возвращаю -1
//count считаю количество ключей для которых время жизни не истекло путем перебора cache возвращаю общее кол-во живых ключей
