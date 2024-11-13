// реализовать функцию factorial(n) которая будет возвращать факториал числа n
// использовать синтаксис Function Declaration
// внутри данной функции должны быть проверки:
// 1. Что в функцию было переданно именно число (подсказка, для этой проверки использовать оператор typeof)
// 2. Что в функцию было переданно положительное число

// написать код который будет с помощью prompt получать число
// передавать это число в функцию factorial
// и выводить результат этой функции с помощью alert

// что такое факториал можно посмотреть вот тут https://skillbox.ru/media/code/chto-takoe-faktorial-i-kak-ego-vychislit/

const objects20 = function () {


    let x = +prompt('Введите число', '');

    if (isNaN(x)) {
        alert('Вы ввели не число');
    } else if (x <= 0) {
        alert('Неверно, введите положительное число');
    }

    function factorial(n) {

        let result = 1;

        for (let i = 1; i <= n; i++) {
            result *= i;
        }

        return result;
    }








    alert(factorial(x));

};