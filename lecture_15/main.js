let currentDate = new Date();
console.log(currentDate);
const expireDate = new Date(2023);

setInterval(() => {
    currentDate = newDate();
}, 1000);

const diffMillisec = expireDate.getTime() - currentDate.getTime();

const nowTime = diffMillisec / 1000;
//nowTime % diffMillisec === 0;
console.log('days left :', (nowTime / 24).toFixed());

if (diffMillisec <= 0) {
    console.log('Sale is over');
} else {
    console.log('Sale is running');
}



// //moment.JS


// const content = document.que('#content');
// content.innerHTML = localStorage.getItem('test');

//setTimeout

// const myTimeout = setTimeout(() => {
//     console.log('Hello');
// }, 1000 * 60 *5);          //5000 тыс милисе = 5 сек после 5 мин выкенет

// clearTimeout(myTimeout);