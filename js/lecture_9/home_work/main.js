//Task 1
const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
}

const getNameOfDay = (day, lang) => {
    (lang === 'ru') ? namesOfDays.ru : namesOfDays.en;
}

console.log(getNameOfDay(namesOfDays.ru[3],'ru'));

// Object.keys(namesOfDays)[day] 
// $namesOfDays[ru]
//console.log(namesOfDays.ru.indexOf('Понедельник'));


//Task 2

const citiesAndCountries = {
    Kyiv: 'Ukraine',
    Washington: 'USA',
    Odessa: 'Ukraine',
    Munich: 'Germany',
    Kharkiv: 'Ukraine',
    'New-York': 'USA',
    Amsterdam: 'Netherlands',
    Berlin: 'Germany',
    Chicago: 'USA',
    Lisabon: 'Portugal',
    Lviv: 'Ukraine',
    Humburg: 'Germany'
};

for (let cities in citiesAndCountries) {
    console.log(`cities: ${ Odessa`});
}  


unction getKeyByValue(object, value) {
return Object.keys(object).find(key => object[key] === value);
}
console.log(getKeyByValue(citiesAndCountries, 'USA'));