let a = 1;
let b = 2;
const c = 8;

function makeSomeCoolStaff() {
  var c = 5;

  console.log(a); //1) a = 1;-7
  console.log(b); //2) b = 2;-und
  console.log(c); //3) c = 8;-5

  if (true) {
    a = 3;
    var b =4;

    console.log(a); //4) a=3;+
    console.log(b); //5) b=4;+
    console.log(c); //6) c=mistake;-5
  }

  console.log(a); //7) a=1;-3
  console.log(b); //8) b=4;+
  console.log(c); //9) c=5;+
}

a = 7;

makeSomeCoolStaff ();


