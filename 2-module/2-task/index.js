/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */

let obj = {
  test: '1',
  options: {
    color: 'red'
  }
};

let arrayRes = [];
let resultString = '';
function find(obj, value) {
  for (let key in obj) {
    if(obj[key] === value){
      resultString += key;
      console.log(resultString);
      return resultString;
    }
    else if(typeof(obj[key]) === 'object'){
      resultString += key + '.';
      return find(obj[key], value);
    }
    else{
      return null
    }
  }
}

find(obj, 'red');