// Выделить число

// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
//
//     Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
//
//     Например:
//
// alert( extractCurrencyValue('$120') === 120 ); // true


const objects32 = function () {

    function extractCurrencyValue(str) {

        let result = '';

        // запускаем перебор символов строки
        for (let char of str) {

            // приводим символ к числу
            let num = +char;

            if (!isNaN(num)) {
                result += char;
            }
        }

        return result;
    }

    let inputStr = prompt('Введите строку', '$120');
    alert(extractCurrencyValue(inputStr));
};