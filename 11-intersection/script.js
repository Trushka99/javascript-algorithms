/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
    let res =[]; //итоговый массив

    arr1.every(function(a){
      if (arr2.includes(a) && !res.includes(a)){
        res.push(a);
      }      
      return res;
    })   

return res;
}
// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 1, 5, 4, 2], [8, 91, 4, 1, 1, 3])); // []