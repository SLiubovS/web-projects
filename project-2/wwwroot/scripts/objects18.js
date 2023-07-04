// Функция pow(x,n)

// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
//
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
//
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

const objects18 = function (){
    let x = prompt('x?', '');
    let n = prompt('n?', '');

    function pow(x, n) {
        if (n < 1) {
            alert("Степень не поддерживается, используйте натуральное число");
        }
        return (x ** n);
    }

    alert(pow(x, n));
};