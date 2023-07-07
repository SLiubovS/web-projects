// Ввод числового значения

// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
//
//     Функция должна возвращать числовое значение.
//
//     Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.
//



const objects26 = function () {

function readNumber() {

    while (true) {

        let a = +prompt('Введите число', '0');

        if (a === null) {
            return null;
        }

        if (isNaN(a)) {
            continue;
        }

        return a;
    }
}

alert("Число: " + readNumber());

};