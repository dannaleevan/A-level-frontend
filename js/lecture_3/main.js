let a = 1;
let b = 2;
const c = 8;

function makeSomeCoolStaff() {
  var c = 5;

  console.log(a); //1) a = 1;
  console.log(b); //2) b = 2;
  console.log(c); //3) c = 8;

  if (true) {
    a = 3;
    var b =4;

    console.log(a); //4) a=undefined;
    console.log(b); //5) b=2;
    console.log(c); //6) c=mistake;
  }

  console.log(a); //7) a=undefined;
  console.log(b); //8) b=2;
  console.log(c); //9) c=mistake;
}

a = 7;

makeSomeCoolStaff ();

console.log(a); //10) a=undefined;
console.log(b); //11) b=2;
console.log(c); //12) c=mistake;
