var a;
let b=2;

function makesomeCoolStaff(){
  console.log(a); //1) a=undefined;
  console.log(b); //2) b=2;
  console.log(c); //3) c=mistake;

const c = 5;

if(true) {
  let a = 3;
  b = 4;

  console.log(a); //4) a=3;
  console.log(b); //5) b=4;
  console.log(c); //6) c=5;
}

console.log(a); //7) a=undefined;
console.log(b); //8) b=4;
console.log(c); //9) c=5;
}

makesomeCoolStaff();  //Глобальная область видимости или Global Scope

console.log(a); //10) a=undefined;
console.log(b); //11) b=4;
console.log(c); //12) c=mistake;
