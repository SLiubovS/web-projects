// Привет, object
// важность: 5
// Напишите код, выполнив задание из каждого пункта отдельной строкой:
//
//     Создайте пустой объект user.
//     Добавьте свойство name со значением John.
//     Добавьте свойство surname со значением Smith.
//     Измените значение свойства name на Pete.
//     Удалите свойство name из объекта.

//     вариант 1 создания свойства

/*
let user = new Object(); //создаем новый пустой объект
user['name'] = 'John'; //
alert(user.name);
user['surname'] = 'Smith';
alert(user.surname);
user['name'] = 'Pete';
alert(user.name);
delete user.name;
alert(user.name);
*/


// вариант 2 созданмия свойства
// основной

/*
let user=  {};
user.name = "John";
alert(user.name);
user.surname = 'Smith';
alert(user.surname);
user.name = "Pete";
alert(user.name);
delete user['name'];
alert(user.name);
*/



// вариант 3
// создание целого объекта
//
// let user = {
//     name: "John",
//     surname: "Smith"
// };
// alert(user.name);
// alert(user.surname);





// Проверка на пустоту

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// function isEmpty(obj) {
//
//     for(let key in obj) {
//         return true;
//     };
//
// return false;
// }
//
// let user = {};
//
// alert(isEmpty(user));







//
// Объекты-константы?
//
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

// const user = {
//     name: 'John'
// };
//
// user.name = 'Kate';
// alert(user.name);


//
// Сумма свойств объекта

// У нас есть объект, в котором хранятся зарплаты нашей команды:
//
//     let salaries = {
//         John: 100,
//         Ann: 160,
//         Pete: 130
//     }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
//
// Если объект salaries пуст, то результат должен быть 0.


// function sum(obj) {
//     let salary = 0;
//
//
//     for(let key in obj) {
//
//         salary += obj[key];
//     }
//
//     return salary;
// }
//
// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
//
// alert(sum(salaries));





//
// Умножаем все числовые свойства на 2
// важность: 3
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
//
// Например:
//
// // до вызова функции
//     let menu = {
//         width: 200,
//         height: 300,
//         title: "My menu"
//     };
//
// multiplyNumeric(menu);
//
// // после вызова функции
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
//
//     P.S. Используйте typeof для проверки, что значение свойства числовое.

// typeof 0 // "number"

// примитивные типы данных(например число(number)), передаются в функцию путем копирования (по значению).
// Объекты передаются в функции путем копирования ссылки (по ссылке).

// function multiplyNumeric(obj) {
//     for(let key in obj) {
//         if(typeof obj[key] == "number") {
//             obj[key] *= 2;
//         }
//     }
// };
//
//
// let menu = {
//         width: 200,
//         height: 300,
//         title: "My menu"
//      };
//
// multiplyNumeric(menu);
//
// alert(menu.width);
// alert(menu.height);
// alert(menu.title);


//
// // задание сравнение объектов
// const obj = {x:10, y:5};
// const obj2 =  {x:10, y:5};
//
// alert((obj.x == obj2.x) && (obj.y == obj2.y));




// тестовое задание объект с функцией

// let cat = {
//     mustache: 10,
//     paws:"не измеряли",
//     tail:"пушистый",
//     may: function() {
//         alert('Мяу! У меня хвост ' +  this.tail);
//         alert("Мяу! У меня лапы " + this.paws + " !");
//         alert('Мяууу! А усы у меня ' + this.mustache + " см");
//     }
// };
//
// cat.may();



// Задача: необходимо создать объект, объект квадрат со сторонами а и b, и  методом, который будет возвращать площадь этого квадрата

// let square= {
//     a: 10,
//     b: 30,
//     area: function() {
// return (this.a * this.b);
// }
// };
//
// alert(square.area());

