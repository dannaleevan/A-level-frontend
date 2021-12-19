/*
function makeSomeCoolStaff() {
  b++;

  console.log(a); // 1. a = undefined; // var с 13 вылезло вверх
  console.log(b); // 2. b = NaN; (обьяснение: var с 14 вылезло вверх, получилось undefined+1 = NaN)
  console.log(c); // 3. c = 8; +

  if (!a) { //var a - вверху undefined a = undefined => a not false a=true
    var a = 5;
    var b = 4;

    console.log(a); // 4. a = 5; +
    console.log(b); // 5. b = 4; +
    console.log(c); // 6. c = 8; +
  }

  console.log(a); // 7. a = 5; //var вылезло внутри всей функции
  console.log(b); // 8. b = 4; //то же самое что и 21
  console.log(c); // 9. c = 8; +
}

let a = 1;
const c = 8;

console.log(a); // 10. a = 1; + //выполняются вначале 
console.log(b); // 11. b = undefined; + //выполняются вначале 
console.log(c); // 12. c = 8; + //выполняются вначале 

makeSomeCoolStaff();

console.log(a); // 13. a = 1 +
console.log(b); // 14. b = undefined; +
console.log(c); // 15. c = 8; +

var b = 2;  //поднялась вверх
a = 7;

console.log(a); // 16. a = 7; +
console.log(b); // 17. b = 2; +
console.log(c); // 18. c = 8; +

*/
//task 2



// function searchSubstringIndex(initialString, searchingSubstring) {
//   let result;
//   if (initialString.includes(searchingSubstring)) {
//     result = 'include '+ searchingSubstring;
//   } else {
//     result = ' didn\'t include ' + searchingSubstring;
//   };
//   return result;
// }
// console.log(searchSubstringIndex(initialString, 'how'));

//task 3

// const initialString = 'But I must explain to you how all this mistaken idea.';
// function searchSubstringAmount(initialString, searchingSubstring) {
//   let result2;
//   const count = (initialString.match(/I/gi) || []).length;
//   if (count) {
//     result2 = 'I found ' + searchingSubstring +' ' + count + 'times';
//   } else {
//     result2 = 'There is no ' + searchingSubstring;
//   };
//   return result2;
// };

// console.log((searchSubstringAmount(initialString, )));

//initialString.substring(39, 40))

//Принимает аргумент регулярного выражения, он может вырезать все иссходные строки

// const str = 'abcaa';
// const arr = str.split('a');
// const hhh = arr.length - 1;
  
  //arr.filter(function (letter) {
  //return 'a'.includes();
  
// console.log(hhh);