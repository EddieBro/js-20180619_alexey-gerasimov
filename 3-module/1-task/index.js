/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let result = '';
  data.filter(function (user) {
    if (user.age <= age) {
      result += `${user.name}, ${user.balance}\n`;
    }
  });
  result = result.replace(/\n$/, "")
  console.log(result);
  return result;
}


