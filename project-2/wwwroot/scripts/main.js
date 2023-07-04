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




// Задачи

//
// Создайте калькулятор
//
// Создайте объект calculator (калькулятор) с тремя методами:
//
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

// let calculator = {
//     read() {
//     this.n= prompt('a?', '');
//     this.k= prompt('b?', '');
// },
//     sum() {
//         return (+this.n + +this.k);
// },
//     mul() {
//         return this.n * this.k;
//     }
// };
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );







// Задача цепь вызовов

// У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//     },
//     down() {
//         this.step--;
//     },
//     showStep: function() { // показывает текущую ступеньку
//         alert( this.step );
//     }
// };
// Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
//
// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
// Такой подход широко используется в библиотеках JavaScript.


// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep: function() { // показывает текущую ступеньку
//         alert( this.step );
//         return this;
//     }
// };
// ladder.up().up().down().showStep().down().showStep();



// new
// Задачи

// Создайте калькулятор при помощи конструктора, new Calculator
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
//
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:
//
// let calculator = new Calculator();
// calculator.read();
//
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );




// function Calculator(name){
//     this.name = name;
//     this.read = function() {
//         this.a = prompt('a?', '');
//         this.b = prompt('b?', '');
//     };
//         this.sum = function() {
//             return +this.a + +this.b;
//         };
//
//         this.mul = function() {
//             return this.a * this.b;
//         };
//
// }
//



// сщздание функции-калькулятор с циклом внутри

// let calculator = new Calculator('Nike');
// alert("Калькулятор называется: " + calculator.name);
//
// while (true) {
//
//     calculator.read();
//     alert( "Sum=" + calculator.sum() );
//     alert( "Mul=" + calculator.mul() );
//     let exit = prompt('Вы хотите выйти?', 'Да');
//     if(exit == "Да") {
//         break;
//     }
// }




// function test(a,b) {
//     alert("a= " + a);
//     alert("b= " + b);
// };
// let i = prompt('i?', '');
// let j = prompt('j?', '');
//
// test(i,j);

// function Test(a,b) {
//     this.a = a;
//     this.b= b;
//     this.show = function() {
//         alert("a= " + this.a);
//         alert("b= " + this.b);
//     }
// }
//
// let test1 = new Test(5,10);
// test1.show();
//
// let x = prompt('x?','');
// let y = prompt('y?','');
//
// let test2 = new Test(x,y);
//
// test2.show();






//
// Создайте new Accumulator
//
// Создайте функцию-конструктор Accumulator(startingValue).
//
//     Объект, который она создаёт, должен уметь следующее:
//
//     Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
//     Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
//     Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.
//
//     Ниже вы можете посмотреть работу кода:
//
//     let accumulator = new Accumulator(1); // начальное значение 1
//
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
//
// alert(accumulator.value); // выведет сумму этих значений


// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function() {
//        let a = +prompt('Введите число','');
//        this.value += a;
//     }
// }
//
// let acc = new Accumulator(5);
// alert(acc.value);
// acc.read();
// alert(acc.value);


// Создать функцию-конструктор Car
// объект который он создает должен иметь
// свойства: color (цвет машины) и speed (скорость машины)
// метод: SetSpeed (метод который устанавливает скорость машины)
// при создании машины можно указать ее цвет (строкой) скорость изначально равна 0


// function Car(color) {
//     this.speed = 0;
//     this.color = color;
//     this.SetSpeed = function(speed){
//         this.speed = speed;
//     }
// }
//
//
//
//
// // пример использования
// let vesta = new Car("yellow");
// alert(vesta.speed); // 0
// alert(vesta.color); // black
// vesta.SetSpeed(60);
// alert(vesta.speed); // 60

















// Задачи по функциям
//


// Обязателен ли "else"?


// Следующая функция возвращает true, если параметр age больше 18.
//
// В ином случае она запрашивает подтверждение через confirm и возвращает его результат:
//
//     function checkAge(age) {
//         if (age > 18) {
//             return true;
//         } else {
//             // ...
//             return confirm('Родители разрешили?');
//         }
//     }
// Будет ли эта функция работать как-то иначе, если убрать else?
//
//     function checkAge(age) {
//         if (age > 18) {
//             return true;
//         }
//         // ...
//         return confirm('Родители разрешили?');
//     }
//     Есть ли хоть одно отличие в поведении этого варианта?

// Ответ: нет различий, оба варианта работают одинаково.





//     Перепишите функцию, используя оператор '?' или '||'

// Следующая функция возвращает true, если параметр age больше 18.
//
// В ином случае она задаёт вопрос confirm и возвращает его результат.
//
//     function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
//
//     Сделайте два варианта функции checkAge:
//
//     Используя оператор ?
//     Используя оператор ||

// Решение c "?"

// function(age) {
//
// return (age>18) ? true : (confirm('Родители разрешили?'));
// }
//
// Решение с "||"
//
// function(age) {
//     return (age>18) || (confirm('Родители разрешили?'));
// }





// Функция min(a, b)

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
//
//     Пример вызовов:
//
//     min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

// решение
//
// function min(a,b) {
//     if(a>b) {
//         return b;
//     } return a;
// }
// alert( min(a,b) );
// alert( min(6, 10) );  // самостоятельная проверка







// Функция pow(x,n)

// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
//
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
//
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.


// Решение

// let x = prompt('x?','');
// let n = prompt('n?','');
//
// function pow(x,n) {
//     if(n<1) {
//        alert("Степень не поддерживается, используйте натуральное число");
//     } return (x ** n);
// }
//
// alert( pow(x,n) );


//
//
// Задачи
// Перепишите с использованием функции-стрелки
// Замените код Function Expression стрелочной функцией:
//
//     function ask(question, yes, no) {
//         if (confirm(question)) yes()
//         else no();
//     }
//
// ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
// );
//
// // Решение
//
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
//
// ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     ()=> alert("Вы отменили выполнение.")
// )