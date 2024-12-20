// Числа Фибоначчи
// важность: 5
// Последовательность чисел Фибоначчи определяется формулой
// Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.
//
//     Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и
//     так далее: 1, 1, 2, 3, 5, 8, 13, 21....
//
// Числа Фибоначчи тесно связаны с золотым сечением и множеством
// природных явлений вокруг нас.
//
//     Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
//
//     Пример работы:
//
//     function fib(n) { /* ваш код */ }
//
// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757


const objects70 = function () {

    function fib(n) {

        let a = 1;
        let b = 1;
        for (let i = 3; i <= n; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }

    alert(fib(3)); // 2
    alert(fib(7)); // 13
    alert(fib(77)); // 5527939700884757
};