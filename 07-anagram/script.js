/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
if (str1.length !== str2.length) {
    return false
}
const str1ToLowerCase = str1.toLowerCase()
const str2ToLowerCase = str2.toLowerCase()
const newstr1 = str1ToLowerCase.split('').sort().join('');
const newstr2 = str2ToLowerCase.split('').sort().join('');
const result = (newstr1 === newstr2);
return result
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false