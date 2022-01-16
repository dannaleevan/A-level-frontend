/*__DOM_part_2__

Working with Browser Events

monitorEvents(document)         //See an event отображает все активное, что происходит 
unmonitorEvents(document)       //Скрывает предыдущее отолбражание

A diagram showing EventTarget inherited by all nodes and elements
The EventTarget Interface is inherited by all nodes and elements.

    
Different events:

Events types:
- mouse events (click, dblclick, scroll, resize)
- keyboard events(pressing and releasing key)
- control elements events(focus / blur forms fields, form submit);



EventTarget Interface doesn't have any properties and only three methods! These methods are:
1) .addEventListener()
   // < event - target >.addEventListener(<event-to-listen-for>, <function-to-run-when-an-event-happens>);
        1) < event - target > : p, div..
        2) <event-to-listen-for></event-to-listen-for> : click (клацанье мышкой), dblclick, scroll, resize, keydown(нажатие на клавишу, ввод/заполнение поля)
        3) <function-to-run-when-an-event-happens> - функция, которая будет это выполнять

        const mainHeading = document.querySelector('h1');
        mainHeading.addEventListener('click', function () {
       console.log('The heading was clicked!');
    });
    or mainHeading.addEventListener('click', (event) => alert ('Button clicked'))

const myButton = document.getElementById('test-id');
myButton.addEventListener('click', (event) => {      //Старый синтаксис document.onclick = (event)=> alert('old);
    console.log(event.target.textContent);          //target - это элемент, которому присвоили айдишник, мы вызываем контент элемента
})


2) .removeEventListener()

const myButton = document.getElementById('test-id');
const canselButton = document.querySelector('#btn-cansel');

const callBack = (event) => {
    alert('test');
};

myButton.addEventListener('click', callBack);

canselButton.addEventListener('click', () => {
    myButton.removeEventListener('click', callBack);
});

3).dispatchEvent()



__Улучшение если повесить не на span, а выше на nav__

const linkHome = document.getElementById('link-home');
const linkPictures = document.getElementById('link-pictures');
const linkAbout = document.getElementById('link-about');

const callBack = (event) => {
    console.log(event.target.textContent);
}

linkHome.addEventListener('click', callBack);
linkPictures.addEventListener('click', callBack);
linkAbout.addEventListener('click', callBack);

//OR


const nav = document.getElementsByTagName('nav')[0];

const callBack = (event) => {
    console.log(event.target.innerHTML);
}

nav.addEventListener('click', callBack);
 

//.dispatchEvent()

__Control_events_flow__

.preventDefault()       //предотвратить поведение браузера по умолчании, нажимаем на ссылку, браузер перезапускается

//поле не будет заполнятся
const inputName = document.getElementById('field'); 
inputName.addEventListener('keydown', (event) => {
    event.preventDefault();
});

//человек должен подтвердить, что хочет перейти по ссылке, дефолтом мы запрещаем авто переход, 
//вместо этого выскакивает окно с подтверджением

const cssLink = document.getElementById('link');
cssLink.addEventListener('click', (event) => {
    event.preventDefault();
    if (confirm('Are you sure')) {
        document.location.href = '//google.com';
    }
   
    console.log(event.target.href);
});

//Пример 2_ ввод числа больше 5, если меньше выдает оповещение

const input = document.querySelector('input[type="number"]');
input.addEventListener('keydown', (event) => {
    event.preventDefault();
    
    const userValue = event.key;        //клавиша, которую мы ввели
    console.log(userValue);

    if (userValue >= 5) {
        input.value = +userValue;
    } else {
        alert('Please, be aware, number should be more or equal 5');
    }
});

//.stopPropagation()      //остановка запуска js bubling

const p = document.getElementById('p');
p.addEventListener('click', (event) => {
    event.stopPropagation();
    alert('p');
})

//Mouth events                  //*часто исспользуются
mousedown      //нажал мышку
mouseup         //отпустил мышку
*click           //щелчек мыши
dblclick        //двойное нажатие мыши
mousemove       //уходим с элемента
*mouseover       //мыш заходит на элемент
*mouseleave      //увели мышку с узла без баблинга, покидаем пределы пораграфа

form.classList.add('form')         //добавление класа  предварительно вывываем getElementById, addEventListener
form.classList.remove('form')      //отнимание класса

mouseenter      //уходим с элемента но без баблинга
mouseout        //увели мышку с узла с баблингом
contextmenu     //  нажатие на правую клавишу  по любому вызывается крнтектсное меню  stopPropagation нужно

 const tooltip = document.getElementById('tooltip');
 tooltip.addEventListener

command+d выделяет и меняет все одинаковые элементы


const p = document.getElementById('p');
const tooltip = document.getElementById('tooltip');

p.addEventListener('mouseup', (e) => {
    e.preventDefault();
    console.log(e);
    const pointX = e.clientX;
    const pointY = e.clientY;
    
    tooltip.hidden = false;
    tooltip.style = `top: ${pointY}px; left: ${pointX}px;`;
});

tooltip.addEventListener('click', (event) => {
    event.stopPropagation();
});

//  document.body.addEventListener('click', () => {
//          tooltip.hidden = true;
//  });



__Keyboard Events__
keydown
keyup
altKey - проверка нажати ли клавиша, в тот момент, когда наживали на клаве
code - один символ выводит 
cnrlKey - 
*key - 
location -
metaKey
repeat 
shiftKey


const input = document.querySelector('#input');

input.addEventListener('keydown', (e) => {
    console.log(`atl is ${e.altKey}, key  is ${e.key}`);
});


const input = document.querySelector('#input');

input.addEventListener('keydown', (e) => {
    console.log(`pressed: ${e.code}`);
});
*/

