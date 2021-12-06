//Методы JS - String - обертка

/*String wrapper

Cинтаксис:
1) 'Test'.length
String('Test').length;

const str1 = 'Bla' // String
const str2 = new String('Bla'); //Object

2) const myStr = "lecture 5";
console.log(myStr[]); // обращение к каждому символу через [] скобы

3) charCoreAt, charAt // пойми это!

4) toLowerCase(), toUpperCase()
    ex: let name = 'Hait';
        console.log(name.toLowerCase());

5) includes('');

6) indexOf(), lastIndexOf   // выводит идкесы символов, если есть насколько одинаковых симвовлов , пишет идекс первого 

7)startsWith() //строка начинаетсч с 

8) endsWith()

9) substring() // на выходе мы выводим промежуток между индексами с 4 по 9 (9 мы не получим, нужно бать на 1 индекс больше)
либо задаем только один индекс и оно выдаст все что идет после него

10) slice() //вырезать кусочек Б можем вырезать индексы с минусом, это значит режем с конца

11) split()
    const str = 'Dog and cat';
    console.log(str.split('a')); //разделит по а , при этом а удалит 

12) replace(  ); //замена только первое слово
    replaceAll(); //заменит все слова, которые найдутся

    const a = 'Good job';
    console.log(a.replace('Good', 'Bad'));
    
    //строку нельзя заменить по индексу, только с помощью метода


13) trim()   // подстригать
    trimStart()
    trimEnd()     //избавление от лишних пробелов
*/

//Number wrapper (+NaN, Infinity, - Infinity)

/*Keywords: Number - обертка

1)  Number.MAX_SAFE_INTEGER;
    Number.MIN_SAFE_INTEGER;
    Number.POSITIVE_INFINITY;
    Number.NEGATIVE_INFINITY;

2) isNan ()- определяет число или нет

3) isFinite(number) - не бессконечное ли оно

4)  toString(); // вернет число строкой

        const a = 7;
        console.log(a.toString(2)); //для бинарного значения выдаст '111'
    2 - двоичная система иссчесления или бинарная 0х
    8 - восмиричная система иссчесления
    10 - десятичная система иссчесления - это наша
    16 - шестнадцатиричная система иссчесления- это цвета

5) toFixed(4)

    const num = 10.83295;
    const num2 =19.99
    console.log((nam*num2)toFixed(4)); //  216.5507 возвращает строку с количесвтом 4 знаков после запятой и округляет

4) parseFloat //сокращаем количество символов после запятой

5) toLocaleString('ru',{style:'currency:'UAH', minimumFractionDigits:0}); // или 'en-Us', 'ar-Sa' 

6)  Math - это обьект и он имеет свои методы
    console.log(Math.PI);
    Math.round(); //десятичное округляет правильно к целому
    Math.floor() //берет только целое и ничего не округляет
    Math.pow(3**2) //3 во 2 степени
    Math.sqrt(256) //квадратрный корень из числа 16
    Math.min(1, 3, 4, 6, 9); //9
    Math.max(1, 4 , 5); //1
    Math.random(); /генерирует рандомное число от нуля до 1 

*/

let myStr = "Bob";
myStr = "Job";
