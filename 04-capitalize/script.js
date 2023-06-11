/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    const newstr = str.split(' ');
    const res=[];
    newstr.forEach(function(word){
      const firstLetter = word.slice(0,1);
      res.push( firstLetter.toUpperCase() + word.slice(1) );
    })
    
    return res.join(' ');  

  }

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит