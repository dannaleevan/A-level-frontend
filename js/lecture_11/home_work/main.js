const changeColor = document.getElementById('tourBtn1');

// changeColor.addEventListener('click', (e) => {
//     changeColor.classList.add('blue');
//     console.log(changeColor.classList);
// });

// changeColor.addEventListener('mouseout', (e) => {
//     changeColor.classList.remove('blue');
// });
    
// changeColor.addEventListener('mouseover', (event) => 
//     changeColor.style.cssText = 'color: #fff;  border-color:  #fff; background-color: navy;');

// changeColor.addEventListener('mouseout', (event) => 
//     changeColor.style.cssText = 'color: #navy;  border-color:  #navy; background-color: transparent;');

const openBar = document.getElementById('tourBtn1');
const testVisible = document.getElementById('text1');

openBar.addEventListener('click', (e) => {
    testVisible.hidden = false;
});

openBar.addEventListener('click', (e) => {
    testVisible4.hidden = true;
});


// const changeColor2 = document.getElementById('tourBtn2');
// changeColor2.addEventListener('mouseover', (event) => 
//     changeColor2.style.cssText = 'color: #fff;  border-color:  #fff; background-color: navy;');

// changeColor2.addEventListener('mouseout', (event) => 
//     changeColor2.style.cssText = 'color: #navy;  border-color:  #navy; background-color: transparent;');

const openBar2 = document.getElementById('tourBtn2');
const testVisible2 = document.getElementById('text2');

openBar2.addEventListener('click', (e) => {
    testVisible2.hidden = false;
});

openBar2.addEventListener('click', (e) => {
    testVisible.hidden = true;
});


const changeColor3 = document.getElementById('tourBtn3');
// changeColor3.addEventListener('mouseover', (event) => 
//     changeColor3.style.cssText = 'color: #fff;  border-color:  #fff; background-color: navy;');

// changeColor3.addEventListener('mouseout', (event) => 
//     changeColor3.style.cssText = 'color: #navy;  border-color:  #navy; background-color: transparent;');

const openBar3 = document.getElementById('tourBtn3');
const testVisible3 = document.getElementById('text3');

openBar3.addEventListener('click', (e) => {
    testVisible3.hidden = false;
});

openBar3.addEventListener('click', (e) => {
    testVisible2.hidden = true;
});


const changeColor4 = document.getElementById('tourBtn4');
// changeColor4.addEventListener('mouseover', (event) => 
//     changeColor4.style.cssText = 'color: #fff;  border-color:  #fff; background-color: navy;');

// changeColor4.addEventListener('mouseout', (event) => 
//     changeColor4.style.cssText = 'color: #navy;  border-color:  #navy; background-color: transparent;');

const openBar4 = document.getElementById('tourBtn4');
const testVisible4 = document.getElementById('text4');

openBar4.addEventListener('click', (e) => {
    testVisible4.hidden = false;
});

openBar4.addEventListener('click', (e) => {
    testVisible3.hidden = true;
});
   




const navigation = document.getElementsByTagName('button');
const arr = [];
for (let i = 0; i < navigation.length; i++) arr.push(navigation[i]);

console.log(arr[0]);

arr[0].addEventListener('mouseover', (event) =>
    arr[0].style.cssText = 'color: #fff;  border-color:  #fff; background-color: navy;');

arr[0].addEventListener('mouseout', (event) =>
    arr[0].style.cssText = 'color: #navy;  border-color:  #navy; background-color: transparent;');

arr[1].addEventListener('mouseover', (event) =>
    arr[1].style.cssText = 'color: #fff;  border-color:  #fff; background-color: navy;');

arr[1].addEventListener('mouseout', (event) =>
    arr[1].style.cssText = 'color: #navy;  border-color:  #navy; background-color: transparent;');

arr[2].addEventListener('mouseover', (event) =>
    arr[2].style.cssText = 'color: #fff;  border-color:  #fff; background-color: navy;');

arr[2].addEventListener('mouseout', (event) =>
    arr[2].style.cssText = 'color: #navy;  border-color:  #navy; background-color: transparent;');

arr[3].addEventListener('mouseover', (event) =>
    arr[3].style.cssText = 'color: #fff;  border-color:  #fff; background-color: navy;');

arr[3].addEventListener('mouseout', (event) =>
    arr[3].style.cssText = 'color: #navy;  border-color:  #navy; background-color: transparent;');



// const newArr = arr.forEach(function y (marker) {
//     marker.addEventListener('mouseover', (e) =>
//         arr.style.cssText = 'background-color: red;');
// });

const remakeH1 = document.getElementsByTagName('h1');
remakeH1.addEventListener('click', (e) => {
     remakeH1.classList.add('blue');
 });