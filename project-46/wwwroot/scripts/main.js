let arr = []; // для проверки свойств (вывод в консоль)

let peoples = {
    works: "during the day",
    eats: "food",
    wears: "clothes"
}

function FamilyMembers(name, age) {
    this.name = name;
    this.age = age;
    this.ageDifference = function () {
        if (this.age > 20) {
            let ageNew = this.age - 20;
            return `Ребенок родился, когда мне было ${ageNew} лет`;
        } else {
            return `Я родился ${this.age} лет назад`;
        }
    }
}

FamilyMembers.prototype = peoples; // запись буквально говорит: всем FamilyMembers созданным через new, присвой свойства и значения из peoples


let mother = new FamilyMembers("Mom", 50);
let father = new FamilyMembers("Dad", 54);
let son = new FamilyMembers("Dima", 20);

console.log(mother.name);
console.log(father.age);
console.log(`${son.name}, ${son.age}`);

console.log(`${mother.name}: ${mother.ageDifference()}`);
console.log(`${father.name}: ${father.ageDifference()}`);
console.log(`${son.name}: ${son.ageDifference()}`);

// ниже проверка - работает ли прототипирование
console.log(mother.works);
console.log(father.eats);
console.log(son.wears);

for (let elem in son) {
    arr.push(elem);
}
console.log(`Все ключи, которые содержит объект son: ${arr}`);


// разборка классов

class Animal {
    constructor(name, view, legs, wings) {
        this.name = name;
        this.view = view;
        this.legs = legs;
        this.wings = wings;
    }

    determineType() {
        if (this.view === "wild") {
            this.danger = "high";
            this.iron = "it is forbidden";
        } else {
            this.danger = "low";
            this.iron = "can";
        }
    }
}

let tiger = new Animal("tiger", "wild", 4, "no");
let pussyCat = new Animal("pussyCat", "pet", 4, "no");
let hawk = new Animal("hawk", "wild", 2, "yes");

tiger.determineType();
pussyCat.determineType();
hawk.determineType();

console.log(Object.keys(tiger));
console.log(Object.values(tiger));

console.log(Object.keys(pussyCat));
console.log(Object.values(pussyCat));

console.log(Object.keys(hawk));
console.log(Object.values(hawk));




// работа с кнопкой (Открытие окон и методы window, попап)

let button = document.getElementById("but");

let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=550,height=500,left=1150,top=250`;

button.onclick = ()=> {
    let newWindow = open('https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5_%D0%B1%D0%B5%D1%81%D1%81%D0%BC%D0%B5%D1%80%D1%82%D0%B8%D0%B5', 'test', params);
popUpLoad(newWindow);
};

function popUpLoad(event) {
    // // event.close();
    // alert(event.closed); // true
}



let regexp = /\b\d\d:\d\d\b/g;

    let str = "Завтрак в 09:00 или в 10:00 в комнате 123:456";

   // alert(str.match(regexp));

// alert( "Вуля Валя Вуаль".match(/В[уа]ля/gi) ); // null, нет совпадений
// ищет "В", затем [у или а], потом "ля"
// а в строке В, потом у, потом а



let regexp3 = /[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]/gu;

let str3 = `Hi меня зовут Любовь, моя почта: 4815162342@gmail.com`;

// найдены все буквы и цифры
// alert( str3.match(regexp3) ); // H,i,你,好,1,2

// alert( "Java".match(/Java[^script]/) );

// alert( "JavaScript".match(/Java[^script]/) );

// alert( "Javascript".match(/Java[^script]/) );

// alert( "Javascript".match(/Java[^script]/) );


let regexp4 = /\d\d[:-]\d\d/g;
// alert( "Завтрак в 09:00. Ужин в 21-30".match(regexp4) ); // 09:00, 21-30


let regexp5 = /\d{1,}/g; // есть более короткая запись /\d+/g;
let regexp6 = /\b\d\b/g; // или: /\d{0,1}/g
let regexp7 = /\b\d{2}\b/g;
let regexp8 = /\d{3}/g;

// alert( "Найдем все числа +7 (903) 172-24-79".match(regexp5) );
// alert( "Найдем только однозначные числа +7 (903) 172-24-79".match(regexp6) );
// alert( "Найдем только двузначные числа +7 (903) 172-24-79".match(regexp7) );
// alert( "Найдем только трехзначные числа +7 (903) 172-24-79".match(regexp8) );


let str1 = "Следует писать color или colour?";

// alert( str1.match(/colou?r/g) ); // color, colour

// alert( "0 1 0.01 0.002 12.345 7890".match(/\d+\.\d+/g) ); // 0.01 0.002 12.345



// alert( "<body><head><meta charset=\"UTF-8\"></head><div><h1>Привет</h1>...<h15></h15></div></body>".
// match(/<[h-i][h-i0-9]*>/gi) ); // найдем 2 html тега: h1 и h15


// alert( "<body><head><title>Тема</title></head><div><h1>Привет</h1>...<h15></h15></div></body>".
// match(/<[h-i][a-z]+>/gi) ); // найдем 1 html тег: head


// let regexp9 = /\.+/g; // или: /\.{3,}/g;
// //alert( "Привет!... Как дела?.....".match(regexp9) ); // ..., .....
//
// let regexp10 = /#[0-9A-F]{6}\b/gi;
//
// let str2 = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";
//
// alert( str2.match(regexp10) )  // #121212,#AA00ef


// alert("123 456".match(/\d+? \d+?/g) ); // 123 4


// let regexp11 = /<!--.*?-->/gs;
//
// let str4 = `... <!-- My -- comment
// test --> ..  <!----> ..
// `;
//
// alert( str4.match(regexp11) ); // '<!-- My -- comment \n test -->', '<!---->'



