const user = {
    name: 'Greg';
    age: 20;
    greeting() {
        console.log('Hello! My name is' + this.name);
    }
};

user.greeting();

const userName = 'name';

user[userName] => user['name'];

obj.[];

//__Copy object__

let obj2 = Object.assign({}, obj1); //расширяем данные обекта 1

//or

let obl2 = { ...obj1 };

//__Obj Descriptors__

    // Описание свойства, 
    //Можем защитит propert/свойства обьекта от  изменений

//__Obj Method


user.name = 'Anna';
Object.getOwnPropertyDescriptor(user, 'name'); //узнать какое наше свойство, получить дискриптор

//Запретить переписку значения

Object.defineProperty();

Ex:
const creditCard = {};
Object.defineProperty(creditCard, 'cvv', {
    value: 123, 
    configurable: false
});

creditCard.cvv = 5;
delete creditCard.cvv;
console.log(creditCard.cvv);

//configurable - убрали изменение и удаление

//enumerable - будет ли свойство отображено в цикле, когда перебирают

//getter

//setter  - this.desctiption;

//configurable and Enumerator можем исспользовать c другими дескрипторами не можем задавать

// Object Methods

//Object.defineProperty();

//Object.defineProperties(); //несколько свойств

//Object.getOwnPropertyDescriptor();

//Object.keys();

//Object.values();

//Object.assign(); //соединяем обэкты созданием нового
    //const user = { ...userInfo, ...userName };  //еще один способ рассширения

//Object.freeze();

//Object.isFrozen();

//Object.preventExtensions();

//Object.isExtensible();

//__Object Prototype__

//__proto__ - не стоит исспользовать,вместо него исспользуем:

//Object.setPrototypeOf();

//Object.getPrototypeOf();



