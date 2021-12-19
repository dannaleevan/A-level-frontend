// //task 1

//1)
// const inputString = 'But I must explain to you how all this mistaken idea.';
// const inputString2 = inputString.toLowerCase();
// const findVowelsCount = inputString2 => Array.from(inputString2)
//   .filter(letter => 'aeiou'.includes(letter)).length;
// console.log(findVowelsCount(inputString2));

// 2)
// const inputString = 'But I must explain to you how all this mistaken idea.';
// function findVowelsCount(inputString) {
//   const inputString2 = inputString.toLowerCase();
//   const arrFromStr = inputString2.split('');
//   const mas2 = arrFromStr.filter(function (letter) {
//     return 'aeiouy'.includes(letter)});
//     return mas2.length;
// }
// console.log(findVowelsCount(inputString));
    
// // 3)
// const inputString3 = 'But I must explain to you how all this mistaken idea.';
// function findVowelsCount2(inputString3) {
//   return inputString3.match(/[aeiou]/gi).length;
// }
// console.log(findVowelsCount2(inputString3));

//4) 

const findVowelsCount = (inputString) => {
  const arrFromString = inputString.split(' '); //Array.from (inputString)
  const filteredArray = arrFromString.filter(function (letter) {
  return 'aeoiuy'.includes(letter.toLowerCase());  //true||false
});
// Array.length
  const result = filteredArray.length;
  return result;
};
console.log(findVowelsCount('Artem'));

//task 2

// function joinObjects(name1, name2) {
//   const students = [];
//   const student1 = {name1: 'Hanna', age: 17 };
//   const student2 = {name2: 'Ivan', age: 12};
//   const changeSt1 = Object.entries(student1);
//   const changeSt2 = Object.entries(student2);
//   const push1 = students.push(changeSt1);
//   const push2 = students.push(changeSt2);
//   return students;
// }
// console.log(joinObjects('name1', 'name2'));

