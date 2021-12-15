//task 1

//1)
const inputString = 'But I must explain to you how all this mistaken idea.';
const inputString2 = inputString.toLowerCase();
const findVowelsCount = inputString2 => Array.from(inputString2)
  .filter(letter => 'aeiou'.includes(letter)).length;
console.log(findVowelsCount(inputString2));


//2)
const inputString3 = 'But I must explain to you how all this mistaken idea.';
function findVowelsCount2(inputString3) {
  return inputString3.match(/[aeiou]/gi).length;
}
console.log(findVowelsCount2(inputString3));

//task 2

