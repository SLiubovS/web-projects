// Подсчёт количества свойств объекта
// важность: 5
// Напишите функцию count(obj), которая возвращает количество свойств объекта:
//
//     let user = {
//         name: 'John',
//         age: 30
//     };
//
// alert( count(user) ); // 2
// Постарайтесь сделать код как можно короче.
//
//     P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».


const objects55 = function () {

    let user = {
        name: 'John',
        age: 30
    };

    function count(obj) {
        return Object.keys(user).length;
    }
    alert(count(user)); // 2
};