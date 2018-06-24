/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone (obj) {
  let clone = {};
  for (let key in obj){
    clone[key] = obj[key]
  }
  return clone;
}