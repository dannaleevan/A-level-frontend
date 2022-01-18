//1
document.addEventListener('DOMContentLoaded', () => {
    console.log('done');
});

//2
window.addEventListener('load', () => {
    console.log('load');
});

//3

window.addEventListener('resize', () => {
    console.log('resize');
});

// const form = document.getElementById('save');
// const funcCall = (e) => {
//     console.log(e.target.innerHTML);
// };

// form.addEventListener('click', funcCall);

//4
window.addEventListener('scroll', () => {
    console.log('scroll');
});

//5
window.addEventListener('beforeunload', () => {
    console.log('beforeunload');
    const a = document.createElement('a');
    a.href = 'google.com';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
});

//6
// window.addEventListener('click', (e) => {
//     console.log(e);
// });

//7 focus/blur

let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let field1Error = document.getElementById('field1-error');

input1.addEventListener('blur', event => console.log(event.relatedTarget));
input2.addEventListener('blur', event => console.log(event.relatedTarget));

input1.addEventListener('blur', () => {
    if (input1.value === '') {      //false
        field1Error.classList.remove('hidden');
    }
});

input1.addEventListener('focus', () => {
    if (input1.value === '') {      //false
        field1Error.classList.add('hidden');
    }
});

//Working with form

//доступ до формы

const form1 = document.forms.formName;

//submit подтверждение формы

form1.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputUserName = e.target.userName;   //получаем в консоль ссылку на это поле
    const inputPassword = e.target.password;    //вызываем password

    console.log(inputUserName);
    console.log(inputUserName.value);      // выдает, что введено в поле
    console.log(inputPassword.value);      // выдает, что введено в поле
});

// reset

form1.addEventListener('reset', (e) => {
    if (!confirm('Are you sure?')) {    //если он напишет нет, то мы запретим браузеру действовать по дефолту
        e.preventDefault();
    }
});

//test

const forma1 = document.forms.testForm;

const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const inputLogin = e.target.login;
    const inputPassword = e.target.password;
    console.log(inputLogin.value);
    console.log(inputPassword.value);
    e.target.reset();                       //удалить после того, как было отправлено, в консоль они все равно вылезут
};

forma1.addEventListener('submit', handleFormSubmit);    //  target ссылка на сам элемент, что живет внутри