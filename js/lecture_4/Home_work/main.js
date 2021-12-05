let a = 2;

if (false) {
  var b = 3;
}

console.log(a); //1. a = 2; +
console.log(b); //2. b = undefined;
console.log(c); //3. c = error;

makeSomeCoolStaff();

const c = 4;

function makeSomeCoolStaff() {
  let b = 5;

  console.log(a); //4. a = 2; +
  console.log(b); //5. b = 5; +
  console.log(c); //6. c = 4; -undefined;

  if (true) {
    var c = 6;
    const a = 7;
    b = 8;

    console.log(a); //7. a = 7; +
    console.log(b); //8. b = 8; +
    console.log(c); //9. c = 6; +
  }

  console.log(a); //10. a = 2; +
  console.log(b); //11. b = 8; +
  console.log(c); //12. c = 4; - 6
}

console.log(a); //13. a = 2; +
console.log(b); //14. b = 8; -undefined;
console.log(c); //15. c = 4; +
