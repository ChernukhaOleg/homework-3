/*
 1. Напишите функцию которая принимает в качестве аргумента массив
 и элемент массива и добавляет элемент в конец массива
 */
let arr =[];
function addToArray(arr,newElement) {

    arr.push(newElement) ;
    alert(arr.length)
}

addToArray(arr,5);
addToArray(arr,'hello');
addToArray(arr, ['elem1', 'elrm2']);

console.log(arr);

/////////////////////////////////////////////////////////////////
/*
 2. Напишите функцию которая получает 3 параметра и возвращает объект типа:
 {
 argument1: param1,
 argument2: param2,
 argument3: param3,
 }
 */
let user = {name: 'Oleg', age:28};
function simpleObjectGenerator(param1, param2, param3){
    var obj = {
        argument1: param1,
        argument2: param2,
        argument3: param3,
    };
    return (obj);

}
console.log(simpleObjectGenerator(253, 'Hello',user ));
///////////////////////////////////
/*
 3.  Напишите функцию которая принимает 3 аргумента, третий аргумент - это объект.
 Функция создает объект где ключ это первый аргумент, а значение - второй аргумент
 и добавляет свойство "name" из объекта и возвращает данный новый объект
 */
var myName = { name: 'Oleg' };
function addNameToUser(key,value){
    var myObj= {
        name: myName.name,
        [key]: value,
    }
    return myObj;
}
console.log(addNameToUser('family','Chernukha',myName));
console.log(myName);

///////////////////////////////////////////////////

/*
 -> @@ SUPER
 Напишите функцию, которая будет возвращать 'Fizz' если передаваемый параметр кратен 3,
 'Buzz', если передаваемый параметр кратен 5, 'FizzBuzz' - если параметер кратен 3 и 5
 Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
 */
function fizzBuzz(num){
    if (num % 3 === 0 && num % 5 === 0 ){
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(num);
    }

};
fizzBuzz(1); // 1
fizzBuzz(2); // 2
fizzBuzz(3); // 'Fizz'
fizzBuzz(5); // 'Buzz'
// ...
fizzBuzz(15); // 'FizzBuzz'
fizzBuzz(21); // 'Fizz'