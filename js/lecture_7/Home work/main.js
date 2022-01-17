// //task 1


// 1)
// const inputString = 'But I must explain to you how all this mistaken idea.';
// function findVowelsCount(inputString) {
//   const inputString2 = inputString.toLowerCase();
//   const arrFromStr = inputString2.split('');
//   const mas2 = arrFromStr.filter(function (letter) {
//     return 'aeiouy'.includes(letter)});
//     return mas2.length;
// }
// console.log(findVowelsCount(inputString));
    

// //2) 
// const findVowelsCount = (inputString) => {
//   const arrFromString = inputString.split(' '); //Array.from (inputString)
//   const filteredArray = arrFromString.filter(function (letter) {
//   return 'aeoiuy'.includes(letter.toLowerCase());  //true||false
// });
// // Array.length
//   const result = filteredArray.length;
//   return result;
// };
// console.log(findVowelsCount('Artem'));

// 3)
// const inputString =  'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.';
   
// let arr = inputString.split('');
// let arr2 = arr.filter((elem) => {
// 	  return elem.toLowerCase().includes('e')
//     });
// console.log(arr2.length);


//Task 2

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

//Task 3

//Task 4

// const arrayToFilter = [29, 95, 12, 4, 24, 9];

// let arrFilter = arrayToFilter.filter((elem, index) => {
// 	return elem < 29;
// });

// console.log(arrFilter);