// Поиск HTML-тегов
// Создайте регулярное выражение, чтобы найти все (открывающие и закрывающие) HTML-теги с их атрибутами.
//
//     Пример использования:

//     let regexp12 = /<.+=".+"?>/g;
//
//     // решение автора: /<[^<>]+>/g;
//
// let str5 = '<> <a href="/"> <input type="radio" checked> <b>';
//
// alert( str5.match(regexp12) ); // '<a href="/">', '<input type="radio" checked>', '<b>'
// // В этой задаче мы предполагаем, что теги выглядят как <...что угодно...>, и внутри тегов не может быть символов < и > (первый встреченный > закрывает тег).


// Проверьте MAC-адрес
// MAC-адрес сетевого интерфейса состоит из 6-ти двузначных шестнадцатеричных чисел, разделённых двоеточиями.
//
//     Например: '01:32:54:67:89:AB'.
//
//     Напишите регулярное выражение, которое проверит, является ли строка MAC-адресом.
//
//     Использование:

// let regexp13 = /^[0-9a-f]{2}(:[0-9a-f]{2}){5}$/i;
//
// alert( regexp13.test('01:32:54:67:89:AB') ); // true
//
// alert( regexp13.test('0132546789AB') ); // false (нет двоеточий)
//
// alert( regexp13.test('01:32:54:67:89') ); // false (5 чисел, должно быть 6)
//
// alert( regexp13.test('01:32:54:67:89:ZZ') ) // false (ZZ в конце строки)



// Найти цвет в формате #abc или #abcdef
// Напишите регулярное выражение, которое соответствует цветам в формате #abc или #abcdef. То есть: # и за ним 3 или 6 шестнадцатеричных цифр.
//
//     Пример использования:
//
//     let regexp14 = /#([0-9A-F]{3})+\b/gi;  //решение автора: /#([a-f0-9]{3}){1,2}\b/gi;
//
// let str6 = "color: #3f3; background-color: #AA00ef; and: #abcd";
//
// alert( str6.match(regexp14) ); // #3f3 #AA00ef
// P.S. Это должно быть ровно 3 или 6 шестнадцатеричных цифр. При этом значения с 4-мя цифрами типа #abcd не должны совпадать в результат.





// Найти все числа
// Напишите регулярное выражение, которое ищет любые десятичные числа, включая целочисленные, с плавающей точкой и отрицательные.
//
//     Пример использования:

// let regexp15 = /-?\d+(\.\d+)?/g;
//
// let str7 = "-1.5 0 2 -123.4.";
//
// alert( str7.match(regexp15) ); // -1.5, 0, 2, -123.4





// Разобрать выражение
// Арифметическое выражение включает два числа и оператор между ними. Например:
//
// 1 + 2
// 1.2 * 3.4
// -3 / -6
// -2 - 2
// Оператором может быть: "+", "-", "*" или "/".
//
//     В выражении могут быть пробелы в начале, в конце или между частями выражения.
//
//     Создайте функцию parse(expr), которая принимает выражение и возвращает массив из трёх элементов:
//
//     Первое число.
//     Оператор.
//     Второе число.
//     Например:
//


// let [a, op, b] = parse("1.2 * 3.4");
//
// function parse(string) {
//
// let regexp16 = /(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/;
//
// let resultat = string.match(regexp16);
//
//     let arr2 = ["a", "op", "b"];
//     arr2[0] = resultat[1];
//     arr2[1] = resultat[2];
//     arr2[2] = resultat[3];
//
//     return arr2;
// }
//
// parse("1.2 * 3.4");
//
// alert(a); // 1.2
// alert(op); // *
// alert(b); // 3.4




