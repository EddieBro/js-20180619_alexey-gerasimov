'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let newArr =  str.match(/[-+]?[0-9]*\.?[0-9]/g)
    .map(function(element){
      if(parseFloat(element)){
        return parseFloat(element);
      } else{
        return ' ';
      }
  })
    .filter(function(element){
      return element !== ' ';
  });
  let min = Math.min(...newArr);
  let max = Math.max(...newArr);
  return {min: min, max: max};
}

