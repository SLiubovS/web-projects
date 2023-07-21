// Создать расширяемый калькулятор
// важность: 5
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
//
//     Задание состоит из двух частей.
//
//    1. Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате
// «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
//
// Пример использования:
//
//     let calc = new Calculator;
//
// alert( calc.calculate("3 + 7") ); // 10
//    2. Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он
// принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
//
//     Например, давайте добавим умножение *, деление / и возведение в степень **:
//
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
//
// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
//     Числа и оператор разделены ровно одним пробелом.
//     Не лишним будет добавить обработку ошибок.


// 1. Повторить задачи про функцию коструктор


// часть вторая:

const objects42 = function () {

    function Calculator() {

        this.functions = new Map();

        this.calculate = function (str) {
            let result = 0;
            let arr = str.split(' ');

            if (arr[1] === '+') {
                result = +arr[0] + +arr[2];
            } else if (arr[1] === '-') {
                result = +arr[0] - +arr[2];
            }
            return result;
        }
        this.addMethod = function (name, func) {
            this.functions.set(name, func); // не понимаю, если использовать решили map, то откуда в этой строке set ?
            let map = new Map();
            map.set("*", (a * b));
            map.set("/", (a / b));
            map.set("**", (a ** b));
alert (map.get('*'));

// не понимаю как тут map использовать и хапуталась, что в итоге получаем, переписав задачу..

        }
    }

    let calc = new Calculator();

    alert(calc.calculate("3 + 7"));
    alert(calc.calculate("3 - 7"));

    let powerCalc = new Calculator;
    powerCalc.addMethod();
    let results = powerCalc.calculate("2 ** 3");
alert( results ); // 8
};