# A-level-frontend


# Lecture 2 Variables in JS #

ES5: var //var не имеет блочной области видимости
ES6:  let
      const

Example: let lectureNumber = 2;
          let - variable;
          lectureNumber - variable name;
          = - equal symbol;
          2 - value или литерал;
          ; - semicolon;

**Область видимости** (англ. ... variable scope или просто scope) — это такая область программы, в пределах которой установлена связь между некоторой переменной и её идентификатором (именем), по которому можно получить значение этой переменной.

В языке JavaScript (до ES6) выделяют 2 области видимости:
глобальная (переменная или функция, созданная в этой области видимости, может быть доступна из любой точки программы);
локальная или функциональная (переменная или функция, созданная в этой области видимости, может быть доступна только внутри неё);
блочная область видимости (if ();)

***

# Lecture 3 JavaScript data types #

Primitive values (immutable datum represented directly at the lowest level of the language)
_Boolean type_
_Null type_
_Undefined type_
_Number type_
_BigInt type_
_String type_
_Symbol type_

_Objects_ (collections of properties)

***

# Lecture 4. Operators & Type Coercion #

__Operators__

JavaScript has the following types of operators. This section describes the operators and contains information about operator precedence.

*Assignment operators*
=, +=

*Comparison operators* 
===,!==>, <, >=, <=

*Arithmetic operators*
+, -, *, /

*Logical operators*

Operator	Meaning	      Example	      How it works
&&	       AND	      value1 && value2	      Returns true if both value1 and value2 evaluate to true.
||	       OR	      value1 || value2	      Returns true if either value1 or value2 (or even both!) evaluates to true.
!	       NOT	      !value1	            Returns the opposite of value1. If value1 is true, then !value1 is false.

var balance = 340.00;
var checkBalance = true;
var isActive = true;

// your code goes here
if (checkBalance === true){
    if (isActive===true && balance>0) {
        console.log("Your balance is $" + balance.toFixed(2) +".");
    } else if (isActive===true && balance===0){
        console.log("Your account is empty.");    
    } else if (isActive===true && balance<0){
        console.log("Your balance is negative. Please contact bank.");
    } else if (isActive===false){
        console.log("Your account is no longer active."); 
    }
} else {
    console.log("Thank you have a nice day!");
}

*Conditional (ternary) operator*
Условный (тернарный) оператор - единственный оператор в JavaScript, принимающий три операнда: condition - условие, за которым следует знак вопроса (?), затем выражение, которое выполняется, если условие true истинно, сопровождается двоеточием (:), и, наконец, выражение, которое выполняется, если условие false - ложно. Он часто используется в качестве укороченного варианта условного оператора if.

function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');       //isMember - condition , true - 2$, false - 10$
} console.log(getFee(true));                    // expected output: "$2.00"

var flavor = "chocolate";
var vessel = "bowl";
var toppings = "sprinkles";

// Add your code here

function exapmle (){
 return ((flavor === "vanilla" || "chocolate") && 
(vessel === "cone" || "bowl") && 
(toppings === "sprinkles" || "peanuts")) ? console.log ("I'd like two scoops of " + flavor + "ice cream in a " + vessel + "with " + toppings + ".") : console.log('I don\' want an icecreme');
}
exapmle();

***

# Lecture 6. Objects #

**Obj Methods**
* Object.getOwnPropertyDescriptor(); 
* Object.defineProperty();
* Object.defineProperties();
* Object.getOwnPropertyDescriptor();
* Object.keys();
* Object.values();
* Object.assign();
* Object.freeze();
* Object.isFrozen();
* Object.preventExtensions();
* Object.isExtensible();

**Object Prototype**
* Object.setPrototypeOf();
* Object.getPrototypeOf();

***

# Lecture 6. Function #

*1.Function creating & running*
      function aB(arg_1, arg_2, ...arg_N) {
            function's body
      }
*2.Arguments*
<!-- function as arguments -->
      const numbers =[1,2,3];
      function multiplyByTwo(element){
            return element *2;
      }
      const newArray = numbers.map(multiplyByTwo);

<!-- anonymous function  -->
      const numbers =[1,2,3];
      const newArray = numbers.map(function(element){
            return element *2;
      });
<!-- unknown arguments -->
      function getMinNum(...num){
            return Math.min(...num);
      }
      console.log(getMinNum(1,2,3));
      console.log(getMinNum(3,6,7));
*3.Function return*
      function getValue(a){
            return a;
      }
      getValue(3); //3
*4.Arrow functions*
      let arrowFunc = (a,b) => {
            <!-- a+b -->
            return a+b;
      }
      arrowFunc(3,7);
*5.Execution context*
      keyword 'this';
      let button = document.getElementByID('btn');
      button.addEventListener('click', function(){
            alert(this===button)}); 