// __Document_events__

// const button = document.getElementById('clicked');
// button.addEventListener('click', (e) => {
//     e.preventDefault();
//     const styleBtn = document.getElementById('test-id');

//     styleBtn.style.backgroundColor = 'red';
//     console.log('Was clicked');

// });



//Удалить элемент, когда наживается клавиша
// document.body.addEventListener('keypress', () => {
//     document.querySelector('nav').firstElementChild.remove();
// }
// );

// document.addEventListener('keypress', (e) => {
//     console.log(e);
// })


/*
//Пример


Вариант 1
const myCustomDiv = document.createElement('div');

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    newElement.addEventListener('click', function respondToTheClick() {
        console.log('A paragraph was clicked.');
    });

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);


Вариант 2
const myCustomDiv = document.createElement('div');

function respondToTheClick() {
    console.log('A paragraph was clicked.');
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    newElement.addEventListener('click', respondToTheClick);

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);


Вариант 3
const myCustomDiv = document.createElement('div');

function respondToTheClick() {
    console.log('A paragraph was clicked.');
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}

myCustomDiv.addEventListener('click', respondToTheClick);

document.body.appendChild(myCustomDiv);


Чтоб JS записать вверху страницы и DOM все таки прогружился, можно сделать следущее

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="/css/styles.css" />
    <script>
      document.addEventListener('DOMContentLoaded', function () {
          document.querySelector('footer').style.backgroundColor = 'purple';
      });
    </script>



//Testing Code Performance - время выполнения кода

const megerTime = performance.now();  //а дальше код



// reateDocumentFragment() -  метод который поможет без div добавить элемент в одночасье и съэкономить время загрузки, он будет только на 321 строке

const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>

for (let i = 0; i < 200; i++) {
    const newElement = document.createElement('p');
    newElement.innerText = 'This is paragraph number ' + i;

    fragment.appendChild(newElement);
}

document.body.appendChild(fragment); // reflow and repaint here -- once!



//Назначить 3й элемент

const links = document.querySelectorAll('input');
const thirdField = links[2];

thirdField.addEventListener('keypress', function handleKeyPresses(event) {
    console.log('a key was pressed');
});



//Оттерминование запуска функции  - setTimeout()

setTimeout(function sayHi() {
    console.log('Howdy');
}, 1000);

*/


