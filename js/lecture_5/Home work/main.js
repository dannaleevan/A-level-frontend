function makeSomeCoolStaff () {
  b++;

  console.log(a); // 1. a = 1; - undefined
  console.log(b); // 2. b = undefined; - NaN
  console.log(c); // 3. c = 8; +

  if (!a) {
    var a = 5;
    var b = 4;

    console.log(a); // 4. a = 5; +
    console.log(b); // 5. b = 4; +
    console.log(c); // 6. c = 8;
  }

  console.log(a); // 7. a = 1; -5
  console.log(b); // 8. b = undefined; -4
  console.log(c); // 9. c = 8; +
}

let a = 1;
const c = 8;

console.log(a); // 10. a = 1; +
console.log(b); // 11. b = undefined; +
console.log(c); // 12. c = 8; +

makeSomeCoolStaff();

console.log(a); // 13. a = 1 +
console.log(b); // 14. b = undefined; +
console.log(c); // 15. c = 8; +

var b = 2;
a = 7;

console.log(a); // 16. a = 7; +
console.log(b); // 17. b = 2; +
console.log(c); // 18. c = 8; +

//task 2

function searchSubstringIndex (initialString, searchSubstring) {
  const initialString = 'Hello, Blabla';
  return
}
console.log (searchSubstring(initialString, 'Hello'));
console.log (searchSubstring(initialString, 'yo'));