// let str8 = `He said: "She's the one!".`;
//
// let regexp17 = /(['"])(.*?)\1/g;
//
// alert( str8.match(regexp17) ); // "She's the one!"




// Задачи
// Найдите языки программирования
// Существует много языков программирования, например, Java, JavaScript, PHP, C, C++.
//
// Напишите регулярное выражение, которое найдёт их все в строке Java JavaScript PHP C++ C:

//     let regexp18 = /Java(Script)?|PHP|C(\+\+)?/gi;
//
// alert("Java JavaScript PHP C++ C".match(regexp18)); // Java JavaScript PHP C++ C





// Найдите пары BB-кодов
// BB-код имеет вид [tag]...[/tag], где tag– это один из: b, url или quote.
//
//     Например:
//
// [b]текст[/b]
//     [url]http://ya.ru[/url]
//     BB-коды могут быть вложенными. Но сам в себя тег не может быть вложен, например:
//
// Возможно:
//     [url] [b]http://ya.ru[/b] [/url]
//     [quote] [b]текст[/b] [/quote]
//
// Не может быть:
//     [b][b]текст[/b][/b]
// Теги могут содержать переносы строк, это допустимо:
//
//     [quote]
//         [b]текст[/b]
//     [/quote]
// Создайте регулярное выражение для поиска всех BB-кодов и их содержимого.
//
//     Например:

// let regexp19 = /\[(b|url|quote)].*?\[\/\1]/gs;
//
// let str9 = `
//   [b]привет![/b]
//   [quote]
//     [url]http://ya.ru[/url]
//   [/quote]
// `;
//
// alert( str9.match(regexp19) ); // [b]привет![/b],[quote][url]http://ya.ru[/url][/quote]




// Найдите строки в кавычках
// Создайте регулярное выражение для поиска строк в двойных кавычках "...".
//
//     Важно, что строки должны поддерживать экранирование с помощью обратного слеша, по аналогии со строками JavaScript. Например, кавычки могут быть вставлены как \", новая строка как \n, а сам обратный слеш как \\.
//
// let str = "Как вот \"здесь\".";
// В частности, обратите внимание: двойная кавычка после обратного слеша \" не оканчивает строку.
//
// Поэтому мы должны искать от одной кавычки до другой, игнорируя встречающиеся экранированные кавычки.
//
//     В этом и состоит основная сложность задачи, которая без этого условия была бы элементарной.
//
//     Примеры подходящих строк:
//
//     .. "test me" ..
// .. "Скажи \"Привет\"!" ... (строка с экранированными кавычками)
// .. "\\" ..  (внутри двойной слеш)
// .. "\\ \"" ..  (внутри двойной слеш и экранированная кавычка)
// В JavaScript приходится удваивать обратные слеши, чтобы добавлять их в строку, как здесь:

//     let str10 = ' .. "test me" .. "Скажи \\"Привет\\"!" .. "\\\\ \\"" .. ';
// let regexp20 = /"(\\.|[^"\\])*"/g;
// // эта строка в памяти:
//
// alert(str10.match(regexp20)); //   .. "test me" .. "Скажи \"Привет\"!" .. "\\ \"" ..



// Найдите весь тег
// Напишите регулярное выражение, которое ищет тег <style...>. Оно должно искать весь тег: он может как не иметь атрибутов <style>, так и иметь несколько <style type="..." id="...">.
//
// …Но регулярное выражение не должно находить <styler>!
//
//     Например:
//
// let regexp21 = /<style(>|\s.*?>)/g;
// let str11 = '<style> <styler> <style test="...">';
// alert( str11.match(regexp21) ); // <style>, <style test="...">




// Найдите неотрицательные целые
// Есть строка с целыми числами.
//
//     Создайте регулярное выражение, которое ищет только неотрицательные числа. Ноль разрешён.
//
//     Пример использования:

//     let regexp22 = /\b(?<!-)\d+\b/g; // решение автора: /(?<![-\d])\d+/g;
//
// let str12 = "0 12 -5 123 -18";
//
// alert( str12.match(regexp22) ); // 0, 12, 123
// 0,12,5,123,18






// Вставьте после фрагмента
// У нас есть строка с HTML-документом.
//
//     Напишите регулярное выражение которое вставляет <h1>Hello</h1> сразу же после тега <body>. У тега могут быть атрибуты.
//
// Например:

//     let regexp23 = /<body.*?>/;
//
// let str13 = `
// <html>
//   <body style="height: 200px">
//   ...
//   </body>
// </html>
// `;

// str13 = str13.replace(regexp23, `$&<h1>Hello</h1>`);
//
// alert(str13);



// альтернативный вариант:

//     str13 = str13.replace(/(?<=<body.*?>)/, `<h1>Hello</h1>`);
//
// alert(str13);







