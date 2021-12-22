//Conditionals
//1. If - else

// if (condition /*true*/) {
//   /*some code*/ console.log('test');
// }

// const num = 3;
// if (number >= 4) {
//   console.log('good');
// } else {
//   console.log('bad');
// }

// const test1 = 3;
// const test2 = 5;
// const isLogToConsole = false;
// if (test1 < test2 && isLogToConsole && true || 10) {
//   console.log('yes');
// } else if (num1===nam2){
//   console.log('wow');
// } else {
//   console.log('no');
// }

//switch

// switch (condition) {
//   case value1:
//     ...
//     break;
//   case value2:
//     break;
//   default:
//     ...
// }

// const number = 4;

// switch (number) {
//   case 5:
//     console.log('excellent');
//     break;
//   case 4:
//     console.log('good');
//     break;
//   case 3:
//     console.log('norm');
//     break;
//   case 2:
//     console.log('bad');
//   default:
//     console.log('offle');
// }

//Ternary operator

//conditional ? value : value2;

// let a = -3;
// let b;

// if (a > 0) {
//   b = 10;
// } else {
//   b = 1;
// }
// console.log(b);

// Тернарный сразу возвращает 

// let a = -3;
// let b = (a > 0) ? 10 : 1; //если а меньше 0 то выводится 1
// console.log(b);

// const isOnline = true;

// // isOnline ? console.log('Hello') : console.log('User is offline')  //? = true , if  else : = false 
// const status1 = isOnline ? 'Hello' : 'User is offline';  //? = true , if  else : = false 
// console.log(status1);

// Loops - циклы

//While 

// let count = 5;
// while (count /*condition*/) {
//   console.log('count: ', count--); //repeat some code //true=5, 4, 3, 2, 1    0=false  итерация - повторение цикла
// }

//Do...while

// let count = 5;
// do {
//   console.log(count--);//code
// } while (count>10/*condition*/);   //сработает хотя бы один раз до наступления услович
// //result:5

//For   - перебор массива
// let arr = [1, 2, 3, 4, 5, 6]
// for (let i = 0; i < arr.length; i++) /*inital data изначальные данные, condition, action after cycle что делать после каждой итерации)
// i меньше чем длинна массива  i++ увеличиваем на 1*/  {
//   if ((i + 1) % 2 == 0) { //repeat some code
//     console.log(arr[1]);
//   }
// }

// let arr = [1, 2, 3, 4, 5, 6]
// for (let i = arr.length; i >= 0; i--) {    //обратный порядок
//   if ((i + 1) % 2 == 0) { 
//     console.log(arr[i-1]);
//   }
// }
//result 2 4 6

// let arr = [1, 2, 3, 4, 5, 6]          //записали функцией
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[1]);
// }
// arr.forEach((el) => console.log(el));


//вкладываем длинну масива в переменную

// / let arr = [1, 2, 3, 4, 5, 6]          //записали функцией
// for (let i = 0; i < arr.length; i++) {
//  console.log(arr[1]);

//Добавь сюда
// let arr = [1, 2, 3, 4, 5, 6]          
// for (let i = 0, len = arr.length, c =100; i < len && true; i++, b+=i){  //через && и || можно записать несколько условий
//   console.log(arr[1]);
// }

//For ...of  //перебор массива каждого элемента То жу самое что и forEach
// let arr = [1, 2, 3, 4, 5, 6];
// for(let el of arr) {
//   console.log(el);
// }

//For...in    //работает с обектами

// for (property in onbject) {
//   //repeat some code
// }

// const months = {
//   1: 'January',
//   2: 'February',
//   12:'December'
// }
// for (let mounth in months) {
//   console.log('Month name: ' + months[mounth]);
//}

//Continue 
