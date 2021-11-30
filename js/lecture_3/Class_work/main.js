//1)String
// const myName = 'Daria';

// const str1 = "My name is " + myName + ", I'm learning JS!";
// const str2 = 'My name is ' + myName + ', I\'m learning JS!';
// const str3 = `My name is ${myName}, I\'m learning JS!`; //Temple String шаблонные строки, позволяют записывать переменный через особы синтаксиис без + +, тут есть особые ковычки ``

// console.log(str1);
// console.log(str2);
// console.log(str3);

//2) Number       не больше чем (2(53) -1) 
//                 Number.isSafeInteger(32); - проверка макс числа, которое можно хранить
                    
// const number1 = 5;
// const number2 = 10.5;
// const number3 = -7;

//2.1) Infininty (бесконечность) если мы 1 / 0 разделими
//                     alert(1 / 0); - вывод окна

//2.2) Nan - not a number

//3) BigInt - особый вид Number для огромных чисел 
//    const someBigInt =BigInt("74349384934885385385803");
// const BigInt = 74349384934885385385803n;

//4)Booling type true/false

// const isStudent = true;
// console.log(isStudent);

//5) 'Null' type - намеренно говорим, что он пустой

//6) Undefined type

//7) Object type  - сложный тип

// Можно было вот так записать
//const catName = 'Grey';
// const catAge = 3;
// const isCatMale = true;

// function catSay() {
//     alert('Meowww');
// }
// console.log(`Cat name is ${catName}, it's ${catAge}`);

// A вот это уже Объект
// const cat = {
//     name: 'Gray',
//     age: 3,
//     isMale: true,
//     say: function () {
//         alert('Meowww');
//     }
// };
// // console.log(`Cat name is ${cat}`);

// cat.say(); //вызвать alart - функцию

// const sudentAlevel = {
//     name: 'Daria',
//     age: 28,
//     isStudent: true,
//     greeting: function () {
//         alert(`Hello,${sudentAlevel.name}`);
//     }
// };

// sudentAlevel.greeting();

//8) Simbol

//Проверка типа переменной, двумя вариантами:
// typeof 'foo';
//typeof 25;
//typeof Symbol('id');
//typeof null - object;
//функция хоть и является обьектом, но будет выдавать function





