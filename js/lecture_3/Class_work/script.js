//Объект

// Можно было вот так записать
//const catName = 'Grey';
// const catAge = 3;
// const isCatMale = true;

// function catSay() {
//     alert('Meowww');
// }
// console.log(`Cat name is ${catName}, it's ${catAge}`);

// A вот это уже Объект
const cat = {
    name: 'Gray',
    age: 3,
    isMale: true,
    say: function () {
        alert('Meowww');
    }
};
console.log(`Cat name is ${cat.name}`);