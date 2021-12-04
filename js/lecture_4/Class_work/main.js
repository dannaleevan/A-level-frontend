// Operators and type coercion

// 1. Operators 

// Operand1 + (operator) Operand2

// // Постфикс и префикс операторы

// // Виды операторов: арифметические, логические, присвоение, 
// // арифметическией:
// // Remainder % - остаток от числа;
// // Increment++
// // Decrement--
// // Exponention ** - возведение в степень

// const x = 5;
// const y = X + 1; //6
// const z = ++x; //6

// const e = x - 1; //4 // --x;

// let x = 5;
// console.log(x++);//5
// console.log(x);//6
// console.log(++x);//7

// let a = 1;
// a += 5

// let a = 5;
// a = a + 10;
// a += 10;
// console.log(a); //10

// a = a -3
// a -= 3;

// 3 == 3; //true  1 == 3 // false

// 3 != 3 false противоположное 

// const a = true;
// console.log(!a); false

// == не строгое равенство
// !== не строкого неравенство, не сравнивает типы данных 
// === строгое равенство, сравнивает и типы данных
// Ex: 3 === '3' //false

// Логические операторы  - преобразовывает в Boolen тип

// Logical AND  && - expr && expr // true
// Если хотя бы одно false - то все будет false

// Logical OR || expr || expr
// Если хотя бы одно да, то я тебя пропущу, не будет запинатся,
//     если два false, то все будет false

// Logical NOT!expr
// Переворачивает наоборот
// const a = true;
// const b = false;
// console.log(!a); // false


// //2. Type coercion  //преобразование типов данных

//String(56)  //'56'  массив к пустой строке 
// console.log(typeof (String(77)));
// console.log(String({ a: 5, b: 10 }));
//(String{}); // [object Object];

// function a () {
//     console.log(5);
//     return 6
// }
// console.log(String(a())); //undefined 

//это то же самое:
// console.log(String(fanction(){
//     console.log(5);
//     })
// );
// console.log(String([1, 2, 3])); //1,2,3

// Number()  либо номер либо NaN, в js десятичные записываются через запятую 110.9,
    //    Number(fanction() {}) //NaN
            // Number([] //0)
            // Number([8]); //8 
            // Number([1,2]); //Nan
            // Number ('') ; //0
            // Number {}; //NaN


// Boolean() true = 1, false = 0 все кроме пустой строки, 0, Nan, undefined - false валидное - это правдивые


//3.

// Если мы что-то записываем с помощью логическое  && and ||
// Обьекты всегда true
//Преобоазование с опартором '+' всегда преобразовываются к строкe, если один из операндов строка;


//  const a = 5;
// const b = 10;
// console.log(!a); преобразoвание к Boolean типам  //не true , значит false

// Всегда приобразовывает к Number если исспользуются 
// арифметические операторы(-, /, *), кроме +

//унарные операторы --b ++

//Операторы сравнения < , > , <=, =< - преобразовывает к числу

//Унарные операторы, приводят к номеру undrfined - NaN = number

// При не строгом сравнении приводит к number;

// a.valueOf 
// a.toString - насильно перевести к другому типу данных
    

