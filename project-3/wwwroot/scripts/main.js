

// тестовый код в качестве примера

// function pendingAction() {
//     let p = document.getElementById("hello-world-text");
//
//     p.innerHTML = "<i>Привет, Дима!</i>";
// }
//
// setTimeout(pendingAction, 5000);



// 1. Таблицу с id="age-table". (вводим в консоль следующий код и находит)

document.getElementById('age-table');

// 2. Все элементы label внутри этой таблицы (их три).

document.querySelectorAll("td > label");

// 3. Первый td в этой таблице (со словом «Age»).

document.querySelector("td:first-child");

// 4. Форму form с именем name="search".

document.querySelector("form"); // не понимаю, я правильно нашла или нет=)

// 5. Первый input в этой форме.

document.querySelector("input:first-child");

// 6. Последний input в этой форме.

document.querySelector("form > input:last-child");