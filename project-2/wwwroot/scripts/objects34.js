
// Сумма введённых чисел
// важность: 4
// Напишите функцию sumInput(), которая:
//
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
//     Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
//     P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».



const objects34 = function () {

    function sumInput(b) {
        let arr = [0];
        let sum = 0;
        // sum = (+arr[0] + a);
return arr.push(sum);
        // return (arr + arr.push("a"));
    }
    while (true) {
        let a = +prompt('Введите значение', '');
        if (isNaN(a)) {
            break;
        }
        if (a === null) {
            break;
        }
        return sum += a;
    }
    alert(sumInput(b));
};