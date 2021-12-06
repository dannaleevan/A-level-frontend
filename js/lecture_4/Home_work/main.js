let a = 2;

if (false) {
  var b = 3; //вар всплывают с верху, а значение в блоке 

console.log(a); //1. a = 2; +
console.log(b); //2. b = undefined; 
console.log(c); //3. c = error; всегда тогда, когда переменная не обявлена, то есть он не известен

makeSomeCoolStaff(); //функция читается с верху

const c = 4; //в момент выполнения функции const (12) не существует , мы функцию обявили раньше чем эта строка 12

function makeSomeCoolStaff() {
  let b = 5;

  console.log(a); //4. a = 2; +
  console.log(b); //5. b = 5; +
  console.log(c); //6. c = 4; -undefined; //строка 12 находиться ниже чем вызов функции на 10 строке

  if (true) {
    var c = 6; //всплывает перед 16 строкой
    const a = 7;
    b = 8;

    console.log(a); //7. a = 7; +
    console.log(b); //8. b = 8; + // если переписываем переменную, значение меняется на нижнее
    console.log(c); //9. c = 6; +
  }

  console.log(a); //10. a = 2; +
  console.log(b); //11. b = 8; +
  console.log(c); //12. c = 4; - 6
}

console.log(a); //13. a = 2; +
console.log(b); //14. b = 8; -undefined; // это та b 
console.log(c); //15. c = 4;