*6.Closures*
      local scope:
            -block
            -functional;
      global scope.

//Функция переписывает параметр с конца в начало reverse
function reverseString(reverseMe) {
    var reversed = '';
    for (i = reverseMe.length - 1; i >= 0; i--){
        reversed += reverseMe[i];
    }
    return reversed;
}
console.log(reverseString('Margaret'));

__if...else__

<!-- Пример сложного когда if..else с несколькими вводными одновременно, когда нужно сделать два сравнения в одном условии -->
var room = "billiards room";
var suspect = "Mr. Parkes";   
<!-- A suspect can be either of - Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, or Mr. Kalehoff -->
var weapon = ""; 

if (room === 'ballroom') {
    weapon = 'poison';
    if(suspect==="Mr. Kalehoff") 
        solved = true;
}
<!-- /* Еще вариант сравнения через оператор && И
if (room === 'ballroom' && suspect==="Mr. Kalehoff") {
    weapon = 'poison';
    solved = true; 
} -->

else if (room === 'gallery') {
    weapon = 'trophy';
    if(suspect==="Ms. Van Cleve") 
        solved = true;
}
else if (room === 'billiards room') {
    weapon = 'pool stick';
    if(suspect==="Mrs. Sparr") 
        solved = true;
} 
else if (room === 'dining room') {
    weapon = 'knife';
    if(suspect==="Mr. Parkes") 
        solved = true;
}   

if (solved) {
    console.log(suspect + " did it in the "+ room +" with the "+weapon+"!");
}

***

# Lecture 10. DOM #

## Интерфейсы веб API: ##
* Document object
* Node Interface 
* Element Interface

### Вызываем элемент ###

* **document.getElementByID('')** - вызывает одиночный объект
* **document.getElementsByClassName('. ')** - вызывает все элементы по классу
* **document.getElementsByTagName('')** - вызывает все элементы по тегу
* **document.querySelector('.class') ('tag') ('#id')** - вызывает первый элемент с названием класса или тега или по айди


### Element Interface ###
* **element.innerHTML** - get/set element's content отображает все содержимое элемента, можно изменить всю HTML разметку элемента
* **element.outerHTML** - отображает все содержимое элементы и его дочерних элементов;
* **element.textContent** - отображает только контент элемента, рассматривает все содержимое элемента как текст, который можно изменить; отображает все контент, даже скрытый, который записан в HTML документе.
* **element.innerText** - отображает контент элемента как мы его увидем на странице, без учета скрытого display:none


### Document object ###
>Add New Page Content

* **document.createElement('a');** - DOM method в () пишем тег, который создаем, но не отображаем, дальше добавляем контент 
      с помошью  .innerHTML:
      const addLink = document.createElement('a'); 
      ddLink.innerHTML = 'href = 'https://developer.mozilla.org';

* **.appendChild();** - 'прикреплять', добавляем содержимое в document.createElement('div') в конце;
      const newSpan = document.createElement('span');
      >reate a brand new <span> element
      newSpan.textContent = 'BlaBla';
      >добавили туда контент
      const mainHeading = document.querySelector('h1');
      >select the first (main) heading of the page
      mainHeading.appendChild(newSpan);
      >add the <span> element as the last child element of the main heading
      .appendChild()
      >прикрепляется к конкретному документу, его нельзя крепить к document.appendChild;

* **.createTextNode();** - равен по применению с element.textContent = 'Hello!';

* **.insertAdjacentHTML();** - insert - вставлять; adjacent - соседний;  вставляет элемент так же как и .appendChild(), но в отлтчие от него не на последнее место, а в удобное место, принимает два аргумента:
      *1й - куда вставлять, существует 4варианта размещения 'beforebegin', 'afterbegin', 'beforeend', 'afterend'*
      >beforebegin
      <p>

      >afterbegin
      Existing text/HTML content
      >beforeend
      </p>

      >afterend
      *2й какое содержание вставлять*
      const mainHeading = document.querySelector('#main-heading');
      const htmlTextToAdd = '<h2>Skydiving is fun!</h2>';
      mainHeading.insertAdjacentHTML('afterend', htmlTextToAdd);


### Remove Page Content ###

* **.removeChild()**          
>требует вызывание родительского элемента и какой из элементов будем удалять

      <parent-element>.removeChild(<child-to-remove>);
      посмотреть .firstChild или .firstElementChild и дальше удалить первого ребенка
      const block = $0;
      const firstBlock = block.firstChild; & block.firstElementChild;
      block.removeChild(firstBlock); 

* **.firstChild** - може выдать и пустое место как первого ребенка 

* **.firstElementChild** - точно выдасть первый элемент, наполненный контентом

* **.parentElement** - Чтоб не вызывать первым аргументом родительский элемент, мы можем удалять элемнт по такой схеме

      const mainHeading = document.querySelector('h1');
      //вызвать элемент для удаления
      mainHeading.parentElement.removeChild(mainHeading);
      //название элемент для удаленич, обратится к его родителю per.elem. + название метода removeCh, (удалить этот элемент)

* **.remove()**
      const mainHeading = document.querySelector('h1');
      mainHeading.remove();


### Style Page Content ###

* **.style.<prop>** - добавление одного стиля
      const mainHeading = document.querySelector('h1');
      mainHeading.style.color = 'red' ('15px');
      >fontSize - название стилей без черточки
      mainHeading.style;
      >проверка

* **.cssText** - добавление многих стилей, название стилей как в CSS : font-size;

    const mainHeading = document.querySelector('h1');
    mainHeading.style.cssText = 'color: blue; background-color: orange; font-size: 3.5em';

* **.setAttribute()** - два аргумента (название атрибута, его содержимое)
      const mainHeading = document.querySelector('h1');
      mainHeading.setAttribute('style', 'color: blue; background-color: orange; font-size: 3.5em;');
      mainHeading.setAttribute('id', 'heading-sibling');
      >добавить можно любой атрибут
      mainHeading.nextElementSibling.style.backgroundColor = 'red';
      >присвоить стить след. соседу

* **.className** - get можем посмотреть наличие классов элемента
      const listOfClasses = mainHeading.className;
      >выдаст string
      const arrayOfClasses = listOfClasses.split(' ');
      >можно его перевернуть в array разделя
      >>мы можем теперь работать с ним как с array : for, .push, .pop
      >set className:
      mainHeading.className = "im-the-new-class";
      >название нового класса

* **.classList** - получим DomTokenList - коллекция элементов, с которой можем работать
>blaBla.classList.add('');
 - .add() - to add a class to the list
 - .remove() - to remove a class from the list
 - .toggle() - to add the class if it doesn't exists or remove it from the list if it does already exist
 - .contains() - returns a boolean based on if the class exists in the list or not

***

# DOM_part_2 #

Working with Browser Events

**monitorEvents(document)** - See an event отображает все активное, что происходит 
**unmonitorEvents(document)** - Скрывает предыдущее отолбражание

### Events types: ###
* mouse events (click, dblclick, scroll, resize)
* keyboard events (pressing and releasing key)
* control elements events (focus / blur forms fields, form submit);

### EventTarget Interface methods ###
* **.addEventListener()** - < event - target >.addEventListener(<event-to-listen-for>, <function-to-run-when-an-event-happens>);     
* **.removeEventListener()** - убрать EventListener
* **.target.dispatchEvent()** - отправляет событие в общую систему событий        
* **.preventDefault()** - предотвратить поведение браузера по умолчании, нажимаем   на ссылку, браузер перезапускается
* **.stopPropagation()** - остановка запуска js bubling

### Mouth events ###           
* *mousedown* - нажал мышку
* **mouseup** - отпустил мышку
* ***click*** - щелчек мыши
* **dblclick** - двойное нажатие мыши
* **mousemove** - уходим с элемента
* **mouseover** - мыш заходит на элемент
* **mouseleave** - увели мышку с узла без баблинга, покидаем пределы пораграфа
* **mouseenter** - уходим с элемента но без баблинга
* **mouseout** - увели мышку с узла с баблингом
* **contextmenu** - нажатие на правую клавишу  по любому вызывается крнтектсное меню  

>command+d выделяет и меняет все одинаковые элементы

### Keyboard Events ###
* keydown -
* keyup - 
* altKey - проверка нажати ли клавиша, в тот момент, когда наживали на клаве
* code - один символ выводит 
* cnrlKey - 
* key -
* location -
* metaKey - 
* repeat -
* shiftKey -

### Document_events ###

* **DOMContentLoaded event** - после загрузки дома ускоряет работу интерфейсов не дожидаясь прогрузки css
* **load event** - завершение загрузки всего на странице
* **beforeunload event** - когда пользователь закончил работу и если сохранился спрашиваем, хочет ли он уйти
* **unload** - пользователь почти ушел, но мы можем собрать статистику


###### Чтоб JS записать вверху страницы и DOM все таки прогружился, можно сделать следущее ######

      <!DOCTYPE html>
      <html lang="en">
      <head>
      <link rel="stylesheet" href="/css/styles.css" />
      <script>
            document.addEventListener('DOMContentLoaded', function () {
            document.querySelector('footer').style.backgroundColor = 'purple';
            });
      </script>


**performance.now()** - testing Code Performanc, тест времени выполнения кода

**reateDocumentFragment()** - метод который поможет без div добавить элемент в одночасье и съэкономить время загрузки, он будет только на 321 строке

**setTimeout()** - Оттерминование запуска функции 
