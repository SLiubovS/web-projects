// Сделать первый символ заглавным
//
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
//
// ucFirst("вася") == "Вася";


const objects29 = function () {

    function ucFirst(str) {

        let a = '';
        for (let i = 0; i < str.length; i++) {

            if (i === 0) {
                a += str[i].toUpperCase();
            } else {
                a += str[i];
            }
        }

        return a;
    }

    let str = prompt("Введите строку", "дима");
    alert(ucFirst(str));
};