// Усечение строки

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength,
// заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
//
//     Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
//
//     Например:
//
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
//
// truncate("Всем привет!", 20) = "Всем привет!"


const objects31 = function () {

    function truncate(str, maxlength) {
        // комментарий 1. Получить длину строки str
        // 2. сравнить длину строки str с maxlength
        // 3. если длина строки str меньше или равна maxlength, то
        // возвращаем эту же строку
        // 4. если длина строки str больше maxlength, то
        // возвращаем строку str укороченную до (maxlength - 1) знаков + "…"
        if (str.length <= maxlength) {
            return str;
        }
        let result = (str.slice(0, maxlength - 1)) + "…";
        return result;
    }
        let string = prompt('Введите строку', '');
        let number = +prompt('Введите число', '');

    alert(truncate(string,number));
};