//Task 1.

let a = 1;
let b = 2;
const c = 8;

function makeSomeCoolStaff() {
  var c = 5;

  console.log(a); //1) a = 7; (1)
  console.log(b); //2) b = undefined;(2)
  console.log(c); //3) c = 5;

  if (true) {
    a = 3;
    var b =4;

    console.log(a); //4) a = 3;
    console.log(b); //5) b = 4;
    console.log(c); //6) c = 5;
  }

  console.log(a); //7) a = 3; (1)
  console.log(b); //8) b = 4;
  console.log(c); //9) c = 5;
}
let a = 1;
let b = 2;
const c = 8;

a = 7;

makeSomeCoolStaff();


console.log(a); //10) a = 3; (1)
console.log(b); //11) b = 2; (4)
console.log(c); //12) c = 8; (5)

//Task 2. Dynamic greeting

function greeting(name) {
  alert('Hello, ' + name + '! How are you?');
}

greeting("Daria");

//Task 3. My lecture object

const lecture = {
  boolean: true,
  null: null,
  undefined: undefined,
  number: 3,
  bigInt: 9007199254740991n,
  string: 'Hi',
  symbol: 'foo',
}

console.log(`We were studying ${lecture.bigInt} during last lecture`);
