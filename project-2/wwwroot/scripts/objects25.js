// Сумма пользовательских чисел
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

//
// P.S. Есть «подводный камень» при работе с типами.


const objects25 = function () {
let a = +prompt('Введите число a', '');
let b = +prompt('Введите число b', '');
    if (isNaN(a) || (isNaN(b))) {
        alert('Одно из полей или оба не являются числами!');
        return;
    } alert(a + b);
};