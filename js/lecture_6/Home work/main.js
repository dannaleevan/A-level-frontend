//Task 1

// 1)
function getMinValue(value1, value2, value3) {
    let result;
    if (value1 < value2) {
        console.log(value1);
    } else if (value2 < value3){
        console.log(value2);
    } else {
        console.log(value3);
    }
    return result;
}

getMinValue(8, 2, 1);

// 2)
const arrValue = [2, 5, -3, 7, 9];
let getMinValue = arrValue.reduce(function (x, y) {
    return Math.min(x, y);
});
console.log(getMinValue);



//Task 2

const obj1 = { name: 'Joe' }

const obj2 = { age: 25 }

function joinObjects(obj1, obj2) {
    let result = { ...obj1, ...obj2 };
    console.log(result);
}

joinObjects(obj1, obj2);

// Task 3

const user = {
    name: 'Jack',
    age: 18
}

function returnTo() {
        let newString = user.toString();
        console.log('String concatenation: ' + newString);
}
returnTo();

const checkUser = user;
console.log(checkUser.valueOf());

Object.defineProperty(user, 'education', {
    value: 'middle'
});
console.log(user);

Object.defineProperties(user, {
    'name': {
        value: 'Marta',
        writable: false,
        configurable: true,
        enumerable: true
    },
    'age': {
        value: 71,
        writable: false
    }
});
console.log(user);

