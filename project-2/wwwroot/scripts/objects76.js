
// Вывод каждую секунду
// важность: 5
// Напишите функцию printNumbers(from, to), которая выводит число
// каждую секунду, начиная от from и заканчивая to.
//
//     Сделайте два варианта решения.
//
//     Используя setInterval.
//     Используя рекурсивный setTimeout.

const objects76 = function () {


    // 1. Используя setInterval.

    function printNumbers(from, to) {

        let current = from;

        let result = setInterval(function () {

            alert(current);

            if (current === to) {
                clearInterval(result);
            }
            current++;

        }, 1000);
    }


    // 2. Используя рекурсивный setTimeout.

// function printNumbers(from, to) {
//
//     let current = from;
//
//     setTimeout( function go() {
//         alert( current);
//
//     if( current < to) {
//         setTimeout(go, 1000);
//     }
//
//     current++;
//     }, 1000);
// }
    printNumbers(5, 10);
};