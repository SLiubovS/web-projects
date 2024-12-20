// Фильтрация по диапазону
// важность: 4
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или
// равными a и меньше или равными b и возвращает результат в виде массива.
//
//     Функция должна возвращать новый массив и не изменять исходный.
//
//     Например:

// let arr = [5, 3, 8, 1];
//
// let filtered = filterRange(arr, 1, 4);
//
// alert(filtered); // 3,1 (совпадающие значения)
//
// alert(arr); // 5,3,8,1 (без изменений)

const objects38 = function () {

    let arr = [5, 3, 8, 1];

    function filterRange(arr, a, b) {

        let range = arr.filter(item => (item >= a) && (item <= b));
        alert(range);
    }

    let filtered = filterRange(arr, 1, 4);
    filtered = filterRange(arr, 4, 8);  // для проверки
    filtered = filterRange(arr, 2, 5);  // для проверки
    filtered = filterRange(arr, 3, 6);  // для проверки

    alert(arr);
};