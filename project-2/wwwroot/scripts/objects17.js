// Функция min(a, b)

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
//
// Пример вызовов:
//
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

const objects17 = function () {
    function min(a, b) {
        if (a > b) {
            return b;
        }
        return a;
    }

    alert(min(6, 10));  // самостоятельная проверка
};