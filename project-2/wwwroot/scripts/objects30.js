// Проверка на спам

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
//
// Функция должна быть нечувствительна к регистру:
//
// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false


const objects30 = function () {

    function checkSpam(str) {
        str = str.toLowerCase();
        let pos = 0;
        let a = 'viagra';
        let b = 'XXX'.toLowerCase();

        let c = str.indexOf(a, pos);
        let d = str.indexOf(b, pos);

        if ((c > -1) || (d > -1)) {
            return true;
        }
        return false;
    }

    alert(checkSpam('XXX'));             // true
    alert(checkSpam('viagra'));          // true
    alert(checkSpam('buy ViAgRA now'));  // true
    alert(checkSpam('free xxxxx'));      // true
    alert(checkSpam("innocent rabbit")); // false
    alert(checkSpam('XxXxXXxxxxxxxx'));  // true


};