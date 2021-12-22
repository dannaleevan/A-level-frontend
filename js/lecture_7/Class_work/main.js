//__Array__

/*function name(a, b) {
    //
    return a + b
}

const name2 = (a, b) => {
    //
    return a + b
}

const name3 = (a, b) => a + b
*/

//Array method

//toString(), join() - массив склеить в строку
    //arr.join('.'); // '1.Jon.Kim'
//

// let arr = [1, 2, 3, 4];
// console.log(arr.toString());

//unshift(), push  //add elements  //не вовзращает элементы

//shift() //удаляет с начала элемент, pop() - удаляет с конца и возвращает их//delete elements

// console.log(arr.push(5));

// console.log(arr);

//concat() //создает третий массив и обеденит два предыдущие

// let arr1 = [1];
// let arr2 = [2];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);

//или  console.log([...arr1, ...arr2]);

//slice() //вырезать кусок 1арг откуда вырезать 2 до куда (не включительно), можно и отрицательные аргументы, будет отрезать с конца

//splice(2, 3)   //с какого элемента 2 и сколько вырезать 3
    //splice(2, 0, 'a', 'b')  //добавление элем. со второго ( 0 значит что мы ничего не вырезаем)

// Поиск по массиву

//includes()  !!!

//find()

/*
const arr1 = ['a', 'b', 'c'];

const resultIndex0 = arr1.indexOf('b');    //функции которые будут вычитыватся называются callback им не готовые параметры задаются, а требуется иссчисление
const resultIndex = arr1.find(function (element, index) {
    return index >= 2;
}); //callback   то же самое const resultIndex1 = arr1.find((element, index) => index > 2);

console.log(resultIndex0);
console.log(resultIndex);
*/

//replace();

//Checking arrays

//some   !!! // true     если хоть один элемент true

// let arr = [7, 8];
    //let result = arr.some((element, index)) => element % 4 == 0);

//every !!!
     //let result = arr.every((element, index)) => element < 10 == 0); //true


// Sort arrays

//sort() - //в порядке возрастаение кода по алфавиту (по порядку)

/*
let a = [3, 5, 19];
a.sort();  !!!
console.log(19, 3, 5)

a.sort((el1, el2) => {
    if (el1 = el2) return 0;
    else if (el1 > el2) return 1;
    else if (el1 < el2) return -1;
});
console.log(a); //3, 5, 19

a.sort((el1, el2) => el1 - el2);
console.log(a); //3, 5, 19 
*/

//most used

//forEach()  -  !!!
/*
const arr = ['an', 'ba', 'cf'];

function printf(a, b, c) {
    console.log(`a: ${a}, b: ${b}`); //шаблонная строка ${} - сюда суем переменную
}                                       // a=element b=index c = сам масив  //эта вся движуха для массивов

arr.forEach((element, index)=> console.log (`a: ${element}, b: ${index}`));
*/

//map()  !!!

// let arr = [1, 2];  //преображаем массив

// let result = arr.map((element,index) => element +10);
// console.log(result);//

//чтоб сохранить обьект

// const arr = ['a', 'b'];
// const result = arr.map((element, index) => ({ name: element, id: index }));
// console.log(result);

//filter()     !!! возвращает толко не что подходят под условие

//...вверху обект 

// const arr = [    //???
//     {
//     name: 'i',
//     age: 12,
//     isStudent: 'yes'
//     },
//     {
//     name: 'd',
//     isStudent: 'yes'
//     }
// ];

// const students = arr.filter((element) => element.isStudent);
// console.log(students);

//reduce()  //аккамулирует предыдущее значение  ???

const arr = [23, 'fhfh', true, { dom: 'google' }];
function one(first) {
    let two = arr;
    return two.length;
}
one(arr);