// Создайте калькулятор при помощи конструктора, new Calculator
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
//
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:
//
// let calculator = new Calculator();
// calculator.read();
//
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

const objects12 = function () {
    function Calculator(name) {
        this.name = name;
        this.read = function () {
            this.a = prompt('a?', '');
            this.b = prompt('b?', '');
        };
        this.sum = function () {
            return +this.a + +this.b;
        };

        this.mul = function () {
            return this.a * this.b;
        };

    }

    let calculator = new Calculator('Nike');
    alert("Калькулятор называется: " + calculator.name);

    while (true) {

        calculator.read();
        alert("Sum=" + calculator.sum());
        alert("Mul=" + calculator.mul());
        let exit = prompt('Вы хотите выйти?', 'Да');
        if (exit === "Да") {
            break;
        }
    }
};