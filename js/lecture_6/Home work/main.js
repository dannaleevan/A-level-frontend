//Task 1

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
        console.log('String concatenation' + newString);
}
returnTo();

Object.defineProperty (user, 'education', {
    set(value) {
        this.description = 'middle';
  }
});
user.education = 'middle';
console.log(user.education);