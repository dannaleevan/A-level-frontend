# A-level-frontend

**Lecture 2 exercise 2**

Compiler - переводчик для языков программирования...

**Variables in JS:**

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

**Lecture 3**

**JavaScript data types**

Primitive values (immutable datum represented directly at the lowest level of the language)
_Boolean type_
_Null type_
_Undefined type_
_Number type_
_BigInt type_
_String type_
_Symbol type_

_Objects_ (collections of properties)


__Operators__
JavaScript has the following types of operators. This section describes the operators and contains information about operator precedence.

Assignment operators
Comparison operators
Arithmetic operators
Bitwise operators
Logical operators
String operators
Conditional (ternary) operator
Comma operator
Unary operators
Relational operators

__Objects__

**Obj Methods**

Object.getOwnPropertyDescriptor(); 
Object.defineProperty();
Object.defineProperties();
Object.getOwnPropertyDescriptor();
Object.keys();
Object.values();
Object.assign();
Object.freeze();
Object.isFrozen();
Object.preventExtensions();
Object.isExtensible();

**Object Prototype**
Object.setPrototypeOf();
Object.getPrototypeOf();