// Создайте калькулятор
//
// Создайте объект calculator (калькулятор) с тремя методами:
//
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

const objects10 = function () {
    let calculator = {
        read() {
            this.n = prompt('a?', '');
            this.k = prompt('b?', '');
        },
        sum() {
            return (+this.n + +this.k);
        },
        mul() {
            return this.n * this.k;
        }
    };

    calculator.read();
    alert(calculator.sum());
    alert(calculator.mul());
};