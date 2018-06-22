'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let stepOne = str.replace(/[^a-zA-Z0-9!.-]/g, ' ');
  let stepTwo = stepOne.replace(/\s+/g, ',');
  let newArr = stepTwo.split(',');

  let min = Math.min(...newArr);
  let max = Math.max(...newArr);
  return {min: min, max: max};
}

