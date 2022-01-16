__Getting Elements__

// const button = document.getElementById('test-id');
// console.log();
// const button = document.querySelector('#test-id);
// const buttons = document.getElementsByTagName('button');
// const buttons = document.getElementsByClassName('buttons');
// console.log(buttons);
// console.log(buttons[2]);

//Коллекции
// 1.forEach
// 2.get element by index(collection[1]);
// 3. convert to an array WebGLVertexArrayObject.from(collection) => map.slice.filter

// const buttonsArr = Array.from(buttons);
// console.log(buttons);
// buttonsArr.forEach((el, index) => {
//     console.log(el)
// })

// for (let i = 0; i < buttons.length; i++) {
//     console.log(buttons[i]);
// }

// const myButton = document.getElementById('test-id');
// //console.log(myButton.classList);
// myButton.classList.add('button-big')                //добавить класс
// myButton.classList.remove('button-red');            //удалить класс
// myButton.classList.toggle('button-red');            //сначала ищет класс, если не находит то добавляет, если находит то убира, как ховер ситуационное
// myButton.classList.contains('buttons');
// console.log(myButton.classList.contains('buttons'));  //есть ли этот класс или нет проверка  возвращает true/false

// const myList = document.querySelector('ul#list');           //выводится в консоль весь список
// console.log(myList.innerHTML);
// myList.innerHTML('Hello');                  //наполнили инфой в html польность наполнить содержание
// myList.innerHTML = `
//         <li class="list-item">item</li>
//         <li class="list-item">item</li>
//         <li class="list-item">item</li>
//         <li class="list-item">item</li>
//         <li class="list-item">item</li>`;

// myString.textContent                                    //внутри списака появится строка

//Add new element

//appendChild              //добавляет новые элемент

// const myList = document.getElementsByTagName('ul')[0];
// const listItem1 = document.createElement('li');
// listItem1.textContent = 'Item 1';
// listItem1.classList.add('item');
// myList.appendChild();

// .insertBefor()              //принимает 2 арг, перед чем поставить и что добавляем
// .after()                         //добавить после

//const wrapper = document.createElementwrapper.classList

//document.createElement('div);
//wrapper.setAttribute('id', 'test-id');
//.hasAttribude //true /false существует ли атрубут у элемента
//removeAttribute       //удаляется атрибутёё

//Удалить элементы

//let firstNavItem = nav.getElementByTagName('div)[0];  //нужно обращатся к родителю того элем, который хочем найти
//nav.removeChild(firstNavItem);

//remove()
