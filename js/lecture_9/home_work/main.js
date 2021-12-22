const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
}

const getNameOfDay = (lang) => {
    const getDay = [];
    for (let i = 0; i < namesOfDays.length; i++) {
        if (lang === 'ru') {
            console.log(namesOfDays.ru);
        }
        else {
            console.log(namesOfDays.en);
        }
    }
    return getDay;
        //.push({ Object.keys(namesOfDays)[day] });
}
console.log(getNameOfDay('ru'));


// namesOfDays[i][day]

// $namesOfDays[ru]

//console.log(namesOfDays.ru.indexOf('Понедельник'));
// console.log(namesOfDays.ru);