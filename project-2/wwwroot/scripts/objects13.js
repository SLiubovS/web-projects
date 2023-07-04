// Создайте функцию-конструктор Accumulator(startingValue).
//
//     Объект, который она создаёт, должен уметь следующее:
//
//     Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
//     Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
//     Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.
//
//     Ниже вы можете посмотреть работу кода:
//
//     let accumulator = new Accumulator(1); // начальное значение 1
//
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
//
// alert(accumulator.value); // выведет сумму этих значений

const objects13 = function () {
    function Accumulator(startingValue) {
        this.value = startingValue;
        this.read = function () {
            let a = +prompt('Введите число', '');
            this.value += a;
        }
    }

    let acc = new Accumulator(5);
    alert(acc.value);
    acc.read();
    alert(acc.value);
};