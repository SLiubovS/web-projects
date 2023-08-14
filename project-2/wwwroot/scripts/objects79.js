
// Дочерние элементы в DOM
// важность: 5
// Для страницы:
//
//     <html>
//     <body>
//     <div>Пользователи:</div>
//     <ul>
//         <li>Джон</li>
//         <li>Пит</li>
//     </ul>
//     </body>
//     </html>
// Напишите код, как получить…
//
// элемент <div>?
//     <ul>?
//         второй <li> (с именем Пит)?


const objects79 = function () {


alert( document.body.firstElementChild );

alert( document.body.children[1]);

    alert( document.body.children[1].lastElementChild);





};